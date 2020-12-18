const quotes = require('find-quote');

function getQuote(){
    return quotes.getQuote();
}

module.exports = {getQuote};