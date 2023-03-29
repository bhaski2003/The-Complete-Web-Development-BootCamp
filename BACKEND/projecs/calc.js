// jshint esversion:6


const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { request } = require("express");

app.use(bodyParser.urlencoded({extended: true}))

// app.get('/' , (req , res) => {
//     res.send('k')
//     console.log(req)  // this logs us the cookies and other stuffs via brwsr
// })

app.get('/about' , (req,res)=> {
    res.sendFile('about.html')
})

app.get('/', (req  , res) => {
    // console.log(__dirname )
    res.sendFile(__dirname + "/calc.html");  //gives us the current wrking direc
})

app.post('/', (req ,res) =>{
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var op = (req.body.operation);

    switch(op)
    {
        case '+':
            var result = Math.floor(n1+n2);
            break;
         case '-':
            var result = Math.floor(n1-n2);
            break;
        case '*':
            var result = Math.floor(n1*n2);
            break;
        case '/':
            var result = Math.floor(n1/n2);
            break;
    }
   
    res.send("the result of operation is :" + result)    
})


app.listen(5000 , () => {
    console.log("srvr @  http://localhost:5000/")
})