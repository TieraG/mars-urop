$(document).ready(function(){

	$(document).on("click", "#armBox", function(){
		$(".canvas").html("");
		loadARM();
	});

	$(document).on("click", "#moonBox", function(){
		$(".canvas").html("");
	});

	$(document).on("click", "#enhancedBox", function(){
		$(".canvas").html("");
	});


});