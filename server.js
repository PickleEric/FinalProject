let express = require("express")
let routes = require('./routes/routes')
let path = require('path')
let app = express()
let bodyParse = require('body-parser')

app.use('/api', routes)

app.use(express.static(path.join(__dirname, 'calendar-api', 'dist')))

app.use(bodyParse.json())

app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send("server error")
})

let server = app.listen(process.env.PORT || 5000, function(){
    console.log('Express server running on port', server.address().port)
})