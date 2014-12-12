
var loadNavBar = function(){

			var svgNav = d3.select(".headnav").append("svg")
								.attr("height", 70)
								.attr("width", 1200)
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

			var armBox = group.append("a")
					.attr("xlink:href", "#")
					.append("rect")
					.attr("id", "armBox")
					.attr("class", "glow")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "22%")
					.attr("y", 22)
					.attr("fill", "#E65C00")
					.attr("stroke-width", "5")
					.on("click", function(){
							$(".canvas").html("");
							loadARM();
					});
					

			group.append("text")
					.attr("x", "25%")
					.attr("y", 45)
					.attr("font-size", "16px")
					.style('font-family', 'sans-serif')
					.text("ARM TO MARS");

			var moonBox = group.append("a")
					.attr("xlink:href", "#")
					.append("rect")
					.attr("id", "moonBox")
					.attr("class", "glow")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "37%")
					.attr("y", 22)
					.attr("fill", "#0099FF")
					.attr("stroke-width", "5")
					.on("click", function(){
							$(".canvas").html("");
							loadMoonToMars();
					});
					

			group.append("text")
					.attr("x", "41%")
					.attr("y", 45)
					.attr("font-size", "16px")
					.style('font-family', 'sans-serif')
					.text("MOON TO MARS");

			var enhancedBox = group.append("a")
					.attr("xlink:href", "#")
					.append("rect")
					.attr("id", "enhancedBox")
					.attr("class", "glow")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "55%")
					.attr("y", 22)
					.attr("fill", "purple")
					.attr("stroke-width", "3")
					.on("click", function(){
							$(".canvas").html("");
							loadEnhanced();
					});

			group.append("text")
					  .attr("x", "59%")
					  .attr("y", 45)
					  .attr("font-size", "16px")
					  .style('font-family', 'sans-serif')
					  .text("ENHANCED EXPLORATION");

			var svgText = d3.select(".mission-text")
							.append("svg")
							.attr("id", "mission-text")
							.attr("height", 80)
							.attr("width", 1200);


			var dom = svgText.append("g")
					 .attr("id", "capaDom")
			 		 .attr("width", 700)
			 		 .attr("height",560)
			 		 .attr("transform", "translate(0, 20)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", "100%")
				     .attr("height", "100%");

			var htmlBody = dom.append("xhtml:body")
							 .style("font-size", "19px")
							 .style("font-family", "sans-serif")
							 .style("text-align", "left")
							 .attr("id", "capaBody")
							 .attr("class", "cap-labels left");


			var text = htmlBody.append("xhtml:p")
							   .html("To achieve the horizon goal of a human mission to the Mars surface, all of the aforementioned element groups are necessary. More specifically, 11 individual mission elements required for the  Mars surface mission have been identified.");

}