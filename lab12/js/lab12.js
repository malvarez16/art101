/*
  * Author: May Alvarez <mamialva@ucsc.edu>
  * Created 18 February 2021
  * License: Public Domain
  */

//Return Hats

function sortingdemigod(str) {
  len = str.length;
  mod = len % 8;
  if (mod == 0) {
    return "Zeus"
  }
  else if (mod == 1){
    return "Poseidon"
  }
  else if (mod == 2){
    return "Hades"
  }
  else if (mod == 3){
    return "Athena"
  }
  else if (mod == 4){
    return "Aphrodite"
  }
  else if (mod == 5){
    return "Hermes"
  }
  else if (mod == 6){
    return "Ares"
  }
  else if (mod == 7){
    return "Demeter"
  }
  else if (mod == 8){
    return "Apollo"
  }
}

//Declare button variable
var myButton = document.getElementById("button")
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var parent = sortingdemigod(name);
  newText = "Congrats you are the child of " + parent + "</p>";
  document.getElementById("output").innerHTML = newText;
});
