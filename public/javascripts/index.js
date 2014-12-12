var loadIndex = function(){

		   var svg = d3.select(".canvas")
		 			   .append("svg")
		 			   .attr("id", "home-svg")
	 				   .attr("height", "1050")
	 				   .attr("width", "100%")
	 				   .attr("id", "main_page");

	 		// Title box
	 		svg.append("rect")
	 			.attr("x", "25%")
	 			.attr("y", "8%")
	 			.attr("width", "50%")
	 			.attr("height", "11%")
	 			.attr("fill", "#996633");

	 		svg.append("text")
				 .attr("font-size", "26px")
				 .attr("x", "34%")
				 .attr("y", "13%")
				 .style("font-weight", "bold")
				 .text("PATHWAYS TO EXPLORATION"); 

			svg.append("text")
				 .attr("class", "sub")
				 .attr("font-size", "21px")
				 .attr("x", "29%")
				 .attr("y", "16%")
				 .style("font-weight", "bold")
				 .text("Technical Analysis and Affordability Assessment"); 


			var dom = svg.append("g")
			 		 .attr("width", 1100)
			 		 .attr("height",450)
			 		 .attr("transform", "translate(0, 230)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", "1100")
				     .attr("height", "440");

			var htmlBody = dom.append("xhtml:body")
							 .attr("id", "capa")
							 .style("font-size", "18px")
							 .style("font-family", "sans-serif")
							 .style("text-align", "left")

			var text = htmlBody.append("xhtml:p")
							   .html("Sending humans to destinations beyond low Earth orbit (LEO) is a technologically, programmatically, and politically complicated endeavor. Given the complexity of human space exploration, as well as the fact that U.S. goals in HSF have changed on time scales much shorter than the time it takes to accomplish those goals, it makes sense to decompose an HSF program into smaller building blocks. This also has the advantage that those building blocks can be assembled in various configurations, allowing for the changes in goals that we experience as a nation to be addressed without analysis ab initio. A “capability-based” approach to space exploration focuses research and technology development resources on systems and capabilities that are expected to be of value in the future, with no particular mission or set of missions in mind. The process of selecting future missions then tends to favor those missions that can make use of the systems and capabilities that have been developed. A “flexible-path” approach is a more sophisticated version of capability-based planning that takes into consideration what destinations might be desirable. By contrast, a pathway-based approach would commit the U.S. HSF program to a pathway with a specific sequence of missions normally of increasing difficulty and complexity that target specific exploration goals that are typically tied to various destinations that humans may explore. A pathway approach would facilitate continuity of development of required systems for increased capability and efficiency. This website tends to describe the content of the 2014 National Research Council Report 'Pathways to Exploration: Rationales and Approaches for a U.S. Program of Human Space Exploration'.");

	 		// Pathways
	 		 svg.append("rect")
	 		   	.attr("x", "0%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill", "#996633");

	 		svg.append("a")
		         .attr("xlink:href", "/pathways")
	 			 .append("circle")
	 			 .attr("cx", "11%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .style("fill", "#86592d");
		        

		    svg.append("a")
		         .attr("xlink:href", "/pathways")
		    	 .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "9.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("1"); 

		    svg.append("text")
				 .attr("font-size", "24px")
				 .attr("x", "5%")
				 .attr("y", "73%")
				 .style("font-weight", "bold")
				 .text("Pathways");

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "80%")
				 .style("font-weight", "bold")
				 .text("Discover the three proposed"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "83%")
				 .style("font-weight", "bold")
				 .text("pathways for a mission to");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "86%")
				 .style("font-weight", "bold")
				 .text("the Mars Surface and their");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "89%")
				 .style("font-weight", "bold")
				 .text("properties");

	 		// Mission Elements
	 		 svg.append("rect")
	 		   	.attr("x", "25%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill", "#996633");

	 		  svg.append("a")
		         .attr("xlink:href", "/mission")
	 			 .append("circle")
	 			 .attr("cx", "36%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .style("fill", "#86592d"); 

		         
		      svg.append("a")
		      	 .attr("xlink:href", "/mission")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "34.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("2"); 

		     svg.append("text")
				 .attr("font-size", "24px")
				 .attr("x", "26.5%")
				 .attr("y", "73%")
				 .style("font-weight", "bold")
				 .text("Mission Elements"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "80%")
				 .style("font-weight", "bold")
				 .text("Discover the 11 Mission"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "83%")
				 .style("font-weight", "bold")
				 .text("Elements involved in the");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "86%")
				 .style("font-weight", "bold")
				 .text("space exploration towards");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "89%")
				 .style("font-weight", "bold")
				 .text("Mars");

	 		// Capabilities
	 		 svg.append("rect")
	 		   	.attr("x", "50%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill", "#996633");

	 		 svg.append("a")
	 		 	 .attr("xlink:href", "/capabilities")
	 			 .append("circle")
	 			 .attr("cx", "61%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .style("fill", "#86592d");

		     svg.append("a")
		     	 .attr("xlink:href", "/capabilities")
		         .append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "59.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("3"); 

		    svg.append("text")
				 .attr("font-size", "24px")
				 .attr("x", "54%")
				 .attr("y", "73%")
				 .style("font-weight", "bold")
				 .text("Capabilities"); 


			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "80%")
				 .style("font-weight", "bold")
				 .text("Discover the 10 key"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "83%")
				 .style("font-weight", "bold")
				 .text("capabilities needed to be");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "86%")
				 .style("font-weight", "bold")
				 .text("developed to reach Mars");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "89%")
				 .style("font-weight", "bold")
				 .text("and their challenges");

	 		// Trip to Mars
	 		var trip = svg.append("rect")
	 		   	.attr("x", "75%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "30%")
	 			.attr("fill", "#996633");

	 		svg.append("circle")
	 			 .attr("cx", "86%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .style("fill", "#86592d");

		    svg.append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "84.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("4"); 

		    
		    svg.append("text")
				 .attr("font-size", "24px")
				 .attr("x", "77%")
				 .attr("y", "75%")
				 .style("font-weight", "bold")
				 .text("My Trip To Mars"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "76%")
				 .attr("y", "82%")
				 .style("font-weight", "bold")
				 .text("Plan your own trip to Mars"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "76%")
				 .attr("y", "85%")
				 .style("font-weight", "bold")
				 .text("dealing with budget, path-");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "76%")
				 .attr("y", "88%")
				 .style("font-weight", "bold")
				 .text("ways and different scenarios"); 

		     
	 			
}