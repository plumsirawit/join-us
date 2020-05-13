import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as mime from "mime-types";

import * as express from "express";
//@ts-ignore
import * as fileMiddleware from "express-multipart-file-parser";
import * as cors from "cors";

const app = express();
app.use(cors({ origin: true }));
app.use(fileMiddleware);

admin.initializeApp();
const db = admin.firestore();
const bucket = admin.storage().bucket();

app.post("/", (req, res) => {
    //@ts-ignore
    const file = req && req.files && req.files.length > 0 ? req.files[0] : null;
    const inpObj = req.body;
    if (!inpObj.email || inpObj.email.length > 128)
        return res.status(400).send("Bad Request");
    else if (!inpObj.name || inpObj.name.length > 32)
        return res.status(400).send("Bad Request");
    else if (!inpObj.statement || inpObj.statement.length > 1000)
        return res.status(400).send("Bad Request");
    else {
        const { email, name, statement } = inpObj;
        if (file) {
            return db
                .collection("applications")
                .add({
                    email,
                    name,
                    statement,
                })
                .then((ref) => {
                    const ext = mime.extension(file.mimetype);
                    const fpath = path.join(os.tmpdir(), ref.id + "." + ext);
                    return new Promise<string>((resolve) => {
                        fs.writeFile(fpath, file.buffer, () => resolve(fpath));
                    });
                })
                .then((fpath) => {
                    return bucket.upload(fpath);
                })
                .then(() => {
                    return res.status(200).send("OK");
                });
        } else {
            return db
                .collection("applications")
                .add({
                    email,
                    name,
                    statement,
                })
                .then(() => {
                    return res.status(200).send("OK");
                });
        }
    }
});

export const submitApplication = functions
    .region("asia-east2")
    .https.onRequest(app);
