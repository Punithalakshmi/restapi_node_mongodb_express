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

const server = app.listen('3000',() => {
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

process.on('unhandledRejection',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log('Shutting down the server due to unhandled rejection error');
  server.close(()=>{
      process.exit(1);
  })
})

process.on('uncaughtException',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log('Shutting down the server due to uncaught exception error');
  server.close(()=>{
      process.exit(1);
  })
})

app.use(errorMiddleware);

//module.exports = app;