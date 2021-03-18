/*
  * Author: May Alvarez <mamialva@ucsc.edu>
  * Created 1 February 2021
  * License: Public Domain
  */

  //Declare variables from Task 1 
 myTransport = ["Car","Bus", "Walking"];

 myMainRide = {
 	make: "Ford",
 	model: "Escape",
 	color:"Black",
 	year:2013,
 	age : function () {
 		return 2021 - age;
 	}
 }

//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");