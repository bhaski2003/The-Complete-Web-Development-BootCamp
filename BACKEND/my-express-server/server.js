// jshint esversion:6


const express = require("express");
const app = express();

app.get("/he" , (request , res) => {
    // console.log(request);
    res.send("heh")
});

app.get("/bhask", (request , res) => {
    res.send("<h1> im bhaskar </h2>")
})

app.listen(3000 , () => {
    console.log("here");
});

app.get("/about",(request ,res) => {
    res.send("<h3>im bhaskii i love my FAM</h3>")
})

// better use nodemon to keep sever alwys up and running even as per the changes tht we make in our code
// cmd - npm i nodemon

