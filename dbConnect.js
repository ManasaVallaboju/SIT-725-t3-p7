
//Using dotenv 
require('dotenv').config()

//mongoDb connection...
const MongoClient = require('mongodb').MongoClient; 
const uri = 'mongodb+srv://newuserm:LKEHdyWi1tklTBVf@cluster0.7keuks3.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

//For Connection, Connects if there are no errors or show error..
client.connect((err,db) => {
    if(!err){
        console.log('MongoDb Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})

//Module's use to extract all the objects in different files, in this we are using Mongo client from the module.
module.MongoClient = client;