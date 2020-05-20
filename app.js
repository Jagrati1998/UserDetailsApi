var express = require('express');

var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var path = require('path');

var app = express();
const route = require('./routes/route.js');
mongoose.connect("mongodb+srv://JagratiMishra:Jagrati@1998@jmcluster-kdhzk.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.connection.on('connected', () => {
  console.log("Connected At database");
});
mongoose.connection.on('err', (err) => {
  if (err) {
       console.log('Error data in ' + err);
 }
});
const MongoClient = require('mongodb').MongoClient;

const Port = process.env.PORT || 3000;



app.use(bodyparser.json());




app.use('/api', route);




app.get('/', (req, res) => {
    res.send("Welcome to User App");
});

app.listen(Port, () => {
    console.log('server started at port' + Port);
});
