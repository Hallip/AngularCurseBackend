// Requires
var express = require('express')
var mongoose = require('mongoose')

//Db connection
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', ( err, res)=>{
    if( err ) throw err;
    console.log('MongoDB:\x1b[32m%s\x1b[0m',' Online')
})

// Init vars
var app = express()

// Listening requests
app.listen(3000, () => {
    console.log('express server running on port:\x1b[32m%s\x1b[0m',' 3000')
})


// Routes
app.get('/', ( req, res, next ) =>{

    res.status(200).json({
        ok: true,
        mensaje: 'working!'
    })
    
})