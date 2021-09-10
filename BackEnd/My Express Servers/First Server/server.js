//jshint esversion:6
//First Express Serve

const express = require( "express");
const app = express();

app.get("/",function(req, res){
  // console.log(req);
  // res.send("Hello");
  res.send("<h1>Hello World</h1>");
});

//using different route
app.get("/contact",function(req, res){
  res.send("contact me at aryaman@gamil.com");
});

app.get("/about",function(req, res){
  res.send("I am Aryaman. I love reaing");
});

app.get("/hobbies",function(req, res){
  res.send("<ul><li>code</li><li>reading</li><li>coffee</li></ul>");
});

app.listen(3000,function(){
  console.log("Server started on prot 3000");
});

//handling request and response on server
