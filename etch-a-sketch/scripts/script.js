const GRID_DIMENSION = 480;
var gridPixels = 16;
var isDraw = true;
var squareSize = 0;
var curColor;

$(document).ready(function() {
	//Draw Grid
	drawGrid();
	//get value of selected color
	$('select').change(function() {
    	curColor = $(this).val();
    	$("#selected-color").css("background-color", curColor);
    });
	//clear button clears drawing grid
	$("#clear").click(clearGrid);
});
//function to draw grid
function drawGrid() {
	curColor = $("select").val();
	console.log(curColor);
	//calculate square size
	squareSize = GRID_DIMENSION / gridPixels;
	$("#container").append("<div id='grid'></div>");
	
	//draw grid
	for (i=0; i<gridPixels; i++) {
		$("#grid").append("<div id='grid-row" + i +"' class='row'></div>");
		for (j=0; j<gridPixels; j++) {
			$("#grid-row" + i).append("<div class='grid-square'></div>");
		}
	}
	//assign squareSize to css
	$(".grid-square").css("width", squareSize + "px");
	$(".grid-square").css("height", squareSize + "px");
	//set isDraw to true or false based on mousedown/up
	$(".grid-square").mousedown(function(e) {
		e.preventDefault();
		isDraw = false;
	});

	$(".grid-square").mouseup(function() {
		isDraw = true;
		$(this).addClass(curColor);
		$("." + curColor).css("background-color", curColor);
	});
	//color square if true
	$(".grid-square").hover(function() {
		if (isDraw === true) {
			$(this).addClass(curColor);
		$("." + curColor).css("background-color", curColor);
		}
	});
}
//function to clear grid and change resolution
function clearGrid() {
	//prompt user for grid resolution
	gridPixels = prompt("How many pixels per side would you like your new grid to be?", gridPixels);
	
	//clear grid
	$("#grid").remove();
	//create grid with new resolution
	drawGrid();	
}
