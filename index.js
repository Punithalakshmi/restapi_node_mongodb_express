const express = require('express');
const mongoose = require('mongoose');
const errorMiddleware = require('./middlewares/error');
const route    = require('./routes/routes');
const mongodb = require("mongodb").MongoClient;
require('dotenv').config();

const MongodbString = process.env.DATABASE_URL;

console.log(MongodbString);

const app = express();

app.use(express.json());

app.listen('3000',() => {
  console.log(`Node JS Running Server started at ${3000}`);
})

app.use('/api',route);

 app.get('/', function(req, res) {
   res.send({success:true})
 });

let database;

async function getDatabase(){
  console.log(MongodbString);
  return await mongoose.connect(MongodbString);

}

getDatabase().then(() => console.log('Database connected')).catch((err) => console.error(err))

app.use(errorMiddleware);

//module.exports = app;