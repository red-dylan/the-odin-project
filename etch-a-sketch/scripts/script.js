$(document).ready(function() {
	for (i=0; i<16; i++) {
		console.log("i=" + i);
		$("#grid").append("<div id='grid-row" + i +"' class='row'></div>");
		for (j=0; j<16; j++) {
			console.log("j=" + j);
			$("#grid-row" + i).append("<div class='grid-square'></div>");
		}
	}

	$(".grid-square").hover(function() {
		$(this).addClass("etched");
	})

})