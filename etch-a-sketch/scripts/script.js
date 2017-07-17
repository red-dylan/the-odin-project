const GRID_DIMENSION = 480;
var gridPixels = 16;
var isDraw = true;
var squareSize = 0;
var curColor;
var colorArray = [];
var isRandom;

$(document).ready(function() {
	//create colorArray
	$("#colorSelect > option").each(function() {
	colorArray.push(this.value);
	});
	//remove last two elements: random and white
	colorArray.pop();
	colorArray.pop();
	//Draw Grid
	drawGrid();
	//set isRandom, get value of selected color
	$('select').change(function() {
		if ($(this).val() === "random") {
			isRandom = true;
			$("#questionMark").removeClass();
			$("#selected-color").css("background-color", "white");
		}
		else {
			isRandom = false;
	    	curColor = $(this).val();
	    	$("#questionMark").removeClass().addClass("hidden");
	    	$("#selected-color").css("background-color", curColor);
    	}
    	console.log(isRandom);	
    });
	//clear button clears drawing grid
	$("#clear").click(clearGrid);
});
//function to draw grid
function drawGrid() {
	curColor = $("select").val();
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
	$(".grid-square").mouseover(function() {
		if (isDraw) {
			if(isRandom){
				curColor = colorArray[Math.floor(Math.random() * colorArray.length)];
			}
			$(this).removeClass().addClass("grid-square " + curColor);
			
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
