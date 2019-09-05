$(document).ready(function()
  {

    var topics = ["chelsea", "messi", "USMNT"]
    renderButton();
    function renderButton() {

        for (var i =0; i < topics.length; i++) {

            var btn = $("<button class='btn btn-primary gif mr-2 mt-2'>")
            $(btn).attr("data-topic", topics[i]);
            btn.html(topics[i]);
            $(".button").append(btn);
        }
        display();
    }

    $("#add-btn").on('click', function() {
        
        event.preventDefault();
        topics = [];
        var input = $("#add-gif").val();
        topics.push(input);
        renderButton();

        v
        



    });

    function display() {
        $(".gif").on('click', function(){
            var topic = $(this).attr("data-topic");

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=zPqU2GiFZ5wwK2660HN1muJkVtwJ2yCZ&limit=6";

            $.ajax({

                url: queryURL,
                method: "GET"

            }).then(function(response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div class='col-lg-6 m-0 gif-div'>");
                    var rating = results[i].rating;
                    var p = $("<p>").html("Rating: " + rating);
                    var image = $("<img>");
                    image.attr("src", results[i].images.fixed_height.url);
                    gifDiv.prepend(p);
                    gifDiv.append(image);
                    $(".gifs").prepend(gifDiv);
                    
                }
            });
            

        });
    }
});




api.giphy.com/v1/gifs/search