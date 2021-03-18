/*
* Author: May Alvarez <mamialva@ucsc.edu>
*Created: 17 March
*Class Art 101 with Wes Moes
*Lab 17
*/

$("button").clcik(function(){

  $("#title").empty();
  $("#output").empty();

  $.ajax ({
    url:"https://xkcd.com/614/info.0.json",

    data: (),

    type: "GET",

    dataType:"json",

    success: function(data) {
      var stringified = JSON.stringify(data);
      console.log(stringified);
      var comicObj = JSON.parse(stringified);
      conosle.log(comicObj);
      $("#title").append("Title: " + comicObj.title + "!");
      $("#output").append("<img src= '" + comicObj.img + "'>")
    },

    error: function(jqXHR, textStatus, errorThrown){
      console.log("Error:", textStatus, errorThrown);
    }
  });
});
