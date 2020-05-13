import * as functions from "firebase-functions";

import * as express from 'express'
import * as multer from 'multer'
import * as cors from 'cors'
const upload = multer();

const app = express();
app.use(cors({origin: true}));

app.post('/', upload.single('file'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    const inpObj = req.body;
    //const file = req.file;
    if(!inpObj.email || inpObj.email.length > 128) res.status(400).send('Bad Request');
    if(!inpObj.name || inpObj.name.length > 32) res.status(400).send('Bad Request');
    if(!inpObj.statement || inpObj.statement.length > 1000) res.status(400).send('Bad Request');
    //const {email, name, statement} = inpObj;
    //console.log(email, name, statement, file);
    res.status(200).send('OK');
});

export const submitApplication = functions.region("asia-east2").https.onRequest(app);
