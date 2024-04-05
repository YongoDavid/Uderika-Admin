const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'));
app.use((req,res,next)=>{
    console.log('Admin Server started')
    next()
});


// GET DATA FROM API 
app.get()


app.listen(3000);