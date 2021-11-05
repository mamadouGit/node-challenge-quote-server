// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const { json } = require("express");
const express = require("express");
const app = express();
const api=require("./api")

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
const pick=pickFromArray(quotes)


app.get("/quotes",(req,res)=>{
  res.json({quotes})
})
app.get(`/quotes/random`,function(req,res){
  res.json({pick})
})



//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT||6020, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
