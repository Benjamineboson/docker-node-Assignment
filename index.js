const express = require('express');
const PORT = process.env.PORT || 4000;
const quotes = require('./module/quotes-module');
const app = express();


app.get('/',(req,res)=>{
    let quote = quotes.getQuote();
    res.json({
        msg: "Hello World!",
        quote: quote
    })
})

app.listen(PORT,(req,res)=>{
    console.log("Listening on "+PORT);
})