//In JQuery
//$("h1") === document.querySelector("h1") or document.querySelectorAll("h1")

// //we can use .css() method to change the style
// // to set a css value we use 2 arguments one is attribute and the other value
// $("h1").css("color","red"); //=> changes the color to red
// // to get a css value we just use one argument that is the attribute
// console.log($("h1").css("color")); //=> states the current color of h1

// // or we can add class using .addClass() method
// //=> document.querySelector("h1").classList.addClass("class") === $("h1").addClass.("class")
// // to add multiple class we seperate them with space
// // => $("h1").addClass.("class1 class2")
// setTimeout(function(){
//   $("h1").addClass("big-title");
// },1000);
// // similar to addClass() we can use removeClass()method
// setTimeout(function(){
//   $("h1").removeClass("big-title");
// },2000);
// // .hasClass("class") method is used check wether a specific class is present for that query or // NOTE:


// // .text() method is used to change the text of a query and .html() method works as innerHTML in javascript
// $("h1").text("hey");
// $("button").html("<em>cliiiick</em>");


// // similar to the .css method we can use the .attr method to get or set
// // any attribute of a given query
// console.log($("a").attr("href")); //=> gives https://www.google.com
// $("a").attr("href","https://www.bing.com"); //=> set href to https://www.bing.com


// // adding an event listner in jquery
// // in js we used the .addEventListner("event",function())method but in jqury it is as simple
// // as .event(function())
//
// $("button").click(function(){
//   $("h1").css("color","purple");
// });

// //for key press addEventListner
// $("input").keypress(function(event){
//   console.log(event.key);
// });
// // cahnge the text in h1
// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });


// // a more flexible way to  add Event Listner is to use the .on() method
// // this works similar to the previous addEventListner method
// $("h1").on("mouseover",function(){
//   $("h1").css("color", "purple");
// });
// //this works for any of the DOM events

// // adding html elements on fly
// $("h1").before("<button>New</button>"); //=> adds before the h1 elements
// $("h1").after("<button>New</button>"); //=> adds after the  h1 element
// $("h1").prepend("<button>New</button>"); //=> adds before the content in the h1 element
// $("h1").append("<button>New</button>"); //=> adds after the content in the h1 element
// $(query).remove() removes all relevent querySelector

// //animation using JQuery
// use .hide() .show() .toggle(); => to hide / show or toogle hide and show
// use .fadeOut() .fadeIn(); fadeToggle() =>to fadeout/fadein or toggle fadeout and fadein
// use .animate() => to animate css properties with numeric values eg: margin; opacity...
// // we can chain the effect by adding the required animation function in the sequence prefered
// // use the documentaion such mdn or w3shools for more reference












//
