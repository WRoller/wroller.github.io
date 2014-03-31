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
	// Window Width Initialized
	// Less 5 to acct for 2.5px L & R margin
	width = $(window).width() - 5;	
	$(".masonry").css("max-width",width+"px");
	$(".masonry").css("width",width+"px");

	// Quarter Partitions
	// Item defaults
	quarter_size = Math.round((width - 20)/4) - 1 ;
	$(".item").css("width",quarter_size +"px");
	$(".item").css("height",quarter_size +"px");

	// Third Partitions
	third_size = Math.round((width-15)/3);
	$(".wthird").css("width", third_size +"px");
	$(".hthird").css("height", third_size +"px");

	// Half Partitions
	half_size = 2*quarter_size + 5;
	$(".w2").css("width",half_size +"px");
	$(".h2").css("height",half_size +"px");
	console.log(width);
	console.log(quarter_size);
	console.log(half_size);

	height = Math.round(width/1.345);

	width1 = Math.round(width*0.23);
	height1 = width1;
	width2 = Math.round(width*0.46);
	height2 = width2;
	width3 = Math.round(width*0.5);
	height3 = width3;
	
	width_third = Math.round(width/3);
	height_third = width_third;
	width_half = Math.round(width/2);
	height_half = width_half;
	// Sets the height of the navigation window

	// TO BE COMPLETED FOR HEIGHT
	$(".item_action").css("height",height1/2 + "px");


	$(".w3").css("width",width3 +"px");
	
	$(".h2").css("height",height2 +"px");
	$(".h3").css("height",height3 +"px");
};

$(document).ready(change_dimensions());

$(window).resize(function(){
	
	change_dimensions();
});


