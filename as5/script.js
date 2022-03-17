$(document).ready(function(){  $('#gallery a').hover(function(){     var galleryHref = $(this).attr('href');     var galleryAlt = $(this).attr('title');   $('figure img').attr({ src: galleryHref, alt: galleryAlt });      $('figcaption').html(galleryAlt);   });});

$(document).ready(function (){
       $("#gallery a").click(function () {
        var galleryHref = $(this).attr('href');     
        var galleryAlt = $(this).attr('title');     
        $('figure img').attr({ src: galleryHref, alt: galleryAlt }); 
        $('figcaption').html("<b>" + galleryAlt + "</b>");     
        return false;  
       });
    });


