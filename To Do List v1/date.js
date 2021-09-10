// creating my own module like express

// we can create our own modules with specific function
// and then export them to the required files

module.exports.getDate = function() {

  const today = new Date();
  // advance logic to find weekday
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);

};

// just using exports is a shorter way of using module.exports
// function can also be created by assiging them to a variable
// as anonymous function
exports.getDay = function() {

  const today = new Date();
  // advance logic to find weekday
  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};
