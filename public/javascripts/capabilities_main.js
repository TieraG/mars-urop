loadCapabilities = function(){

	var svg = d3.select("#content")
				.append("svg")
				.attr("height", 1000)
				.attr("width", 1500)
				.attr("id", "capabilities-svg")
				.append("g");

	// Rectangles
	var coodY = 10;

	for (var i = 1; i < 12; i++){

		if (i%2 === 0){
			svg.append("rect")
			   .attr("x", 10)
			   .attr("y", coodY)
			   .attr("height", 50)
			   .attr("width", 400)
			   .attr("fill", "#996633");
		} else {
			svg.append("rect")
			   .attr("x", 10)
			   .attr("y", coodY)
			   .attr("height", 50)
			   .attr("width", 400)
			   .attr("fill", "grey");
		}

		coodY+=50;
	}

	// Text for labels

	coodY = 40;

	var cap_text = ["MARS EDL", "RADIATION PROTECTION", "IN-SPACE PROPULSION", "FISSION POWER", "HEAVY LIFT LAUNCH VEHICLES", "PLANETARY ASCENT PROPULSION", "HABITATS", 'EVA SUITS', 'ECLSS', 'CREW HEALTH', 'ISRU (MARS ATMOSPHRE'];

	for (var i = 0; i < 11; i++){

		if (i%2 === 0){
			svg.append('text')
			   .attr("x", 30)
			   .attr("y", coodY)
			   .attr("class", "cap-labels")
			   .text(cap_text[i]);
		} else {
			svg.append('text')
			   .attr("x", 30)
			   .attr("y", coodY)
			   .attr("class", "cap-labels")
			   .text(cap_text[i]);
		}

		coodY+=50;
	}

	var coodX = 690;

	var signs = [{line:"HIGH", color: "red"}, {line:"MEDIUM", color: "orange"}, {line:"LOW", color: 'green'}];

	for (var i = 0; i < 3; i++){
		svg.append('text')
			   .attr("x", coodX - 10)
			   .attr("y", coodY)
			   .attr("class", "cap-labels")
			   .attr("fill", signs[i].color)
			   .text(signs[i].line);

		svg.append("line")
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

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(tech[i].one);

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(tech[i].two);

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+40)
			   .attr("class", "cap-text")
			   .text(tech[i].three);
	
		coodX+=300;
	}

	//Grey lines

	coodX = 630;
	coodY = 750;

	svg.append("line")
			.attr("x1", coodX-40)
			.attr("x2", coodX+780)
			.attr("y1", coodY+60)
			.attr("y2", coodY+60)
			.attr("stroke", "grey")
			.attr('stroke-width', '1.5px');

	coodY = 650;


	svg.append("line")
			.attr("x1", coodX-40)
			.attr("x2", coodX+780)
			.attr("y1", coodY+60)
			.attr("y2", coodY+60)
			.attr("stroke", "grey")
			.attr('stroke-width', '1.5px');

	coodY = 750;

	svg.append("line")
			.attr("x1", coodX-40)
			.attr("x2", coodX+780)
			.attr("y1", coodY+60)
			.attr("y2", coodY+60)
			.attr("stroke", "grey")
			.attr('stroke-width', '1.5px');

	coodY = 850;

	svg.append("line")
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

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(cap[i].one);

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(cap[i].two);

		svg.append('text')
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

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(reg[i].one);

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(reg[i].two);

		svg.append('text')
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

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY)
			   .attr("class", "cap-text")
			   .text(cost[i].one);

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+20)
			   .attr("class", "cap-text")
			   .text(cost[i].two);

		svg.append('text')
			   .attr("x", coodX)
			   .attr("y", coodY+40)
			   .attr("class", "cap-text")
			   .text(cost[i].three);

		coodX+=300;
	}

	

	coodY = 650;
	var challenges = [{one: "TECHNICAL", two: "CHALLENGES"}, {one:"CAPABILITY", two: "GAP"}, {one:"REGULATORY", two: "CHALLENGES"}, {one:"COST &", two: "SCHEDULE"}];
	
	for (var i = 0; i < 4; i++){
			svg.append('text')
			   .attr("x", 430)
			   .attr("y", coodY)
			   .attr("class", "cap-labels")
			   .text(challenges[i].one);

			svg.append('text')
			   .attr("x", 430)
			   .attr("y", coodY+30)
			   .attr("class", "cap-labels")
			   .text(challenges[i].two);

			coodY+=100;
	}


	var main_content = svg.append("g")
						  .attr("id", "main_content")
						  .attr("transform", "translate(410, 0)");




}