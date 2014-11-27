$(document).ready(function(){

	$(document).on("click", "#armBox", function(){
		setTimeout(function(){
			loadARM();
		}, 100);
	});

	$(document).on("click", "#moonBox", function(){
		setTimeout(function(){
			loadMoonToMars();
		}, 100);
	});

	$(document).on("click", "#enhancedBox", function(){
		setTimeout(function(){
			loadEnhanced();
		}, 100);
	});
});