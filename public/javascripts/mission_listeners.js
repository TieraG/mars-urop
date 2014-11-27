$(document).ready(function(){

	$(document).on("click", "#armBox", function(){
		$(".canvas").html("");
		setTimeout(function(){
			loadARM();
		}, 100);
	});

	$(document).on("click", "#moonBox", function(){
		$(".canvas").html("");
		setTimeout(function(){
			loadMoonToMars();
		}, 100);
	});

	$(document).on("click", "#enhancedBox", function(){
		$(".canvas").html("");
		setTimeout(function(){
			loadEnhanced();
		}, 100);
	});
});