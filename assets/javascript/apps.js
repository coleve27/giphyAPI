//array with topics//
var topics = ["trump", "christmas", "coding"];
var newTopic;
//variable representing user input//

var input;

// TODO: function that stores user input



//calls makeButtons function//

makeButtons()

//get request from Giphy//
// TODO: get data-name from button
// TODO: replace "kittens" with data-value from botton clicked


$("#cat-button").on("click", function() {
  console.log(topics[0])
  // Storing our giphy API URL for a random cat image
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kyHuqCiHNkqTwr677CRLL8mWyfgA7emq&q=kittens&limit=25&offset=0&rating=G&lang=en";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // After the data from the AJAX request comes back
  .done(function(response) {

    // Saving the image_original_url property
    var imageUrl = response.data[0].images.original.url;

    // Creating and storing an image tag
    var catImage = $("<img>");

    // Setting the catImage src attribute to imageUrl
    catImage.attr("src", imageUrl);
    catImage.attr("alt", "cat image");

    // Prepending the catImage to the images div
    $("#images").prepend(catImage);
  });
});




//make buttons//

function makeButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {

    var  a = $("<button>");

    a.addClass("topic");

    a.attr("data-name", topics[i])

    a.text(topics[i]);

    $("#buttons-view").append(a);
  }

};

//store input from user//

$("#add-topic").on("click", function(event) {
  event.preventDefault();
  // This line grabs the input from the textbox
newTopic = $("#topic-input").val().trim();

  // Adding movie from the textbox to our array
  topics.push(newTopic);

  // Calling renderButtons which handles the processing of our movie array

});

  // Adding movie from the textbox to our array
