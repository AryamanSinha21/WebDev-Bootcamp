//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const app2 = express();

app.use(bodyParser.urlencoded({extended:true}));
app2.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  //__dirname give the present working directory for the file
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  // console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result =num1 + num2;
  res.send("The result of the calculatioin is = "+result);
});

app.listen(3000,function(){
  console.log("Server started on prot 3000");
});

app2.get("/",function(req,res){
  //__dirname give the present working directory for the file
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app2.post("/",function(req,res){
  // console.log(req.body);
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmi =weight/(height*height);
  res.send("Your BMI = "+bmi);
});

app2.listen(8080,function(){
  console.log("Server started on prot 8080");
});
