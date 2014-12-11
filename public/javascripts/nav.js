var loadNav = function(phase){

			var svg = d3.select(".nav").append("svg")
								.attr("height", 70)
								.attr("width", 1150)
								.attr("id", "navBar");

			
  		 	 // Pathways
			 svg.append("a")
		         .attr("xlink:href", "/pathways")
		         .attr("class", "glow")
	 			 .append("circle")
	 			 .attr("cx", "35.5%")
		         .attr("cy", "50%")
		         .attr("r", "4%")
		         .style("fill", function(){
		         	return (phase === "pathways" ? "grey": "#86592d");
		     }); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/pathways")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "40px")
				 .attr("x", "34.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("1");


			 // Mission
			 svg.append("a")
	 		 	 .attr("xlink:href", "/mission")
	 			 .append("circle")
	 			 .attr("class", "glow")
	 			 .attr("cx", "50.5%")
		         .attr("cy", "50%")
		         .attr("r", "4%")
		         .style("fill", function(){
		         	return (phase === "mission" ? "grey": "#86592d");
		         });

		     svg.append("a")
		     	 .attr("xlink:href", "/mission")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "40px")
				 .attr("x", "49.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("2"); 

			//Capabilities
			 svg.append("a")
	 		 	 .attr("xlink:href", "/capabilities")
	 			 .append("circle")
	 			 .attr("class", "glow")
	 			 .attr("cx", "65.5%")
		         .attr("cy", "50%")
		         .attr("r", "4%")
		         .style("fill", function(){
		         	return (phase === "capabilities" ? "grey": "#86592d");
		         });

		     svg.append("a")
		     	 .attr("xlink:href", "/capabilities")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "40px")
				 .attr("x", "64.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("3"); 

 }