$(document).ready(function(){

	$(document).on("click", "#armBox", function(){
		$(".canvas").html("");
		loadARM();
	});

	$(document).on("click", "#moonBox", function(){
		$(".canvas").html("");
		loadMoonToMars();
	});

	$(document).on("click", "#enhancedBox", function(){
		$(".canvas").html("");
		loadEnhanced();
	});


});