const { MongoClient } = require('mongodb');

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

let connect = ()=>{
    return new Promise((resolve, reject) => {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((error)=>{
            if(error){
                console.info("[Db] Unable to connect to server: " + error);
                reject(error)
            } else {
                console.info("[Db] Connected successfully to server")
                exports.db = client.db(dbName)
                resolve(exports.db)
            }
        })
    })
}

exports.connect = connect
exports.db = null



