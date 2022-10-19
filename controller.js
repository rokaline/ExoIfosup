const db = require('./db');

exports.hellow = (req, res) => {
    db.db.collection("TEST").findOne({ field:"Hello World" }).then(result => {
        res.status(201).json(result)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error + '. Please contact the webmaster')
    })
};

