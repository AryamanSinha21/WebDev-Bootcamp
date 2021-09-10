//jhshist esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const works = [];

// use to implement the ejs template
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//declearing an array to make it itterable in ejs


app.get("/", function(req, res) {

  // using the date module to render the lsit title
  let day = date.getDate();


  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {

  // every post adds the intput in array
  let item = req.body.newItem;
  if (req.body.button == "Work") {
    works.push(item);

    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
});


app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work",
    newListItems: works
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});



// // basic logic to check a weekday
// let currentday = today.getDay();
// let day = "";
// switch (currentday) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//   console.log("Error: current day is equal to "+currentday);
//
// }
