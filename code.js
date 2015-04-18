
$(document).ready(function(){
        //getting the data from instagram
        $.getJSON("http://cooper-union-instagram-proxy.herokuapp.com/search/tag/blizzcon?count=100", function(response){


          //create the placeholder for valid images
          var instagramPositions = [];


          //looping through the response from instagram
          for(var i=0; i<response.length; i++) {

            // $("body").append("<img src="+response[i].images.thumbnail.url+" />");


            //if the current response has location data
            if(response[i].location != null) {


              //construct the photoMarker object
              var photoMarker = {
                'title': response[i].caption.text,
                'map': new google.maps.LatLng(response[i].location.latitude, response[i].location.longitude),
                'link':response[i].link,
                'html':"<img src="+response[i].images.thumbnail.url+" />"
              }


              //push the photoMarker object onto instagramPositions array
              instagramPositions.push(photoMarker);


            } //end of "if the photo has location data"


          } //end of the for loop, iterating through the photos

          //set up the map configuration
          var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(39.50, -98.35)
          };
          draw('map', mapOptions, instagramPositions);
        });
      });
