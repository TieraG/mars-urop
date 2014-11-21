var loadIndex = function(){

		   var svg = d3.select(".canvas")
		 			   .append("svg")
	 				   .attr("height", "100%")
	 				   .attr("width", "100%")
	 				   .attr("id", "main_page");

	 		// Title box
	 		svg.append("rect")
	 			.attr("x", "25%")
	 			.attr("y", "10%")
	 			.attr("width", "50%")
	 			.attr("height", "16%")
	 			.attr("fill", "#996633");

	 		svg.append("text")
				 .attr("font-size", "24px")
				 .attr("x", "35%")
				 .attr("y", "15%")
				 .style("font-weight", "bold")
				 .text("PATHWAYS TO EXPLORATION"); 

			svg.append("text")
				 .attr("class", "sub")
				 .attr("font-size", "21px")
				 .attr("x", "29%")
				 .attr("y", "20%")
				 .style("font-weight", "bold")
				 .text("Technical Analysis and Affordability Assessment"); 

	 		// Pathways
	 		 svg.append("rect")
	 		   	.attr("x", "0%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "40%")
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
				 .attr("y", "75%")
				 .style("font-weight", "bold")
				 .text("Pathways");

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "82%")
				 .style("font-weight", "bold")
				 .text("Discover the three proposed"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "85%")
				 .style("font-weight", "bold")
				 .text("pathways for a mission to");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "88%")
				 .style("font-weight", "bold")
				 .text("the Mars Surface and their");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "1%")
				 .attr("y", "91%")
				 .style("font-weight", "bold")
				 .text("properties");

	 		// Mission Elements
	 		 svg.append("rect")
	 		   	.attr("x", "25%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "40%")
	 			.attr("fill", "#996633");

	 		svg.append("circle")
	 			 .attr("cx", "36%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .style("fill", "#86592d"); 

		     svg.append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "34.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("2"); 

		     svg.append("text")
				 .attr("font-size", "24px")
				 .attr("x", "26.5%")
				 .attr("y", "75%")
				 .style("font-weight", "bold")
				 .text("Mission Elements"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "82%")
				 .style("font-weight", "bold")
				 .text("Discover the 11 Mission"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "85%")
				 .style("font-weight", "bold")
				 .text("Elements involved in the");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "88%")
				 .style("font-weight", "bold")
				 .text("space exploration towards");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "26%")
				 .attr("y", "91%")
				 .style("font-weight", "bold")
				 .text("Mars");

	 		// Capabilities
	 		 svg.append("rect")
	 		   	.attr("x", "50%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "40%")
	 			.attr("fill", "#996633");

	 		svg.append("circle")
	 			 .attr("cx", "61%")
		         .attr("cy", "65%")
		         .attr("r", "5%")
		         .style("fill", "#86592d");

		    svg.append("text")
		    	 .attr('class', 'number')
				 .attr("font-size", "50px")
				 .attr("x", "59.5%")
				 .attr("y", "66.5%")
				 .style("font-weight", "bold")
				 .text("3"); 

		    svg.append("text")
				 .attr("font-size", "24px")
				 .attr("x", "54%")
				 .attr("y", "75%")
				 .style("font-weight", "bold")
				 .text("Capabilities"); 


			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "82%")
				 .style("font-weight", "bold")
				 .text("Discover the 10 key"); 

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "85%")
				 .style("font-weight", "bold")
				 .text("capabilities needed to be");  

			svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "88%")
				 .style("font-weight", "bold")
				 .text("developed to reach Mars");   
	 			
	 		svg.append("text")
				 .attr("class", 'content')
				 .attr("font-size", "16px")
				 .attr("x", "51%")
				 .attr("y", "91%")
				 .style("font-weight", "bold")
				 .text("and their challenges");

	 		// Trip to Mars
	 		var trip = svg.append("rect")
	 		   	.attr("x", "75%")
	 			.attr("y", "65%")
	 			.attr("width", "21%")
	 			.attr("height", "40%")
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