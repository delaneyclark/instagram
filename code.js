
$(document).ready(function() {
  $.getJSON("http://cooper-union-instagram-proxy.herokuapp.com/search/tag/nyc", function(response){
        console.log(response);
        for(var i=0; i<response.length; i++) {
          $("body").append("<img src="+response[i].images.thumbnail.url+" />");
        }
  })
})
