$(function(){
    $(".hovermember").hover(function(){
      $(this).find(".memberpic").fadeIn();
    }
                    ,function(){
                        $(this).find(".memberpic").fadeOut();
                    }
                   ); 

    var flkty = new Flickity('.wrap-slick1');
	var video = document.querySelector('video');
	video.play();
         
});
