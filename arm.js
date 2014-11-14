	
var loadARM = function(){
		
		/////////////////////////////////////////////////////

		 var svg = d3.select(".canvas").append("svg")
			  		 								.attr("height", "430px")
			  		 								.attr("width", ($(window).width() / 2) - 30)
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
			  		 							id: "arm", 
			  		 							width: 400, 
			  		 							height: 400, 
			  		 							link: "public/images/ARM.png", 
			  		 							x: 180 + shift, 
			  		 							y: 3
			  		 						},


			  		 						{
			  		 							id: "moonmars", 
			  		 							width: 600, 
			  		 							height: 600, 
			  		 							link: "public/images/moonmars.png", 
			  		 							x: 380 + shift, 
			  		 							y: 150
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
						  		 	cy: 53,
						  		 	r: 40,
						  		 	fill: "url(#arm)",
						  		 	inner: "#E65C00"
						  		 },

						  		 {
						  		 	cx: 430 + shift,
						  		 	cy: 200,
						  		 	r: 40,
						  		 	fill: "url(#moonmars)",
						  		 	inner: "purple",
						  		 	middle: "#E65C00"
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

			  		 var issToArm = svg.append("line")
											.attr("x1", 110 + shift)
											.attr("y1", 200)
											.attr("x2", 180 + shift)
											.attr("y2", 70)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");


					var armToMarsmoon = svg.append("line")
											.attr("x1", 270 + shift)
											.attr("y1", 53)
											.attr("x2", 375 + shift)
											.attr("y2", 180)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");

					var marsmoonToMarsOne = svg.append("line")
											.attr("x1", 420 + shift)
											.attr("y1", 245)
											.attr("x2", 420 + shift)
											.attr("y2", 284)
											.attr("stroke", "#E65C00")
											.attr("stroke-width", 6)
											.attr("marker-end", "url(#arrowOrange)");
					
					
					// Labels

					var issText = svg.append("text")
									 .attr("font-size", "13px")
									 .attr("x", 30 + shift)
									 .attr("y", 280)
									 .text("LEO/ISS");

					var marsText = svg.append("text")
									 .attr("font-size", "13px")
									 .attr("x", 150 + shift)
									 .attr("y", 53)
									 .text("ARM");


					var moonText = svg.append("text")
									 .attr("font-size", "13px")
					
					

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

					var marsmoonText = svg.append("text")
									 .attr("font-size", "13px")
				
					marsmoonText.append("tspan")
							   .attr("x", 300 + shift)
							   .attr("y", 220)
							   .text("MARTIAN");

					marsmoonText.append("tspan")
							   .attr("x", 300 + shift)
							   .attr("y", 235)
							   .text("MOONS");

		//////////////////////////////////////////////////


		var svgData = d3.select(".canvas")
		  					.append("svg")
		  					.attr("id", "drm")
		  					.attr("height", "430px")
		  					.attr("width", ($(window).width() / 2) + 20);

			  									 


			  	var groupOne = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupTwo = svgData.append("g").attr("transform", "translate(100, 100)");
			  	var groupThree = svgData.append("g").attr("transform", "translate(100, 100)");

			  	//// TOP SECTION

				groupOne.append("line")
						.attr("x1", -70)
						.attr("y1", -85)
						.attr("x2", 470)
						.attr("y2", -85)
						.attr("stroke", "grey")
						.attr("stroke-width", 3);

				groupOne.append("line")
						.attr("x1", -70)
						.attr("y1", -35)
						.attr("x2", 470)
						.attr("y2", -35)
						.attr("stroke", "grey")
						.attr("stroke-width", 3);

				var armBox = groupOne.append("rect")
						.attr("width", 40)
						.attr("height", 40)
						.attr("x", -60)
						.attr("y", -80)
						.attr("fill", "#E65C00")
						.attr("stroke-width", "5");

				groupOne.append("text")
						.attr("x", 0)
						.attr("y", -50)
						.attr("font-size", "14px")
						.text("ARM");

				var moonBox = groupTwo.append("rect")
						.attr("width", 40)
						.attr("height", 40)
						.attr("x", 50)
						.attr("y", -80)
						.attr("fill", "#0099FF")
						.attr("stroke-width", "5");

				groupTwo.append("text")
						.attr("x", "110")
						.attr("y", "-50")
						.attr("font-size", "14px")
						.text("MOON TO MARS");

				var enhancedBox = groupThree.append("rect")
						.attr("width", 40)
						.attr("height", 40)
						.attr("x", 240)
						.attr("y", -80)
						.attr("fill", "purple")
						.attr("stroke-width", "3");

				groupThree.append("text")
						  .attr("x", 290)
						  .attr("y", -50)
						  .attr("font-size", "14px")
						  .text("ENHANCED EXPLORATION")


			  	var rowOne = [{lineOne: "Asteriod", lineTwo: "Redirect", lineThree: "Mission"}, {lineOne: "Martian", lineTwo: "Moons"}, {lineOne: "Mars", lineTwo: "Surface"}];

			  	
			  	var descripOne = groupOne.append("text").attr("font-size", "14px")

				var desOneOne = descripOne.append("tspan");
				var desOneTwo = descripOne.append("tspan");
				var desOneThree = descripOne.append("tspan");

				desOneOne.attr("x", -50).attr("y", 25).text("ARM");
				desOneTwo.attr("x", -50).attr("y", 40).text("TO");
				desOneThree.attr("x", -50).attr("y", 55).text("MARS");

				var descripTwo = groupTwo.append("text").attr("font-size", "14px")

			

				

				var descripThree = groupThree.append("text").attr("font-size", "14px")

				var desThreeOne = descripThree.append("tspan");
				var desThreeTwo = descripThree.append("tspan");
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


			  	var rectOne = groupOne.selectAll("rect")
			  						.data(rowOne)
							  		.enter()
						  		 	.append("rect")
						  		 	.attr("width", 70)
									.attr("height", 70)
									.attr("x", function(d, i){return 20 + i*80})
									.style("fill", function(d,i){
										if (i == 2){
											return "#900000"
										} 

										return "transparent";
									})
									.style("stroke", "black")
						 			.style("stroke-width", 3);

				var textLineOne = groupOne.selectAll(".one")
							  		.data(rowOne)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 15)
							  			.attr("font-size", "11px")
							  			.text(function(d){return d.lineOne})

				var textLineTwo = groupOne.selectAll(".one")
							  		.data(rowOne)
							  		.enter()
							  			.append("text")
							  			.attr("x", function(d, i){return 25 + i*80})
							  			.attr("y", 30)
							  			.attr("font-size", "11px")
							  			.text(function(d){
							  				if (d.lineTwo){
							  					return d.lineTwo
							  				} else {
							  					return "";
							  				}
							  			});

				


		/////////////////////////////////////////////////

		var svgChart = d3.select(".chart")
			  						.append("svg")
			  						.attr('id', "chart")
			  						.attr("height", "500px")
			  						.attr("width", $(window).width() - 10 );

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

			 
			  		var armDataOneOne = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 3, attr: "dead_mission" }

			  		]

			  		var armDataOneTwo = [ 
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 1, attr: "primary"},
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission"},
			  			{type: 3, attr: "dead_mission"}
			  		]

			  		var armDataOneThree = [ 
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
			  			{type: 3, attr: "dead_mission" },
			  			{type: 3, attr: "dead_mission"},
			  			{type: 3, attr: "dead_mission"},
			  			{type: 3, attr: "dead_mission"}

			  		]

			  		

			  		

			  		groupOneOne.selectAll("rect")
			  				   .data(armDataOneOne)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 120)
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

					groupOneTwo.selectAll("rect")
			  				   .data(armDataOneTwo)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 120 + 30)
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

					groupOneThree.selectAll("rect")
			  				   .data(armDataOneThree)
			  				   .enter()
			  				   		.append("rect")
			  				   		.attr("width", 15)
			  				   		.attr("class", function(d){return d.attr})
									.attr("height", 15)
									.attr("x", 120 + 60)
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
