const quotes = [
    { quote: "a", author: "0", },
    { quote: "b", author: "1", },
    { quote: "c", author: "2", },
    { quote: "d", author: "3", },
    { quote: "e", author: "4", },
    { quote: "f", author: "5", },
    { quote: "g", author: "6", },
    { quote: "h", author: "7", },
    { quote: "i", author: "8", },
    { quote: "j", author: "9", },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;