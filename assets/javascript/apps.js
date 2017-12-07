//array with topics//
var topics = ["kittens", "puppies", "cute"];
//calling make Buttons function//
makeButtons()
//onclick function for buttons//
$('#buttons-view').on('click', 'button', function() {
  var topic = $(this).text();
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=kyHuqCiHNkqTwr677CRLL8mWyfgA7emq&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
  // Perfoming an AJAX GET request to our queryURL//
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After the data from the AJAX request comes back//
    //put each response into the html as an image or div//
    .done(function(response) {
      $("#images").empty();
      for (var i = 0; i < response.data.length; i++) {

        var imageUrl = response.data[i].images.fixed_width.url;
        var rating = response.data[i].rating;
        // Creating and storing an image tag
        var topicImage = $("<img>");
        var topicDiv = $("<div>");
        var topicRating = $("<div>");
        topicRating.append("rating: " + rating);
        // Setting the catImage src attribute to imageUrl
        topicImage.attr("src", imageUrl);
        topicImage.attr("alt", "topic image");
        topicDiv.attr("id", "topicDiv");
        topicDiv.append(topicRating);
        topicDiv.append(topicImage);
        // Prepending the catImage to the images div
        $("#images").prepend(topicDiv);
      };
    });
});
//function that makes buttons out of topics array//
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
//takes topics from form and adds them to array//
$("#add-topic").on("click", function(event) {
  event.preventDefault();
  var newTopic = $("#topic-input").val().trim();
  topics.push(newTopic);
  makeButtons();
});
