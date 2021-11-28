import express from "express";

const app = express();

app.listen(3000);

app.get('/v1', (req, res) => {
    res.send('testtesttes');
});