	
var loadMoonToMars = function(){

	/////////////////////////////////////////////////////

		var svgNav = d3.select(".canvas").append("svg")
  		 								.attr("height", 70)
  		 								.attr("width", 1150)
  		 								.attr("id", "nav");

  		 var group = svgNav.append("g")
			  						.attr("transform", "translate(100, 100)");

  		 
		//// TOP SECTION

			group.append("line")
					.attr("x1", "20%")
					.attr("y1", -85)
					.attr("x2", "78%")
					.attr("y2", -85)
					.attr("stroke", "grey")
					.attr("stroke-width", 3);

			group.append("line")
					.attr("x1", "20%")
					.attr("y1", -35)
					.attr("x2", "78%")
					.attr("y2", -35)
					.attr("stroke", "grey")
					.attr("stroke-width", 3);


			var armBox = group.append("rect")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "22%")
					.attr("y", -75)
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
						clickCount = 0
					});


			group.append("text")
					.attr("x", "28%")
					.attr("y", -55)
					.attr("font-size", "14px")
					.text("ARM");

			var moonBox = group.append("rect")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "35%")
					.attr("y", -75)
					.attr("fill", "#0099FF")
					.attr("stroke-width", "5")
					.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMoonToMars();
						clickCount = 1;
					})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMainPage();
						clickCount = 0;
					});

			group.append("text")
					.attr("x", "41%")
					.attr("y", -55)
					.attr("font-size", "14px")
					.text("MOON TO MARS");

			var enhancedBox = group.append("rect")
					.attr("width", 30)
					.attr("height", 30)
					.attr("x", "55%")
					.attr("y", -75)
					.attr("fill", "purple")
					.attr("stroke-width", "3")
					.on("mouseenter", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadEnhanced();
						console.log("MOUSE ENTER");
					})
					.on("mouseleave", function(){
						$(".canvas").html("");
						$(".chart").html("");
						loadMainPage();
						console.log("MOUSE OUT");
					});

			group.append("text")
					  .attr("x", "61%")
					  .attr("y", -55)
					  .attr("font-size", "14px")
					  .text("ENHANCED EXPLORATION");

		/////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////

		
		/////////////////////////////////////////////////////

		 var svg = d3.select(".canvas").append("svg")
			  		 								.attr("height", "430px")
			  		 								.attr("width", 550)
			  		 								.attr("id", "pathways");

			  		 var shift = ($(window).width() / 30); 

			  		 var tip = d3.tip()
			  		 			 .attr("class", "d3_tip")
			  		 			 .offset([5, 5])
			  		 			 .html("<p> ISS do you copy <p>");

			  		 svg.call(tip);

			  		 // Path info

			  		 var patternInfo = [
			  		 						{
			  		 							id: "iss", 
			  		 							width: 300, 
			  		 							height: 300, 
			  		 							link: "public/images/ISS.png", 
			  		 							x: 0 + shift, 
			  		 							y: 150
			  		 						}, 

			  		 						{
			  		 							id: "moon", 
			  		 							width: 500, 
			  		 							height: 500, 
			  		 							link: "public/images/moon.png", 
			  		 							x: 180 + shift, 
			  		 							y: 300
			  		 						}, 

			  		 						{
			  		 							id: "marsurface", 
			  		 							width: 600, 
			  		 							height: 600, 
			  		 							link: "public/images/marsurface.png", 
			  		 							x: 380 + shift, 
			  		 							y: 300
			  		 						}
			  		 				];

			  		 patternInfo.forEach(function(pattern){

					  	svg.append("defs")
								   .append("pattern")
								   .attr("id", pattern.id)
								   .attr('patternUnits', 'userSpaceOnUse')
								   .attr("width", pattern.width)
								   .attr("height", pattern.height)
								   .append("image")
								   .attr("width", 100)
								   .attr("height", 100)
								   .attr("xlink:href", pattern.link)
								   .attr('x', pattern.x)
				                   .attr('y', pattern.y);

			  		 });

			  		 var circleInfo = [

						  		 {
						  		 	cx: 60 + shift,
						  		 	cy: 200,
						  		 	r: 40,
						  		 	fill: "url(#iss)",
						  		 	inner: "purple",
						  		 	middle: "#0099FF",
						  		 	outer: "#E65C00"
						  		 },


						  		 {
						  		 	cx: 230 + shift,
						  		 	cy: 350,
						  		 	r: 40,
						  		 	fill: "url(#moon)",
						  		 	inner: "purple",
						  		 	middle: "#0099FF"
						  		 },

						  		 {
						  		 	cx: 430 + shift,
						  		 	cy: 350,
						  		 	r: 40,
						  		 	fill: "url(#marsurface)",
						  		 	inner: "purple",
						  		 	middle: "#0099FF",
						  		 	outer: "#E65C00"
						  		 }

			  		 ]

			  		 circleInfo.forEach(function(circle){

				  		 svg.append("circle")
					         .attr("cx", circle.cx)
					         .attr("cy", circle.cy)
					         .attr("r", 40)
					         .style("fill", circle.fill)       
					         .style("stroke", circle.inner)     
					         .style("stroke-width", 5)
					         .on("mouseover", tip.show)
					         .on("mouseout", tip.hide);

					    if (circle.middle){
					    	 svg.append("circle")
						         .attr("cx", circle.cx)
						         .attr("cy", circle.cy)
						         .attr("r", 45)
						         .style("fill", "transparent")       
						         .style("stroke", circle.middle)     
						         .style("stroke-width", 5)
						         .on("mouseover", tip.show)
					         	 .on("mouseout", tip.hide);
					    }

					    if (circle.outer){
					    	 svg.append("circle")
						         .attr("cx", circle.cx)
						         .attr("cy", circle.cy)
						         .attr("r", 50)
						         .style("fill", "transparent")       
						         .style("stroke", circle.outer)     
						         .style("stroke-width", 5)
						         .on("mouseover", tip.show)
					             .on("mouseout", tip.hide);
					    }
						   
					  });

			  		 // Paths

			  		svg.append("defs")
			  		 	.append("marker")
			  		 	.attr("fill", "#E65C00")
			  		 	.attr("id", "arrowOrange")
			  		 	.attr("viewBox", "0 0 10 10")
			  		 	.attr("refX", "1")
			  		 	.attr("refY", "5")
			  		 	.attr("markerWidth", "3")
			  		 	.attr("markerHeight", "3")
			  		 	.attr("orient", "auto")
			  		 	.append("path")
			  		 	.attr("d", "M 0 0 L 10 5 L 0 10 z");

			  		svg.append("marker")
			  		 	.attr("fill", "purple")
			  		 	.attr("id", "arrowPurple")
			  		 	.attr("viewBox", "0 0 10 10")
			  		 	.attr("refX", "1")
			  		 	.attr("refY", "5")
			  		 	.attr("markerWidth", "3")
			  		 	.attr("markerHeight", "3")
			  		 	.attr("orient", "auto")
			  		 	.append("path")
			  		 	.attr("d", "M 0 0 L 10 5 L 0 10 z");

			  		svg.append("marker")
			  		 	.attr("fill", "#0099FF")
			  		 	.attr("id", "arrowBlue")
			  		 	.attr("viewBox", "0 0 10 10")
			  		 	.attr("refX", "1")
			  		 	.attr("refY", "5")
			  		 	.attr("markerWidth", "3")
			  		 	.attr("markerHeight", "3")
			  		 	.attr("orient", "auto")
			  		 	.append("path")
			  		 	.attr("d", "M 0 0 L 10 5 L 0 10 z");

			  		

				

					var issToMoon = svg.append("line")
											.attr("x1", 105 + shift)
											.attr("y1", 205)
											.attr("x2", 177 + shift)
											.attr("y2", 340)
											.attr("stroke", "#0099FF")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowBlue)");


					
					

					

					var moonToMarsurface = svg.append("line")
											.attr("x1", 275 + shift)
											.attr("y1", 350)
											.attr("x2", 370 + shift)
											.attr("y2", 350)
											.attr("stroke", "#0099FF")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowBlue)");

					
					// Labels

					

					var moonText = svg.append("text")
									 .attr("font-size", "13px")
					
					var moonTextOne = moonText.append("tspan");
					var moonTextTwo = moonText.append("tspan");
					var moonTextThree = moonText.append("tspan");

					moonTextOne.attr("x", 70 + shift)
							   .attr("y", 370)
							   .text("LUNAR SORTIE");

					moonTextTwo.attr("x", 70 + shift) 
							   .attr("y", 385)
							   .text("&");

					moonTextThree.attr("x", 70 + shift)
							   .attr("y", 400)
							   .text("LUNAR OUTPOST");

					var marsText = svg.append("text")
									 .attr("font-size", "13px")
				
					marsText.append("tspan")
							   .attr("x", 320 + shift)
							   .attr("y", 370)
							   .text("MARS");

					marsText.append("tspan")
							   .attr("x", 320 + shift)
							   .attr("y", 390)
							   .text("SURFACE");

					
		//////////////////////////////////////////////////


		var svgData = d3.select(".canvas")
		  					.append("svg")
		  					.attr("id", "drm")
		  					.attr("height", "430px")
		  					.attr("width", 600);

			  							
			  	var groupOne = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupTwo = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupThree = svgData.append("g").attr("transform", "translate(100, 100)");


			  	var rowTwo = [{lineOne: "Lunar", lineTwo: "Surface", lineThree: "Sortie"}, {lineOne: "Lunar", lineTwo: "Surface", lineThree: "Outpost"}, {lineOne: "Mars", lineTwo: "Surface"}];


				var descripTwo = groupTwo.append("text").attr("font-size", "14px")

				var desTwoOne = descripTwo.append("tspan");
				var desTwoTwo = descripTwo.append("tspan");
				var desTwoThree = descripTwo.append("tspan");

				desTwoOne.attr("x", -50).attr("y", 125).text("MOON");
				desTwoTwo.attr("x", -50).attr("y", 140).text("TO");
				desTwoThree.attr("x", -50).attr("y", 155).text("MARS");

				var descripThree = groupThree.append("text").attr("font-size", "14px")

			
				var pathwayLabel = descripThree.append("tspan");
				var drmLabel = descripThree.append("tspan");


				
				pathwayLabel.attr("x", -80).attr("y", 300).text("PATHWAY");
				drmLabel.attr("x", 150).attr("y", 300).text("DESIGN REFERENCE MISSION (DRM)");


				var linePathway = groupThree.append("line")
											.attr("x1", -85)
											.attr("y1", 280)
											.attr("x2", 10)
											.attr("y2", 280)
											.attr("stroke", "grey")
											.attr("stroke-width", 6);

				var drmLine = groupThree.append("line")
											.attr("x1", 20)
											.attr("y1", 280)
											.attr("x2", 492)
											.attr("y2", 280)
											.attr("stroke", "grey")
											.attr("stroke-width", 6);


			  

				var rectTwo = groupTwo.selectAll(".rect2")
			  						.data(rowTwo)
							  		.enter()
						  		 	.append("rect")
						  		 	.attr("width", 70)
									.attr("height", 70)
									.attr("x", function(d, i){return 20 + i*80})
									.attr("y", 100)
									.style("fill", function(d,i){
										if (i == 2){
											return "#900000"
										} 

										return "transparent";
									})
									.style("stroke", "black")
						 			.style("stroke-width", 3);

				var textLineTwoOne = groupTwo.selectAll(".two")
							  		.data(rowTwo)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 120)
							  			.attr("font-size", "11px")
							  			.text(function(d){return d.lineOne});

				var textLineTwoTwo = groupTwo.selectAll(".two")
							  		.data(rowTwo)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 135)
							  			.attr("font-size", "11px")
							  			.text(function(d){
							  				if (d.lineTwo){
							  					return d.lineTwo
							  				} else {
							  					return "";
							  				}
							  			});

				var textLineTwoThree = groupTwo.selectAll(".two")
										  		.data(rowTwo)
										  		.enter()
										  			.append("text")
										  			.attr("x", function(d, i){return 25 + i*80})
										  			.attr("y", 150)
										  			.attr("font-size", "11px")
										  			.text(function(d){
										  				if (d.lineThree){
										  					return d.lineThree
										  				} else {
										  					return "";
										  				}
										  			});

				


		/////////////////////////////////////////////////

		var svgChart = d3.select(".chart")
			  						.append("svg")
			  						.attr('id', "chart")
			  						.attr("height", "500px")
			  						.attr("width", 1150 );

			  		var groupOneOne = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupOneTwo = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupOneThree = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			  		var groupLabels = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			  		// Labels

			  		groupLabels.append("line")
								.attr("x1", 100)
								.attr("y1", -60)
								.attr("x2", 230)
								.attr("y2", -60)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("text")
							  .attr("x", 120)
							  .attr("y", -80)
							  .attr("font-size", "14px")
							  .text("ARM TO MARS");

					groupLabels.append("line")
								.attr("x1", 280)
								.attr("y1", -60)
								.attr("x2", 410)
								.attr("y2", -60)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("text")
							  .attr("x", 290)
							  .attr("y", -80)
							  .attr("font-size", "14px")
							  .text("MOON TO MARS");

					groupLabels.append("line")
								.attr("x1", 480)
								.attr("y1", -60)
								.attr("x2", 670)
								.attr("y2", -60)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("line")
								.attr("x1", 0)
								.attr("y1", 350)
								.attr("x2", 670)
								.attr("y2", 350)
								.attr("stroke", "grey")
								.attr("stroke-width", 6);

					groupLabels.append("text")
							  .attr("x", 490)
							  .attr("y", -80)
							  .attr("font-size", "14px")
							  .text("ENHANCED EXPLORATION");

					groupLabels.append("text")
							  .attr("x", 220)
							  .attr("y", 380)
							  .attr("font-size", "14px")
							  .text("CULMULATIVE NUMBER OF ELEMENTS");

					groupLabels.append("text")
							  .attr("x", 800)
							  .attr("y", 0)
							  .attr("font-size", "14px")
							  .text("DEAD-END MISSION ELEMENT");

					groupLabels.append("text")
							  .attr("x", 795)
							  .attr("y", 100)
							  .attr("font-size", "14px")
							  .text("TRANSITIONAL MISSION ELEMENT");

					groupLabels.append("text")
							  .attr("x", 800)
							  .attr("y", 200)
							  .attr("font-size", "14px")
							  .text("PRIMARY MISSION ELEMENT");

					groupLabels.append("rect")
						      .attr("width", 40)
						      .attr("height", 40)
							  .attr("x", 750)
							  .attr("y", -25)
							  .attr('fill', 'red');

					groupLabels.append("rect")
						      .attr("width", 40)
						      .attr("height", 40)
							  .attr("x", 750)
							  .attr("y", 75)
							  .attr('fill', 'orange');

					groupLabels.append("rect")
						      .attr("width", 40)
						      .attr("height", 40)
							  .attr("x", 750)
							  .attr("y", 175)
							  .attr('fill', 'green');
							  


			  		var groupTwoOne = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupTwoTwo = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupTwoThree = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			  	

			  		var groupThreeOne = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeTwo = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeThree = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeFour = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeFive = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");
			  		var groupThreeSix = svgChart.append("g")
			  							  .attr("transform", "translate(100, 100)");

			 
			  		
			  		var armDataTwoOne = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataTwoTwo = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		var armDataTwoThree = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 2, attr: "translational"},
			  			{type: 3, attr: "dead_mission" }
			  		]

			  		
			  		

			  	

					groupTwoOne.selectAll("rect")
			  				   .data(armDataTwoOne)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 300)
									.attr("y", function(d, i){return 300 - i*20})
									.style("fill", function(d,i){
										if (d.type === 3){
											return "red"
										} else if (d.type === 2) {
											return "orange"
										} else {
											return "green"
										}
									});

					groupTwoTwo.selectAll("rect")
			  				   .data(armDataTwoTwo)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 300 + 30)
									.attr("y", function(d, i){return 300 - i*20})
									.style("fill", function(d,i){
										if (d.type === 3){
											return "red"
										} else if (d.type === 2) {
											return "orange"
										} else {
											return "green"
										}
									});

					groupTwoThree.selectAll("rect")
			  				   .data(armDataTwoThree)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 300 + 60)
									.attr("y", function(d, i){return 300 - i*20})
									.style("fill", function(d,i){
										if (d.type === 3){
											return "red"
										} else if (d.type === 2) {
											return "orange"
										} else {
											return "green"
										}
									});

					
}
