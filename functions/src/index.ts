import * as functions from "firebase-functions";

import express = require('express');
import cors = require('cors');

const app = express();
app.use(cors({origin: true}));

app.post('/', (req, res) => {
    const inpObj = JSON.parse(req.body);
    if(!inpObj.email || inpObj.email.length > 128) res.status(400).send('Bad Request');
    if(!inpObj.name || inpObj.name.length > 32) res.status(400).send('Bad Request');
    if(!inpObj.statement || inpObj.statement.length > 1000) res.status(400).send('Bad Request');
    if(!inpObj.file) inpObj.file = null;
    const {email, name, statement, file} = inpObj;
    console.log(email, name, statement, file);
    res.status(200).send('OK');
});

export const submitApplication = functions.region("asia-east2").https.onRequest(app);
