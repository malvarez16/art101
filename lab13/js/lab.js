/*
  * Author: May Alvarez <mamialva@ucsc.edu>
  * Created 24 February 2021
  * License: Public Domain
  */

  function fizzBuzz() {

  //Loop thrpugh numbers 1 to 200, listing them as you go
    for (car i=1; i<=200; i++) {
      var fizzBuzzString = "";
    }
  //If the number is a multiple of 3, if should print "Fizz!"
    if (i%3 == 0) {
      fizzBuzzString = fizzBuzzString + "Fizz";
    }
  //If the number is a multiple of 5, it should print "Buzz!"
  if (i%5 == 0) {
    fizzBuzzString = fizzBuzzString + "Buzz";
  }
  //If the number is a multiple of 7, it should print "Boom!"
  if (i%7 == 0) {
    fizzBuzzString = fizzBuzzString + "Boom";
  }

  fizzBuzzString = i + ": " + fizzBuzzString;
  console.log(fizzBuzzString);
  $("#rainbow-output").append('<p>+ fizzBuzzString' + '</p>');
  //If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom.

}
