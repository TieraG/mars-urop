var loadNav = function(phase){

			var svg = d3.select(".nav").append("svg")
								.attr("height", 70)
								.attr("width", 1150)
								.attr("id", "navBar");


			// Home

			 svg.append("a")
		         .attr("xlink:href", "/")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "14.5%")
		         .attr("y", "25%")
		         .attr("height", 100)
		         .attr("width", 150)
		         .style("fill",  "#86592d");
		         
		      svg.append("a")
		      	 .attr("xlink:href", "/")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "18.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "sans-serif")
				 .text("Home");

			
  		 	 // Pathways
			 svg.append("a")
		         .attr("xlink:href", "/pathways")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "29.5%")
		         .attr("y", "25%")
		         .attr("height", 100)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "pathways" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/pathways")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "31.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "sans-serif")
				 .text("Pathways");


			 // Mission
			 svg.append("a")
		         .attr("xlink:href", "/mission-arm")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "44.5%")
		         .attr("y", "25%")
		         .attr("height", 100)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "mission" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/mission-arm")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "47.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "sans-serif")
				 .text("Mission");

			//Capabilities
			  svg.append("a")
		         .attr("xlink:href", "/capabilities")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "59.5%")
		         .attr("y", "25%")
		         .attr("height", 100)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "capabilities" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/capabilities")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "61.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "sans-serif")
				 .text("Capabilities");

			//Trip
			  svg.append("a")
		         .attr("xlink:href", "/")
		         .attr("class", "glow")
	 			 .append("rect")
	 			 .attr("x", "74.5%")
		         .attr("y", "25%")
		         .attr("height", 100)
		         .attr("width", 150)
		         .style("fill", function(){
		         	return (phase === "trip" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "20px")
				 .attr("x", "77.5%")
				 .attr("y", "68.5%")
				 .style("font-weight", "bold")
				 .style("font-family", "sans-serif")
				 .text("My Trip");

 }