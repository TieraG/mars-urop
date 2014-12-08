
var loadNavBar = function(){

			var svgNav = d3.select(".headnav").append("svg")
								.attr("height", 70)
								.attr("width", 1150)
								.attr("id", "nav");

  		 	var group = svgNav.append("g");
			  						
  		
			group.append("line")
					.attr("x1", "20%")
					.attr("y1", 15)
					.attr("x2", "78%")
					.attr("y2", 15)
					.attr("stroke", "grey")
					.attr("stroke-width", 3);

			group.append("line")
					.attr("x1", "20%")
					.attr("y1", 60)
					.attr("x2", "78%")
					.attr("y2", 60)
					.attr("stroke", "grey")
					.attr("stroke-width", 3);

			var armBox = group.append("rect")
					.attr("class", "glow")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "22%")
					.attr("y", 22)
					.attr("fill", "#E65C00")
					.attr("stroke-width", "5")
					.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadARM();
												})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMainPage();
					});

			group.append("a")
		   		.attr("xlink:href", "#")
		   		.attr('class', 'glow')
		   		.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadARM();
												})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMainPage();
				})
				.append("text")
				.attr("x", "28%")
				.attr("y", 40)
				.attr("font-size", "14px")
				.style('font-family', 'sans-serif')
				.text("ARM");

			var moonBox = group.append("rect")
					.attr("class", "glow")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "35%")
					.attr("y", 22)
					.attr("fill", "#0099FF")
					.attr("stroke-width", "5")
					.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMoonToMars();
					})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMainPage();
					});

			    group.append("a")
			   		.attr("xlink:href", "#")
			   		.attr('class', 'glow')
			   		.on("mouseenter", function(){
							$(".canvas").html("");
							$(".chart").html("");
							loadMoonToMars();
					})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMainPage();
					})
					.append("text")
					.attr("x", "41%")
					.attr("y", 40)
					.attr("font-size", "14px")
					.style('font-family', 'sans-serif')
					.text("MOON TO MARS");

			var enhancedBox = group.append("rect")
					.attr("class", "glow")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "55%")
					.attr("y", 22)
					.attr("fill", "purple")
					.attr("stroke-width", "3")
					.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadEnhanced();
					})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMainPage();
					});

			group.append("a")
			   		.attr("xlink:href", "#")
			   		.attr('class', 'glow')
			   		.on("mouseenter", function(){
							$(".canvas").html("");
							$(".chart").html("");
							loadEnhanced();
					}).on("mouseleave", function(){
							$(".canvas").html("");
							$(".chart").html("");
							loadMainPage();
					}).append("text")
					  .attr("x", "61%")
					  .attr("y", 40)
					  .attr("font-size", "14px")
					  .style('font-family', 'sans-serif')
					  .text("ENHANCED EXPLORATION");

}