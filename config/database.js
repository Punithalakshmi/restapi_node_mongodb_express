const mongoose = require('mongoose');
const mongodb = require("mongodb").MongoClient;

const connectDatabase = async() =>{
    //   console.log(MongodbString);
    const dnt = await mongoose.connect(MongodbString);
    database = dnt.db('makilcart');
    if(!database){
        console.log('Database not connected');
    }
    return database;
}

module.exports = connectDatabase;