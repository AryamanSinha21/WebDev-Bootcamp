//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
//to apply static links to the html page
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: fname,
        LNAME: lname,

      }
    }]
  };

  // compressing out json objec to string
  const jsonData = JSON.stringify(data);

  const url = "https://us5.api.mailchimp.com/3.0/lists/your-audiance-id";

  const options = {
    method: "POST",
    auth: "AryamanSinha:our api key"
  };


  // to initiaze request for sending data

  const request = https.request(url, options, function(response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  // to send the jsonData to mailchimp
  // request.write(jsonData);
  // to specify that work of request is done
  request.end();


});

app.post("/failure",function(req, res){
  res.redirect("/");
});

// rocess.env.PORT is used to act as a dynamic port for heroku

app.listen(process.env.PORT ||3000, function() {
  console.log("Server is running on port 3000.");
});





