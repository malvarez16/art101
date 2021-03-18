/*
  * Author: May Alvarez <mamialva@ucsc.edu>
  * Created 3 February 2021
  * License: Public Domain
  */

  //Define the variables
  function intakeAndSort() { //declare the function
    //prompt the user to give their name
  var userName = window.prompt("Please insert your name here.");
  console.log("userName =", userName);
  //split the string of the username into an array of letters
  var array = userName.split('');
  console.log("array =", array);
  //sort the ray alphabetically
  var sorted = array.sort();
  console.log("sorted =", sorted);
//join together the array of letters
  var joined = sorted.join('');
  console.log("joined =", joined);
  //return the result of the joined string
  return joined;
}

//output
document.writeln("Enjoy your new name!: ", intakeAndSort(), "</br>");
document.getElementById('id').stylecolor="blue";
