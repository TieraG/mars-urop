loadCapabilities = function(){

	svgCapa = d3.select("#content")
				.append("svg")
				.attr("height", 1100)
				.attr("width", 1450)
				.attr("id", "capabilities-svg")
				.append("g");


	var svgText = d3.select(".capa-text")
						.append("svg")
						.attr("id", "capa-text")
						.attr("height", 120)
						.attr("width", 1450);

	var dom = svgText.append("g")
			 		 .attr("width", 500)
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
							   .html("Requirements for completing the pathways can also be framed as capabilities. A wide range of capabilities was assessed in terms of the technical challenges, capability gap, regulatory challenges, and cost and schedule challenges that would need to be overcome to complete their development. This assessment determined that current research and development programs would need to address the 10 capabilities below as a high priority, with a particular emphasis on the first three.");

	// Rectangles
	var coodY = 60;

	// Text for labels
	var cap_text = [

					{

					text: "MARS EDL", 
					id: "mars-edl"

					},

					{
						text: "RADIATION PROTECTION",
						id: "radiation"
					}, 

					{
						text: "IN-SPACE PROPULSION",
						id: "propulsion"

					} , 

					{

						text: "HEAVY LIFT LAUNCH VEHICLES",
						id: "heavy"
					},

					{
						text: "PLANETARY ASCENT PROPULSION",
						id: 'planetary'
					},
					{
						text: 'ECLSS',
						id: 'eclss'
					},

					{

						text: "HABITATS",
						id: 'habitats'
					}, 
					{
						text: 'EVA SUITS',
						id: "eva-suits"
					},
					
					{
						text: 'CREW HEALTH',
						id: 'crew'
					},
					{
						text: 'ISRU (MARS ATMOSPHRE)',
						id: "isru"
					}

	];

	for (var i = 1; i < 11; i++){

		if (i%2 === 0){
			svgCapa.append("a")
			   .attr("xlink:href", "#")
			   .attr("id", cap_text[i-1].id)
			   .append("rect")
			   .attr("x", 10)
			   .attr("y", coodY)
			   .attr("height", 50)
			   .attr("width", 400)
			   .attr("fill", "#996633");
		} else {
			svgCapa.append("a")
			   .attr("xlink:href", "#")
			   .attr("id", cap_text[i-1].id)
			   .append("rect")
			   .attr("x", 10)
			   .attr("y", coodY)
			   .attr("height", 50)
			   .attr("width", 400)
			   .attr("fill", "grey");
		}

		coodY+=50;
	}

	coodY = 100;

	for (var i = 0; i < 10; i++){

		svgCapa.append("a")
		   .attr("xlink:href", "#")
		   .attr("id", cap_text[i].id)
		   .append('text')
		   .attr("x", 30)
		   .attr("y", coodY)
		   .attr("class", "cap-labels glow")
		   .text(cap_text[i].text);

		coodY+=50;
	}

	var coodX = 690;

	var signs = [{line:"HIGH", color: "#b30000"}, {line:"MEDIUM", color: "#FFDE00"}, {line:"LOW", color: '#00FF00'}];

	for (var i = 0; i < 3; i++){
		svgCapa.append('text')
			   .attr("x", coodX - 10)
			   .attr("y", coodY)
			   .attr("class", "cap-labels")
			   .attr("fill", signs[i].color)
			   .text(signs[i].line);

		svgCapa.append("line")
			.attr("x1", coodX-100)
			.attr("x2", coodX+130)
			.attr("y1", coodY+10)
			.attr("y2", coodY+10)
			.attr("stroke", signs[i].color)
			.attr('stroke-width', '5px');


		coodX+=300;
	}

	coodX = 600;
	coodY = 650;

	var tech = [

				{

				one: "Technical solution currently",
				two: "unknown or unattainable",
				three: "with current technology"

				},

				{

				one: "Solution is known but not well",
				two: "understood",
				three: ""
				
				},
				{

				one: "Solution is well understood",
				two: "with current or previous",
				three: "relevant research"
				
				}
	];

	
	for (var i = 0; i < 3; i++){

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(tech[i].one);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(tech[i].two);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+40)
			   .attr("class", "cap-text")
			   .text(tech[i].three);
	
		coodX+=300;
	}

	//Grey lines

	coodX = 630;
	coodY = 750;

	svgCapa.append("line")
			.attr("x1", coodX-40)
			.attr("x2", coodX+800)
			.attr("y1", coodY+60)
			.attr("y2", coodY+60)
			.attr("stroke", "grey")
			.attr('stroke-width', '1.5px');

	coodY = 650;


	svgCapa.append("line")
			.attr("x1", coodX-40)
			.attr("x2", coodX+800)
			.attr("y1", coodY+60)
			.attr("y2", coodY+60)
			.attr("stroke", "grey")
			.attr('stroke-width', '1.5px');

	coodY = 750;

	svgCapa.append("line")
			.attr("x1", coodX-40)
			.attr("x2", coodX+800)
			.attr("y1", coodY+60)
			.attr("y2", coodY+60)
			.attr("stroke", "grey")
			.attr('stroke-width', '1.5px');

	coodY = 850;

	svgCapa.append("line")
			.attr("x1", coodX-40)
			.attr("x2", coodX+780)
			.attr("y1", coodY+60)
			.attr("y2", coodY+60)
			.attr("stroke", "grey")
			.attr('stroke-width', '1.5px');




	coodX = 600;
	coodY = 750;

	var cap = [

				{

				one: "No relevant systems exist or",
				two: "have existed at the",
				three: "appropriate scale"

				},

				{

				one: "Systems exist or have",
				two: "existed that are scalable to",
				three: "mission needs"
				
				},
				{

				one: "Systems exist that are",
				two: "translatable or are easily",
				three: "scalable to mission needs"
				
				}
	];

	
	for (var i = 0; i < 3; i++){

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(cap[i].one);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(cap[i].two);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+40)
			   .attr("class", "cap-text")
			   .text(cap[i].three);
	
		coodX+=300;
	}

	coodX = 600;
	coodY = 850;

	var reg = [

				{

				one: "Current regulations impose",
				two: "significant restrictions and",
				three: "will be difficult to change"

				},

				{

				one: "Current regulations impose",
				two: "a challenge",
				three: ""
				
				},
				{

				one: "",
				two: "No regulatory issues",
				three: ""
				
				}
	];

	
	for (var i = 0; i < 3; i++){

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(reg[i].one);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(reg[i].two);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+40)
			   .attr("class", "cap-text")
			   .text(reg[i].three);
	
		coodX+=300;
	}

	coodX = 600;
	coodY = 950;

	var cost = [

				{

				one: "Development to operational",
				two: "capability is on the order of",
				three: "previous large, national programs",

				},

				{

				one: "",
				two: "On the order of Apollo Heat",
				three: "Shield or Orion ECLSS",
				
				},
				{

				one: "",
				two: "< 5 years development with",
				three: "< 50 person team",
				
				}
	];

	
	for (var i = 0; i < 3; i++){

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(cost[i].one);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(cost[i].two);

		svgCapa.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+40)
			   .attr("class", "cap-text")
			   .text(cost[i].three);

		coodX+=300;
	}

	

	coodY = 650;
	var challenges = [{one: "TECHNICAL", two: "CHALLENGES"}, {one:"CAPABILITY", two: "GAP"}, {one:"REGULATORY", two: "CHALLENGES"}, {one:"COST &", two: "SCHEDULE"}];
	
	for (var i = 0; i < 4; i++){
			svgCapa.append('text')
			   .attr("x", 430)
			   .attr("y", coodY)
			   .attr("class", "cap-labels")
			   .text(challenges[i].one);

			svgCapa.append('text')
			   .attr("x", 430)
			   .attr("y", coodY+30)
			   .attr("class", "cap-labels")
			   .text(challenges[i].two);

			coodY+=100;
	}

}