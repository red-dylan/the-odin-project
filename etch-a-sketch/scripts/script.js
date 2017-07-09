var gridDimension = 480;
var gridPixels = 16;
var isDraw = true;

$(document).ready(function() {
	for (i=0; i<gridPixels; i++) {
		console.log("i=" + i);
		$("#grid").append("<div id='grid-row" + i +"' class='row'></div>");
		for (j=0; j<gridPixels; j++) {
			console.log("j=" + j);
			$("#grid-row" + i).append("<div class='grid-square'></div>");
		}
	}

	$(".grid-square").mousedown(function(e) {
		e.preventDefault();
		isDraw = false;
	})

	$(".grid-square").mouseup(function() {
		isDraw = true;
	})

	$(".grid-square").hover(function() {
		if (isDraw === true) {
			$(this).addClass("etched");
		}
	})

	$("#clear").click(function() {
		$(".grid-square").removeClass("etched");
	})
})