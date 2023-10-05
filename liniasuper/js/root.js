var root = (function($) {

	var init = function() {

		// Parallax Ipad
		Parallax.animate({ id:"#one", property:"top", start:200, delay:0, duration:300, speed:3.0 });
		//Parallax.animate({ id:"#one", property:"left", start:0, delay:0, duration:100, speed:10.1 });

		Parallax.animate({ id:"#two", property:"top", start:50, delay:50, duration:500, speed:1.5 });

		// Parallax Triangle
		//Parallax.animate({ id:"#two", property:"opacity", start:1.0, delay:-300, duration:1000, speed:-1.0 });
	};


	var scrollTo = function(id) {

		//$('html, body').animate({ scrollTop: $(id).offset().top }, 1000, 'easeOutExpo');

	};
	
	return {
		init: init,
		scrollTo: scrollTo,
	};

}(jQuery));

$(function() {
	root.init();
});