$(document).ready(function() {
  $('button').on('click', function () {
      $('button').removeClass("selected");
    $(this).addClass("selected");
    var animal = $(this).text();

    

    // Get JSON with jQuery Ajax
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
        tags : animal,
        format : "json"
    };

    function displayPhotos (data) {
        var output = '<div class="">';
        $.each(data.items, function (i, photo) {
            output += ` <a href="${photo.link}">
            <img src="${photo.media.m}" alt="..." class="img-thumbnail" style=" width:200px;">
                       </div>
                       </a>`
                      ;
        });
        $('a').attr('target', '_blank');
        $('.photo').html(output);
    }
    $.getJSON(flickrAPI, flickrOptions,displayPhotos);
  });
});// end ready