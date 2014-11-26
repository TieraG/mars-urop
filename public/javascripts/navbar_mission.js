
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

			var armBox = group.append("rect")
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
					});

			group.append("text")
					.attr("x", "25%")
					.attr("y", 45)
					.attr("font-size", "16px")
					.style('font-family', 'sans-serif')
					.text("ARM TO MARS");

			var moonBox = group.append("rect")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "37%")
					.attr("y", 22)
					.attr("fill", "#0099FF")
					.attr("stroke-width", "5")
					.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
					})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
					});

			group.append("text")
					.attr("x", "41%")
					.attr("y", 45)
					.attr("font-size", "16px")
					.style('font-family', 'sans-serif')
					.text("MOON TO MARS");

			var enhancedBox = group.append("rect")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "55%")
					.attr("y", 22)
					.attr("fill", "purple")
					.attr("stroke-width", "3")
					.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
					})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
					});

			group.append("text")
					  .attr("x", "59%")
					  .attr("y", 45)
					  .attr("font-size", "16px")
					  .style('font-family', 'sans-serif')
					  .text("ENHANCED EXPLORATION");

}