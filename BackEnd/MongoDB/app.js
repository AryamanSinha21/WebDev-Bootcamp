//jshint esversion:6
const express = require('express');
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useUnifiedTopology: true, useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
// creating a collection in db

// // old Schema
// const fruitSchema = new mongoose.Schema ({
//   name: String,
//   rating: Number,
//   review: String
// });

// new schema for validation
const fruitSchema = new mongoose.Schema ({
  name: {
    type:String,
    required:[true,"Why no fruit?"]
  },
  rating: {
    // this for validation of data to be within the given range otherwise fatal error
    type: Number,
    min:1,
    max:10
  },
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating: 7,
  review: "Pretty Solid as a fruit"
});

// to save the given data in the database
fruit.save();


// new collectioin
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  // relationship using mongoose
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const pineapple = new Fruit({
  name:"Pineapple",
  rating: 9,
  review: "Great fruit"
});

pineapple.save();

const person =new Person ({
  name : "John",
  age: 53,
  // with the eariler relationship addon jhon can have a favouriteFruit
  favouriteFruit: pineapple
});

person.save();

// reading from the db
// to just log the name
Fruit.find(function(err,fruits){
  if(err){
    console.log("err");
  }else{

    //to automatically close the connection with the db

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });

  }
});


// // update database
//
// Fruit.updateOne({selector: parameter}, {update: parameter},function(err){
//   //function to check error
// });

// // delete database
//
// Fruit.deleteOne({selector:parameter},function(err){
//   //function to check error
// }); // check documentation for delete many


// relationship using mongoose
