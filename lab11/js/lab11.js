/*
  * Author: May Alvarez <mamialva@ucsc.edu>
  * Created 18 February 2021
  * License: Public Domain
  */

  //find the sections and add a button

  $('#challenges').append("<button>Click For A Surprise").click(function() {
    $('#challenges').toggleClass('special');
    $('#challenges').after("<img id='puppy'src='https://i.pinimg.com/564x/35/2e/c9/352ec9dafc8672d9749c42f082fb1b63.jpg'>");
    $('#challenges p').remove();
    $('#challenges').after("Look a puppy!");
  });

  $('#problems').append("<button>Click For A Second Surprise").click(function() {
    $('#problems').toggleClass('special');
    $('#problems').after("<img src='https://pbs.twimg.com/profile_images/676142833984651264/IMkFPXiL.jpg'>");
    $('#problems p').remove();
    $('#problems').after("Look more puppies!");
  });

  $('#results').append("<button>Click For A Third Surprise").click(function() {
    $('#results').toggleClass('special');
    $('#results').after("<img src='https://i.pinimg.com/280x280_RS/c8/95/f1/c895f12e833a51c4cd225295ed6076eb.jpg'>");
    $('#results p').remove();
    $('#results').after("A pup of the sea!");
});
