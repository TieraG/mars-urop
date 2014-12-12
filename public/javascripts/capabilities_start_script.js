$(document).ready(function(){

	loadCapabilities();
	loadNav("capabilities");

	var tip = d3.tip()
	 			 .attr("class", "d3_tip")
	 			 .offset([0, -20])
	 			 .direction("w")
	 			 .html(function(d){
	 			 	return "<img width='50' height='50' src=" + d.src + ">";
	 			 });

	svgCapa.call(tip);

	var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

	var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

	groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

	groupExtra.append("line")
	 		    .attr("x1", 10)
				.attr("x2", 270)
				.attr("y1", 110)
				.attr("y2", 110)
				.attr("stroke", "green")
				.attr('stroke-width', '5px');

	groupExtra.append("text")
			  .attr("x", 20)
			  .attr("y", 140)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Aeroassit System")
			  .on("mouseenter", function(){
					         	tip.show({src: aas.src});
			  }).on("mouseleave", tip.hide);

	groupExtra.append("text")
			  .attr("x", 20)
			  .attr("y", 170)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Crew Command & Service Module")
			  .on("mouseenter", function(){
					         	tip.show({src: ccs.src});
			  }).on("mouseleave", tip.hide);

	groupExtra.append("text")
			  .attr("x", 20)
			  .attr("y", 220)
			  .attr("fill", "orange")
			  .style("font-size", 18)
			  .style('font-family', "sans-serif")
			  .text("Translational Mission Elements");

	groupExtra.append("line")
	 		    .attr("x1", 10)
				.attr("x2", 270)
				.attr("y1", 230)
				.attr("y2", 230)
				.attr("stroke", "orange")
				.attr('stroke-width', '5px');

	groupExtra.append("text")
			  .attr("x", 20)
			  .attr("y", 260)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Lunar Module")
			  .on("mouseenter", function(){
					         	tip.show({src: lm.src});
			  }).on("mouseleave", tip.hide);

	groupExtra.append("text")
			  .attr("x", 20)
			  .attr("y", 290)
			  .style("font-size", 17)
			  .style('font-family', "sans-serif")
			  .text("Lunar Orbital Outpost")
			  .on("mouseenter", function(){
					         	tip.show({src: lop.src});
			  }).on("mouseleave", tip.hide);

	var dom = svgCapa.append("g")
					 .attr("id", "capaDom")
			 		 .attr("width", 700)
			 		 .attr("height",560)
			 		 .attr("transform", "translate(440, 0)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", 700)
				     .attr("height", 560);

	var htmlBody = dom.append("xhtml:body")
					 .style("font-size", "19px")
					 .attr("id", "capaBody")
					 .attr("class", "cap-labels left");

	var header = htmlBody.append("xhtml:h3")
					 .attr("id", "capaHeader")
					 .style("text-align", "center")
					 .style("padding-top", "20px")
					 .html("MARS EDL");

	var text = htmlBody.append("xhtml:p")
					   .html("Technical challenges are ranked high because the technologies needed for a Mars EDL system capable of handling very large payloads (40 to 80 MT) have yet to be identified. The capability gap is ranked high because the payload capacity of the necessary EDL systems are currently far beyond the capability of existing EDL systems. Cost and schedule challenges are ranked high because extraordinary resources and time would be needed to identify suitable technologies, scale them up to the requisite size, and conduct flight testing in the atmosphere of Earth and/or Mars to build confidence that they are safe enough for use on a crewed mission.");

	var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
	];




	var coodX = 10;
	var coodY = 300;

	rect.forEach(function(r){

		var rectT = group.append("rect")
					.attr("x", coodX)
					.attr("y", coodY)
					.attr("height", 150)
					.attr("width", 150)
					.attr("fill", r.color)
					.style("opacity", "0.85");

		group.append("text")
			 .attr("x", coodX+10)
			 .attr("y", coodY+20)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textTopOne);

		group.append("text")
			 .attr("x", coodX+10)
			 .attr("y", coodY+40)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textTopTwo);

		group.append("text")
			 .attr("x", coodX+10)
			 .attr("y", coodY+60)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textTopThree);

		group.append("text")
			 .attr("x", coodX+50)
			 .attr("y", coodY+130)
			 .style("font-family", 'sans-serif')
			 .attr("fill", 'white')
			 .text(r.textBot);

		coodX+=170;
	})

	$(document).on("click", "#mars-edl", function(event){

			event.preventDefault();
		
			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();

			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");


			var dom = svgCapa.append("g")
					 .attr("id", "capaDom")
			 		 .attr("width", 700)
			 		 .attr("height",560)
			 		 .attr("transform", "translate(440, 0)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", 700)
				     .attr("height", 560);

			htmlBody = dom.append("xhtml:body")
							 .style("font-size", "19px")
							 .attr("id", "capaBody")
							 .attr("class", "cap-labels left");

			header = htmlBody.append("xhtml:h3")
							 .attr("id", "capaHeader")
							 .style("text-align", "center")
							 .style("padding-top", "20px")
							 .html("MARS EDL");

			text = htmlBody.append("xhtml:p")
							   .html("Technical challenges are ranked high because the technologies needed for a Mars EDL system capable of handling very large payloads (40 to 80 MT) have yet to be identified. The capability gap is ranked high because the payload capacity of the necessary EDL systems are currently far beyond the capability of existing EDL systems. Cost and schedule challenges are ranked high because extraordinary resources and time would be needed to identify suitable technologies, scale them up to the requisite size, and conduct flight testing in the atmosphere of Earth and/or Mars to build confidence that they are safe enough for use on a crewed mission.");
	
			var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 10;
			var coodY = 300;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

			groupExtra.append("text")
							  .attr("x", 20)
							  .attr("y", 100)
							  .attr("fill", "green")
							  .style("font-size", 18)
							  .style('font-family', "sans-serif")
							  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Aeroassit System")
					  .on("mouseenter", function(){
							         	tip.show({src: aas.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 170)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 220)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Translational Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 230)
						.attr("y2", 230)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 260)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  .on("mouseenter", function(){
							         	tip.show({src: lm.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 290)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Orbital Outpost")
					  .on("mouseenter", function(){
							         	tip.show({src: lop.src});
			  }).on("mouseleave", tip.hide);
	});

	$(document).on("click", "#radiation", function(event){

			event.preventDefault();

			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();

			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

			var dom = svgCapa.append("g")
					 .attr("id", "capaDom")
			 		 .attr("width", 700)
			 		 .attr("height",560)
			 		 .attr("transform", "translate(440, 0)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", 700)
				     .attr("height", 560);

			htmlBody = dom.append("xhtml:body")
							 .style("font-size", "19px")
							 .attr("id", "capaBody")
							 .attr("class", "cap-labels left");

			header = htmlBody.append("xhtml:h3")
							 .attr("id", "capaBody")
							 .style("text-align", "center")
							 .style("padding-top", "20px")
							 .html("RADIATION PROTECTION");

			text = htmlBody.append("xhtml:p")
							   .html("Technical challenges are ranked high because a suitable approach for providing adequate radiation safety has yet to be identified. The capability gap is ranked high because the ability to provide the level of radiation safety required for a human mission to the Mars surface is so far beyond the state of the art. Regulatory challenges are ranked medium because part of the solution may be to relax current radiation exposure limits (based on greater knowledge of the human health effects of the radiation environment in space and on the Mars surface and/or a reconsideration of the level of acceptable risk). Cost and schedule challenges are ranked medium because the time and resources necessary to develop adequate radiation safety systems are substantial.");
			
			var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			})

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 150)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Pressurized Surface Mobility")
					  .on("mouseenter", function(){
							         	tip.show({src: psm.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 180)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 210)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Deep Space Habitation")
					  .on("mouseenter", function(){
							         	tip.show({src: dsh.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 240)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Long Duration Surface Habitat")
					  .on("mouseenter", function(){
							         	tip.show({src: ldsh.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 300)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Translational Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 310)
						.attr("y2", 310)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 340)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  .on("mouseenter", function(){
							         	tip.show({src: lm.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 370)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Orbital Outpost")
					  .on("mouseenter", function(){
							         	tip.show({src: lop.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 430)
					  .attr("fill", "red")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Dead-end Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 440)
						.attr("y2", 440)
						.attr("stroke", "red")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 470)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Multi-year Deep Space Habitat")
					  .on("mouseenter", function(){
							         	tip.show({src: myd.src});
					  }).on("mouseleave", tip.hide);

	});

	$(document).on("click", "#propulsion", function(event){

			event.preventDefault();

			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();

			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

			var dom = svgCapa.append("g")
					 .attr("id", "capaDom")
			 		 .attr("width", 700)
			 		 .attr("height",560)
			 		 .attr("transform", "translate(440, 0)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", 700)
				     .attr("height", 560);


			htmlBody = dom.append("xhtml:body")
							 .style("font-size", "20px")
							 .attr("class", "cap-labels left");

			header = htmlBody.append("xhtml:h3")
							 .style("text-align", "center")
							 .style("padding-top", "20px")
							 .html("IN-SPACE PROPULSION");

			text = htmlBody.append("xhtml:p")
							.html("Several types of propulsion are suggested:");

			// FISSION
			group.append("text")
				 .attr("x", "180px")
				 .attr("y", "120px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Fission Power");

			group.append("text")
				 .attr("x", "630px")
				 .attr("y", "120px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("In Space Cyrogenic Propulsion");

			group.append("text")
				 .attr("x", "150px")
				 .attr("y", "260px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Nuclear Electric Propulsion");

			group.append("text")
				 .attr("x", "650")
				 .attr("y", "260")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Nuclear Thermal Propulsion");

			group.append("text")
				 .attr("x", "150px")
				 .attr("y", "400px")
				 .attr('font-size', '18px')
				 .attr('font-family', 'sans-serif')
				 .attr('font-weight', 'bold')
				 .text("Solar Electric Propulsion");

			var rect1 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST & SCHEDULE",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect2 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & SCHEDULE",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect3 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST & SCHEDULE",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect4 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "COST & SCHEDULE",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect5 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & SCHEDULE",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 0;
			var coodY = 130;
			
			rect1.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+30)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});
			
			coodX+=30;

			rect2.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+30)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});

			var coodX = 0;
			var coodY = 270;

			rect3.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+30)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});

			coodX+=30;

			rect4.forEach(function(r){

					var rectT = group.append("rect")
								.attr("x", coodX)
								.attr("y", coodY)
								.attr("height", 100)
								.attr("width", 110)
								.attr("fill", r.color)
								.style("opacity", "0.85");

					group.append("text")
						 .attr("x", coodX+10)
						 .attr("y", coodY+20)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopOne);

					group.append("text")
						 .attr("x", coodX+10)
						 .attr("y", coodY+30)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopTwo);

					group.append("text")
						 .attr("x", coodX+10)
						 .attr("y", coodY+40)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopThree);

					group.append("text")
						 .attr("x", coodX+35)
						 .attr("y", coodY+80)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '9')
						 .attr("fill", 'white')
						 .text(r.textBot);

					coodX+=120;
				});

			
			var coodX = 0;
			var coodY = 410;

			rect5.forEach(function(r){

					var rectT = group.append("rect")
								.attr("x", coodX)
								.attr("y", coodY)
								.attr("height", 100)
								.attr("width", 110)
								.attr("fill", r.color)
								.style("opacity", "0.85");

					group.append("text")
						 .attr("x", coodX+10)
						 .attr("y", coodY+20)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopOne);

					group.append("text")
						 .attr("x", coodX+10)
						 .attr("y", coodY+30)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopTwo);

					group.append("text")
						 .attr("x", coodX+10)
						 .attr("y", coodY+40)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '10')
						 .attr("fill", 'white')
						 .text(r.textTopThree);

					group.append("text")
						 .attr("x", coodX+35)
						 .attr("y", coodY+80)
						 .style("font-family", 'sans-serif')
						 .style("font-size", '9')
						 .attr("fill", 'white')
						 .text(r.textBot);

					coodX+=120;
				});
	});

	$(document).on("click", "#heavy", function(event){

			event.preventDefault();

			$("#capaGroup").remove();
			$("#capaGroupExtra").remove();
			$("#capaDom").remove();

			var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

			var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

			var dom = svgCapa.append("g")
					 .attr("id", "capaDom")
			 		 .attr("width", 700)
			 		 .attr("height",560)
			 		 .attr("transform", "translate(440, 0)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", 700)
				     .attr("height", 560);

			htmlBody = dom.append("xhtml:body")
							 .style("font-size", "19px")
							 .attr("class", "cap-labels left");

			header = htmlBody.append("xhtml:h3")
							 .style("text-align", "center")
							 .style("padding-top", "20px")
							 .html("HEAVY LIFT LAUNCH VEHICLE");

			text = htmlBody.append("xhtml:p")
							   .html("Heavy-lift launch systems (that is, launch systems with a payload capability of about 50 MT or more to LEO) reduce the number of launches required for human exploration missions beyond LEO. The large payload capacity, in terms of mass and volume, enable the launch of larger vehicle elements as single units, which reduces or eliminates the need for on orbit assembly and attendant integration and test risk on orbit. Two heavy-lift launch systems are currently under development in the United States: the NASA SLS and the SpaceX Falcon Heavy.");
			
			group.append("text")
				 .attr("x", "10")
				 .attr("y", "290")
				 .attr('font-size', '13')
				 .attr('font-family', 'sans-serif')
				 .text("SLS HEAVY LIFT LAUNCH VEHICLE");

			group.append("text")
				 .attr("x", "10")
				 .attr("y", "435")
				 .attr('font-size', '13')
				 .attr('font-family', 'sans-serif')
				 .text("FALCON HEAVY LIFT LAUNCH VEHICLE");

			var rect1 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & SCHEDULE",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var rect2 = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST & SCHEDULE",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				}
			];

			var coodX = 10;
			var coodY = 300;


			rect1.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+30)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});
			
			coodX=10;
			coodY=450

			rect2.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 100)
							.attr("width", 110)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+30)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '10')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+35)
					 .attr("y", coodY+80)
					 .style("font-family", 'sans-serif')
					 .style("font-size", '9')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=120;
			});

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Heavy Lift Launch Vehicle")
					  .on("mouseenter", function(){
							         	tip.show({src: hll.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 170)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 200)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Aeroassit System")
					  .on("mouseenter", function(){
							         	tip.show({src: aas.src});
					  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 240)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Translational Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 250)
						.attr("y2", 250)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 280)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Cyrogenic Propulsion System")
					  .on("mouseenter", function(){
							         	tip.show({src: cps.src});
					  }).on("mouseleave", tip.hide);

	
			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 330)
					  .attr("fill", "red")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Dead-end Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 340)
						.attr("y2", 340)
						.attr("stroke", "red")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 370)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Large Storable Stage")
					  .on("mouseenter", function(){
							         	tip.show({src: lss.src});
					  }).on("mouseleave", tip.hide);

	});

	$(document).on("click", "#planetary", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();

		var group = svgCapa.append("g")
					.attr("id", "capaGroup")
			 		.attr("width", 700)
			 		.attr("height",560)
			 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		var dom = svgCapa.append("g")
					 .attr("id", "capaDom")
			 		 .attr("width", 700)
			 		 .attr("height",560)
			 		 .attr("transform", "translate(440, 0)")
					 .append("foreignObject")
				     .attr("x", 0)
				     .attr("y", 0)
				     .attr("width", 700)
				     .attr("height", 560);

		
		htmlBody = dom.append("xhtml:body")
						 .style("font-size", "19px")
						 .attr("class", "cap-labels left");

		header = htmlBody.append("xhtml:h3")
						 .style("text-align", "center")
						 .style("padding-top", "20px")
						 .html("PLANETARY ASCENT PROPULSION");

		text = htmlBody.append("xhtml:p")
						   .html("Technical challenges are ranked medium because of past experience with lunar ascent engines and existing in-space propulsion systems provide a solid foundation for developing the technologies needed for Mars. In addition, new technologies are needed for long-term storage of cryogenic fuels. The capability gap is ranked medium because of the improvements needed to advance available technologies enough to provide the power needed ascent from Mars. Regulatory challenges are ranked low because no regulatory changes are needed. Cost and schedule challenges are ranked high because of the long time that will likely be required to develop the ability to store cryogenic fuel in-space for years at a time.");

		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Mars Ascent Vehicle")
					  .on("mouseenter", function(){
							         	tip.show({src: mav.src});
					  }).on("mouseleave", tip.hide);

			
			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 180)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Translational Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 190)
						.attr("y2", 190)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 220)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  .on("mouseenter", function(){
							         	tip.show({src: lm.src});
					  }).on("mouseleave", tip.hide);
	});
	
	$(document).on("click", "#eclss", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		var dom = svgCapa.append("g")
				 .attr("id", "capaDom")
		 		 .attr("width", 700)
		 		 .attr("height",560)
		 		 .attr("transform", "translate(440, 0)")
				 .append("foreignObject")
			     .attr("x", 0)
			     .attr("y", 0)
			     .attr("width", 700)
			     .attr("height", 560);

		htmlBody = dom.append("xhtml:body")
						 .style("font-size", "19px")
						 .attr("class", "cap-labels left");

		header = htmlBody.append("xhtml:h3")
						 .style("text-align", "center")
						 .style("padding-top", "20px")
						 .html("ENVIRONMENTAL CONTROL AND LIFE SUPPORT SYSTEM");

		text = htmlBody.append("xhtml:p")
						   .html("Technical challenges are ranked medium because ECLSS technologies and systems are already operational. The capability gap is ranked high because of the substantial improvements that are needed to extend the lifetime and increase the reliability of existing technologies and systems. Regulatory challenges are ranked low because no regulatory changes are needed. Cost and schedule challenges are ranked high because extraordinary resources and time would be needed develop and validate the performance of closed-loop ECLSS systems that will operate reliably over long time periods in space and on the surface of Mars.");
	
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "HIGH",
					color: "#b30000"
				}
			];

			var coodX = 10;
			var coodY = 300;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
		});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Advanced EVA")
				  .on("mouseenter", function(){
							         	tip.show({src: av.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Crew Command & Service Module")
				  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Pressurized Surface Mobility")
				  .on("mouseenter", function(){
							         	tip.show({src: psm.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 230)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Deep Space Habitation")
				  .on("mouseenter", function(){
							         	tip.show({src: dsh.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 260)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Long Duration Surface Habitat")
				  .on("mouseenter", function(){
							         	tip.show({src: ldsh.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 300)
				  .attr("fill", "orange")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Translational Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 280)
					.attr("y1", 310)
					.attr("y2", 310)
					.attr("stroke", "orange")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 340)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Orbital Outpost")
				  .on("mouseenter", function(){
							         	tip.show({src: lop.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 370)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Module")
				  .on("mouseenter", function(){
							         	tip.show({src: lm.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 410)
				  .attr("fill", "red")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Dead-end Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 420)
					.attr("y2", 420)
					.attr("stroke", "red")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 450)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Multi-year Deep Space Habitat")
				  .on("mouseenter", function(){
							         	tip.show({src: myd.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 480)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Space Exploration Vehicle")
				  .on("mouseenter", function(){
							         	tip.show({src: sev.src});
					  }).on("mouseleave", tip.hide);

	});

	$(document).on("click", "#habitats", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		var dom = svgCapa.append("g")
				 .attr("id", "capaDom")
		 		 .attr("width", 700)
		 		 .attr("height",560)
		 		 .attr("transform", "translate(440, 0)")
				 .append("foreignObject")
			     .attr("x", 0)
			     .attr("y", 0)
			     .attr("width", 700)
			     .attr("height", 560);

		htmlBody = dom.append("xhtml:body")
						 .style("font-size", "19px")
						 .attr("class", "cap-labels left");

		header = htmlBody.append("xhtml:h3")
						 .style("text-align", "center")
						 .style("padding-top", "20px")
						 .html("HABITATS");

		text = htmlBody.append("xhtml:p")
						   .html("Technical challenges are ranked medium because NASA has extensive experience in designing and building habitats in LEO, culminating with the ISS. The capability gap is ranked medium because substantial improvements are needed to extend the lifetime and increase the reliability of existing technologies and systems and to assure that habitat systems work as expected in the partial gravity of the Moon and/or Mars. Regulatory challenges are ranked low because no regulatory changes are needed. Cost and schedule challenges are ranked medium because substantial resources and time would be needed to upgrade and validate the performance of habitat systems that will operate reliably over long time periods in space and on the surface of Mars.");
	
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 350;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 110)
						.attr("y2", 110)
						.attr("stroke", "green")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 140)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Tele-robotic Rovers")
					  .on("mouseenter", function(){
								         	tip.show({src: trr.src});
						  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 170)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Crew Command & Service Module")
					  .on("mouseenter", function(){
								         	tip.show({src: ccs.src});
						  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 200)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Pressurized Surface Mobility")
					  .on("mouseenter", function(){
								         	tip.show({src: psm.src});
						  }).on("mouseleave", tip.hide);


			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 230)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Deep Space Habitation")
					  .on("mouseenter", function(){
								         	tip.show({src: dsh.src});
						  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 260)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Long Duration Surface Habitat")
					  .on("mouseenter", function(){
								         	tip.show({src: ldsh.src});
						  }).on("mouseleave", tip.hide);


			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 300)
					  .attr("fill", "orange")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Translational Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 280)
						.attr("y1", 310)
						.attr("y2", 310)
						.attr("stroke", "orange")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 340)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Orbital Outpost")
					  .on("mouseenter", function(){
								         	tip.show({src: lop.src});
						  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 370)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Lunar Module")
					  .on("mouseenter", function(){
								         	tip.show({src: lm.src});
						  }).on("mouseleave", tip.hide);


			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 410)
					  .attr("fill", "red")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Dead-end Mission Elements");

			groupExtra.append("line")
			 		    .attr("x1", 10)
						.attr("x2", 270)
						.attr("y1", 420)
						.attr("y2", 420)
						.attr("stroke", "red")
						.attr('stroke-width', '5px');

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 450)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Multi-year Deep Space Habitat")
					  .on("mouseenter", function(){
								         	tip.show({src: myd.src});
						  }).on("mouseleave", tip.hide);

			groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 480)
					  .style("font-size", 17)
					  .style('font-family', "sans-serif")
					  .text("Space Exploration Vehicle")
					  .on("mouseenter", function(){
								         	tip.show({src: sev.src});
						  }).on("mouseleave", tip.hide);

		
	});
	
	$(document).on("click", "#eva-suits", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		var dom = svgCapa.append("g")
				 .attr("id", "capaDom")
		 		 .attr("width", 700)
		 		 .attr("height",560)
		 		 .attr("transform", "translate(440, 0)")
				 .append("foreignObject")
			     .attr("x", 0)
			     .attr("y", 0)
			     .attr("width", 700)
			     .attr("height", 560);

		htmlBody = dom.append("xhtml:body")
						 .style("font-size", "19px")
						 .attr("class", "cap-labels left");

		header = htmlBody.append("xhtml:h3")
						 .style("text-align", "center")
						 .style("padding-top", "20px")
						 .html("EVA SUITS");

		text = htmlBody.append("xhtml:p")
						   .html("Technical challenges are ranked low because substantial research and experience with EVA suits in space and, to a lesser extent, on the surface of the Moon. The capability gap is ranked medium because of the advances needed to accommodate the long duration of a human mission to the Mars surface during transit and on the surface. Regulatory challenges are ranked low because no regulatory changes are needed. Cost and schedule challenges are ranked medium because substantial resources and time would be needed to close the capability gap.");
	
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 280;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Advanced EVA")
				  .on("mouseenter", function(){
							         	tip.show({src: av.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Crew Command & Service Module")
				  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Pressurized Surface Mobility")
				  .on("mouseenter", function(){
							         	tip.show({src: psm.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 230)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Deep Space Habitation")
				  .on("mouseenter", function(){
							         	tip.show({src: dsh.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 260)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Long Duration Surface Habitat")
				  .on("mouseenter", function(){
							         	tip.show({src: ldsh.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 300)
				  .attr("fill", "orange")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Translational Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 280)
					.attr("y1", 310)
					.attr("y2", 310)
					.attr("stroke", "orange")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 340)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Orbital Outpost")
				  .on("mouseenter", function(){
							         	tip.show({src: lop.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 370)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Module")
				  .on("mouseenter", function(){
							         	tip.show({src: lm.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 410)
				  .attr("fill", "red")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Dead-end Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 420)
					.attr("y2", 420)
					.attr("stroke", "red")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 450)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Multi-year Deep Space Habitat")
				  .on("mouseenter", function(){
							         	tip.show({src: myd.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 480)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Space Exploration Vehicle")
				  .on("mouseenter", function(){
							         	tip.show({src: sev.src});
					  }).on("mouseleave", tip.hide);
	});

	$(document).on("click", "#crew", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");


		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		var dom = svgCapa.append("g")
				 .attr("id", "capaDom")
		 		 .attr("width", 700)
		 		 .attr("height",560)
		 		 .attr("transform", "translate(440, 0)")
				 .append("foreignObject")
			     .attr("x", 0)
			     .attr("y", 0)
			     .attr("width", 700)
			     .attr("height", 560);

		htmlBody = dom.append("xhtml:body")
						 .style("font-size", "19px")
						 .attr("class", "cap-labels left");

		header = htmlBody.append("xhtml:h3")
						 .style("text-align", "center")
						 .style("padding-top", "20px")
						 .html("CREW HEALTH");

		text = htmlBody.append("xhtml:p")
						   .html("Technical challenges are ranked medium because final solutions to many physiological and psychosocial threats to crew health have yet to be identified. The capability gap is ranked medium because solutions to some issues are rather well defined, but others still require substantial research. Regulatory challenges are ranked medium because new standards may be needed as research into physiological and psychosocial issues continues, particularly given the results of a recent report on ethical issues associated with HSF.81 Cost and schedule challenges are ranked medium because substantial resources and time would be needed to overcome the technical and regulatory challenges and to close the capability gap.");
	
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "MEDIUM",
					color: "#FFDE00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
			});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Advanced EVA")
				  .on("mouseenter", function(){
							         	tip.show({src: av.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Crew Command & Service Module")
				  .on("mouseenter", function(){
							         	tip.show({src: ccs.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Pressurized Surface Mobility")
				  .on("mouseenter", function(){
							         	tip.show({src: psm.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 230)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Deep Space Habitation")
				  .on("mouseenter", function(){
							         	tip.show({src: dsh.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 260)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Long Duration Surface Habitat")
				  .on("mouseenter", function(){
							         	tip.show({src: ldsh.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 300)
				  .attr("fill", "orange")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Translational Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 280)
					.attr("y1", 310)
					.attr("y2", 310)
					.attr("stroke", "orange")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 340)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Orbital Outpost")
				  .on("mouseenter", function(){
							         	tip.show({src: lop.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 370)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Lunar Module")
				  .on("mouseenter", function(){
							         	tip.show({src: lm.src});
					  }).on("mouseleave", tip.hide);


		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 410)
				  .attr("fill", "red")
				  .style("font-size", 18)
				  .style('font-family', "sans-serif")
				  .text("Dead-end Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 420)
					.attr("y2", 420)
					.attr("stroke", "red")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 450)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Multi-year Deep Space Habitat")
				  .on("mouseenter", function(){
							         	tip.show({src: myd.src});
					  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 480)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Space Exploration Vehicle")
				  .on("mouseenter", function(){
							         	tip.show({src: sev.src});
					  }).on("mouseleave", tip.hide);
	});
	
	$(document).on("click", "#isru", function(event){

		event.preventDefault();

		$("#capaGroup").remove();
		$("#capaGroupExtra").remove();
		$("#capaDom").remove();

		var group = svgCapa.append("g")
				.attr("id", "capaGroup")
		 		.attr("width", 700)
		 		.attr("height",560)
		 		.attr("transform", "translate(440, 0)");

		var groupExtra = svgCapa.append("g")
						.attr("id", "capaGroupExtra")
				 		.attr("width", 300)
				 		.attr("height",560)
				 		.attr("transform", "translate(1150, 0)");

		var dom = svgCapa.append("g")
				 .attr("id", "capaDom")
		 		 .attr("width", 700)
		 		 .attr("height",560)
		 		 .attr("transform", "translate(440, 0)")
				 .append("foreignObject")
			     .attr("x", 0)
			     .attr("y", 0)
			     .attr("width", 700)
			     .attr("height", 560);

		htmlBody = dom.append("xhtml:body")
						 .style("font-size", "19px")
						 .attr("class", "cap-labels left");

		header = htmlBody.append("xhtml:h3")
						 .style("text-align", "center")
						 .style("padding-top", "20px")
						 .html("IN SITU RESOURCE UTILIZATION (MARS ATMOSPHERE)");

		text = htmlBody.append("xhtml:p")
						   .html("Technical challenges are ranked low because technologies to achieve the ISRU capabilities described above have been demonstrated on Earth. The capability gap is ranked high because there is a large gap between the capabilities of the small-scale experiments completed to date and the development of a full-scale operational system capable of reliable operation during long-term exposure to the partial gravity, dust, atmosphere, and radiation environment found on the surface of Mars. Regulatory challenges are ranked low because no regulatory changes are needed. Cost and schedule challenges are ranked medium because substantial resources and time would be needed to close the capability gap.");
		
		var rect = [

				{
					textTopOne: "TECHNICAL",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "CAPABILITY",
					textTopTwo: "GAP",
					textTopThree: "",
					textBot: "HIGH",
					color: "#b30000"
				},

				{
					textTopOne: "REGULATORY",
					textTopTwo: "CHALLENGES",
					textTopThree: "",
					textBot: "LOW",
					color: "#00FF00"
				},

				{
					textTopOne: "COST &",
					textTopTwo: "SCHEDULE",
					textTopThree: "CHALLENGES",
					textBot: "MEDIUM",
					color: "#FFDE00"
				}
			];

			var coodX = 10;
			var coodY = 330;

			rect.forEach(function(r){

				var rectT = group.append("rect")
							.attr("x", coodX)
							.attr("y", coodY)
							.attr("height", 150)
							.attr("width", 150)
							.attr("fill", r.color)
							.style("opacity", "0.85");

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+20)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopOne);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+40)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopTwo);

				group.append("text")
					 .attr("x", coodX+10)
					 .attr("y", coodY+60)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textTopThree);

				group.append("text")
					 .attr("x", coodX+50)
					 .attr("y", coodY+130)
					 .style("font-family", 'sans-serif')
					 .attr("fill", 'white')
					 .text(r.textBot);

				coodX+=170;
		});

		groupExtra.append("text")
					  .attr("x", 20)
					  .attr("y", 100)
					  .attr("fill", "green")
					  .style("font-size", 18)
					  .style('font-family', "sans-serif")
					  .text("Primary Mission Elements");

		groupExtra.append("line")
		 		    .attr("x1", 10)
					.attr("x2", 270)
					.attr("y1", 110)
					.attr("y2", 110)
					.attr("stroke", "green")
					.attr('stroke-width', '5px');

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 140)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Tele-robotic Rovers")
				  .on("mouseenter", function(){
							        tip.show({src: trr.src});
				  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 170)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Surface Nuclear Power")
				  .on("mouseenter", function(){
							        tip.show({src: snp.src});
				  }).on("mouseleave", tip.hide);

		groupExtra.append("text")
				  .attr("x", 20)
				  .attr("y", 200)
				  .style("font-size", 17)
				  .style('font-family', "sans-serif")
				  .text("Mars Ascent Vehicle")
				  .on("mouseenter", function(){
							        tip.show({src: mav.src});
				  }).on("mouseleave", tip.hide);

	});
});