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

  function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(1.461799, 103.7639603),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
} 
});