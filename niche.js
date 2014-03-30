var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // options
  columnWidth: 200,
  itemSelector: '.item'
});

$(document).ready(function(){
	//div_height = $(".item_action").parent().height()/2

	//console.log(div_height);

	$(".item").mouseover(function(){
		// Hides or reveals add book div
		$(this).children(".item_action").show();
		$(this).children(".item_name").hide();
	});

	$(".item").mouseout(function(){
		//$(this).css("background-color", "red");
		$(this).children(".item_action").hide();
		$(this).children(".item_name").show();	
	});

	//Side Menu Functionality
	$("#menu_selector").on("click",function(){
		$(".side_menu").show("slide",{direction:"left"},400);
	});
		
	$(".side_menu").mouseleave(function(){
		$(this).hide("slide",{direction:"left"},400);
		//console.log("out:");
	});

});

// Function used to resize all components of the masonry layout
var change_dimensions = function(){
	width = $(window).width();	
	console.log(width);
	height = Math.round(width/1.345);
	width1 = Math.round(width*0.23);
	height1 = width1;
	width2 = Math.round(width*0.46);
	height2 = width2;
	width3 = Math.round(width*0.5);
	height3 = width3;
	
	// Sets the height of the navigation window
	

	$(".item_action").css("height",height1/2 + "px");

	$(".masonry").css("max-width",width+"px");
	$(".masonry").css("max-height",height+"px");
	$(".masonry").css("width",width+"px");
	$(".masonry").css("height",height+"px");
	$(".item").css("width",width1 +"px");
	$(".w2").css("width",width2 +"px");
	

	$(".w3").css("width",width3 +"px");
	$(".item").css("height",height1 +"px");
	$(".h2").css("height",height2 +"px");
	$(".h3").css("height",height3 +"px");
};

$(document).ready(change_dimensions());

$(window).resize(function(){
	
	change_dimensions();
});


