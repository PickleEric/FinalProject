let express = require("express")
let db = require('../models')// fetches what index exports
let Client = db.Client // referance from our cliant model
let Sequelize = require('sequelize')
let router = express.Router() // matches requests to functions that can responed 


router.post('/clients', function (req, res, next){
 Client.create( req.body ).then( (data) => {
        return res.status(201).send("Success")
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map (e=>e.message)
            console.log(messages)
            return res.status(400).json(messages)
        }
        return next(err)
    })
})


module.exports = router