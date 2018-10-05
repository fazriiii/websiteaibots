$(function(){
/*
    $(".hovermember").hover(function(){
      $(this).find(".memberpic").fadeIn();
    }
                    ,function(){
                        $(this).find(".memberpic").fadeOut();
                    }
                   );
*/

/* animate only work with <div> */
	$(".readmore-animate").hover(function () {
            $(this).addClass('animated pulse');
			}, function() {
			    $(this).removeClass('animated pulse');
			});




});