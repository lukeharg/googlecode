//window.onload = debug;
window.onresize = debug;

/*function printdebug() {
	var width = $(window).width();
	var height = $(window).height();
	
	$("p#dimensions").text(width + " x " + height);
	
	var movevertical = (Math.random() * height) + "px";
	var movehorizontal = (Math.random() * width) + "px";
	
	$("p#canvas").css("top",movevertical);
	$("p#canvas").css("left",movehorizontal);
}*/

function debug() {
	var canvas = new windowCanvas();
	
	$("p#dimensions").text(canvas.size.width + " x " + canvas.size.height);

	$("a#google").css("top", (canvas.randomCoordinate.y + "px"));
	$("a#google").css("left", (canvas.randomCoordinate.x + "px"));

}

function moveObject() {
	moveGoogle(new coordinate(100, 100), new coordinate(500, 500));
}

/* Moves an object "#id" from the start "coordinate" to the end "coordinate". */
/* y = m(x - x1) + y1 */
function moveGoogle(start, end) {
	var slope = Math.floor((end.y - start.y) / (end.x - start.x));
	var xCount = start.x;
	var interval = setInterval(mover, 1);

	function mover() {
		if (xCount < end.x) {
			var yCount = slope * (xCount - start.x) + start.y;
			$("a#google").css("top", (yCount + "px"));
			$("a#google").css("left", (xCount + "px"));
			xCount = xCount + 5;
		} else {
			clearInterval(interval);
		}		
	}
}



/** Objects */

/* The browser inner area object. */
function windowCanvas() {
	this.size = new windowSize($(window).width(), $(window).height());
	this.randomCoordinate = randomScreenCoordinate(this.size);
}

/* Outputs a random coordinate within the boundaries of the screen size. */
function randomScreenCoordinate(windowSize) {
	var x = Math.floor(windowSize.width * Math.random());
	var y = Math.floor(windowSize.height * Math.random());
	
	return new coordinate(x, y);
}

/* The coordinate object. */
function coordinate(x, y) {
	this.x = x;
	this.y = y;
}

/* The window size object. */
function windowSize(width, height) {
	this.width = width;
	this.height = height;	
}