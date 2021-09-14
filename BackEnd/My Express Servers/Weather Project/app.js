// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

// use to access given urls and thier data
const https = require('https');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  // use https to get the info from url or access data on url
  const query = req.body.cityName; // to take the input with help of body-parser
  const apikey = "your api key";
  const unit = "metric";
  //creating custom url based on client data provided
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" +query + "&appid=" + apikey + "&units=" + unit;

  https.get(url,function(response){
    // console.log(req);

    response.on("data",function(data){
      // convert data to jason format
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      //write method is used to store things to be send at once
      res.write("<h1>The temperature in " + query + " is " + temp + " degree Celcius</h1>");
      res.write("<p>The weather is curently "+ weatherDescription +"</p>");
      res.write("<img src = "+ imgURL+">");
      res.send();
    });
  });
});




app.listen(3000,function(){
  console.log("Server is running on port 3000.");
});
