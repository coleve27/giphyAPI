//array with topics//
var topics = ["trump", "christmas", "coding"];
//variable representing user input//
makeButtons()

$('#buttons-view').on('click', 'button', function() {
  var topic = $(this).text();
  // Storing our giphy API URL for a random cat image
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kyHuqCiHNkqTwr677CRLL8mWyfgA7emq&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After the data from the AJAX request comes back
    .done(function(response) {
      $("#images").empty();
      for (var i = 0; i < response.data.length; i++) {

        var imageUrl = response.data[i].images.original.url;
        var rating = response.data[i].rating;
        // Creating and storing an image tag
        var topicImage = $("<img>");
        var topicDiv = $("<div>");
        var topicRating = $("<div>");
        topicRating.append("rating: " + rating);
        // Setting the catImage src attribute to imageUrl
        topicImage.attr("src", imageUrl);
        topicImage.attr("alt", "topic image");
        topicDiv.attr("id", "topicDiv" + i);
        topicDiv.append(topicRating);
        topicDiv.append(topicImage);
        // Prepending the catImage to the images div
        $("#images").prepend(topicDiv);
      };
    });
});

function makeButtons() {
  $("#buttons-view").empty();
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("topic");
    a.attr("data-name", topics[i])
    a.text(topics[i]);
    $("#buttons-view").append(a);
  }
  return;
};

$("#add-topic").on("click", function(event) {
  event.preventDefault();
  var newTopic = $("#topic-input").val().trim();
  topics.push(newTopic);
  makeButtons();
});
