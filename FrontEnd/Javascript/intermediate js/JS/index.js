// //BMi calculator advance
// function bmiCalculator (weight, height) {
//     var bmi=weight/(height*height);
//     var interpretation;
//     if(bmi&lt;18.5){
//         interpretation ="Your BMI is "+bmi +", so you are underweight.";
//     }
//     else if(bmi&lt;24.9){
//          interpretation = "Your BMI is "+bmi +", so you have a normal weight.";
//     }
//     else if(bmi&lt;29.9){
//          interpretation = "Your BMI is "+bmi +", so you are overweight.";
//     }
//     else if(bmi&lt;34.9){
//         interpretation = "Your BMI is "+bmi +", so you are obese.";
//     }
//     else{
//         interpretation = "Your BMI is "+bmi +", so you are extremely obese";
//     }
//     console.log(interpretation);
// }

// // Leap year or not
// function isLeap(year) {
//
//
//   //Write your code here.
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return "Leap year.";
//       } else {
//         return "Not leap year.";
//       }
//
//     } else {
//       return "Leap year.";
//     }
//
//   } else {
//     return "Not leap year.";
//   }
// }



// //99 bottels of beer
// function beer() {
//   var numberOfBottles = 99
//   while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//       bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//     numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
//   }
// }


// //fibonacci series
// function fibonacciGenerator(n) {
//   var output = [];
//
//   if (n === 1) {
//     output = [0];
//   } else if (n == 2) {
//     output = [0, 1];
//   } else {
//     var a = 0,
//       b = 1;
//     for (var i = 0; i < n; i++) {
//       var c = a + b;
//       output.push(a);
//       a = b;
//       b = c;
//     }
//   }
//
//   return output;
//
// }
