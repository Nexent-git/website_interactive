var Parallax = (function($) {

	var scrollObjects = new Array(); // Create scrollObjects to hold parallax params
	var scrollTop;
	var browser;

	var init = function() {

		browser = navigator.userAgent;
		$(window).scroll(setCanvas);

	};

	var setCanvas = function() {

		scrollTop = $(window).scrollTop();
		console.log(scrollObjects.length);
		for(x = 0; x < scrollObjects.length; x++) {

			if(scrollTop < scrollObjects[x].startPos) {
				setProperty(scrollObjects[x], scrollObjects[x].start);

			} else

			if(scrollTop >= scrollObjects[x].endPos) {

				// Make sure everything is in it's proper end position
				setProperty(scrollObjects[x], getPosition(scrollObjects[x], scrollObjects[x].endPos));

			} else {

				// Set new positions based on scroll
				setProperty(scrollObjects[x], getPosition(scrollObjects[x], scrollTop));

			}

		}

	};

	var setProperty = function(scrollObject, endPosition) {

		// Assign target
		$elem = $(scrollObject.id);
		bgposition = Array();


		if(scrollObject.property == "top") {

			// Set the new top position
			$elem.css({ "top": Math.round(endPosition) + "px" });

		} else

		if(scrollObject.property == "left") {

			// Set the new left position
			$elem.css({ "left": Math.round(endPosition) + "px" });

		} else

		if(scrollObject.property == "right") {

			// Set the new left position
			$elem.css({ "right": Math.round(endPosition) + "px" });

		} else

		if(scrollObject.property == "scale") {

			// Set the new transform position
			$elem.css({ "transform": "scale("+endPosition+")" });

		} else

		if(scrollObject.property == "opacity") {
			console.log("END POS:"+endPosition);
			// Set the new opacity position
			$elem.css({ "opacity": endPosition });

		}

	};

	var getPosition = function(scrollObj, curScroll) {

		// Separate calculation needed for scaling and opacity
		if(scrollObj.property == "scale" || scrollObj.property == "opacity") {

			percent = (curScroll-scrollObj.startPos) / scrollObj.duration;
			newSize = scrollObj.start + (percent * (scrollObj.stop - scrollObj.start));

			return newSize;

		}

		// Calculate new position based on speed / scroll position / start position
		return (curScroll * scrollObj.speed) - (scrollObj.startPos * scrollObj.speed) + scrollObj.start;


	};

	var animate = function(scrollObj) {

		offset = $(scrollObj.id).offset();

		// Calculate start position
		scrollObj.startPos = offset.top + scrollObj.delay;

		// Calculate end position
		scrollObj.endPos = scrollObj.startPos + scrollObj.duration;

		// Push object into scrollObjects array to animate
		scrollObjects.push(scrollObj);
		// Set initial canvas
		setCanvas();

	};

	return {
		init: init,
		animate: animate
	};

}(jQuery));

$(function() {
	Parallax.init();
});
