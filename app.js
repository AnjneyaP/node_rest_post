const express = require('express');
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
const bookRouter = require('./route/bookRoute');

const port = process.env.PORT || 3000;

const db = mongoose.connect('mongodb://localhost/bookAPI')
app.use(bodyparser.urlencoded( {extended : true }));
app.use(bodyparser.json());

app.use('/api',bookRouter);

app.get('/', (req, res) => {

    res.send('Hello my nodeman test');

});

app.listen(port, () => {

    console.log("App is runnung on " + port);

});