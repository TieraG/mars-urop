loadEnhanced = function(){

			var svg = d3.select(".canvas")
						.append("svg")
						.attr("id", "svg")
						.attr("height", 1430)
						.attr("width", 1200)
						.attr("id", "arm_mission");

			var tip = d3.tip()
			 			 .attr("class", "d3_tip")
			 			 .offset([-20, 40])
			 			 .direction("sw")
			 			 .html(function(d){
			 			 	return "<p>" + d.info + "<p>";
			 			 });

			svg.call(tip);


			// ARM LABEL

			svg.append("text")
			   .attr("class", "header")
			   .attr("x", 60)
			   .attr("y", 90)
			   .text("ARM");

			svg.append("text")
			   .attr("class", "header")
			   .attr("x", 40)
			   .attr("y", 110)
			   .text("TO MARS");

			svg.append("line")
				.attr("x1", 30)
				.attr("y1", 120)
				.attr("x2", 150)
				.attr("y2", 120)
				.attr("stroke", "grey")
				.attr("stroke-width", "5")



			// DEAD-END
			
			svg.append("text")
			   .attr("class", "header")
			   .style("fill", "red")
			   .attr("x", 260)
			   .attr("y", 90)
			   .text("DEAD-END");

			svg.append("text")
			   .attr("class", "header")
			   .style("fill", "red")
			   .attr("x", 240)
			   .attr("y", 110)
			   .text("MISSION ELEMENTS");

			svg.append("line")
				.attr("x1", 230)
				.attr("y1", 120)
				.attr("x2", 440)
				.attr("y2", 120)
				.attr("stroke", "red")
				.attr("stroke-width", "5")


			// TRANSLATIONAL
			
			svg.append("text")
			   .attr("class", "header")
			   .style("fill", "orange")
			   .attr("x", 520)
			   .attr("y", 90)
			   .text("TRANSLATIONAL");

			svg.append("text")
			   .attr("class", "header")
			   .style("fill", "orange")
			   .attr("x", 500)
			   .attr("y", 110)
			   .text("MISSION ELEMENTS");

			svg.append("line")
				.attr("x1", 480)
				.attr("y1", 120)
				.attr("x2", 680)
				.attr("y2", 120)
				.attr("stroke", "orange")
				.attr("stroke-width", "5")

			// PRIMARY
			
			svg.append("text")
			   .attr("class", "header")
			   .style("fill", "green")
			   .attr("x", 780)
			   .attr("y", 110)
			   .text("PRIMARY");

			svg.append("text")
			   .attr("class", "header")
			   .style("fill", "green")
			   .attr("x", 860)
			   .attr("y", 110)
			   .text("MISSION ELEMENTS");

			svg.append("line")
				.attr("x1", 720)
				.attr("y1", 120)
				.attr("x2", 1150)
				.attr("y2", 120)
				.attr("stroke", "green")
				.attr("stroke-width", "5")


			var texts = [

					{
						textOne: {x: 60, y:200, text: "EARTH-", height: 150},
						textTwo: {x: 60, y: 230, text: "MOON L2"}

					},

					{

						plus: {x: 60, y: 280, text: "+"},
						textOne: {x: 60, y: 350, text: "ASTERIOD IN", height: 330},
						textTwo: {x: 60, y: 380, text: "NATIVE ORBIT"}

					},

					{

						plus: {x: 60, y: 460, text: "+"},
						textOne: {x: 60, y: 530, text: "LUNAR", height: 510},
						textTwo: {x: 60, y: 560, text: "SORTIE"}

					},

					{

						plus: {x: 60, y: 640, text: "+"},
						textOne: {x: 60, y: 710, text: "LUNAR", height: 690},
						textTwo: {x: 60, y: 740, text: "OUTPOST"}

					},

					{

						plus: {x: 60, y: 820, text: "+"},
						textOne: {x: 60, y: 890, text: "MARTIAN", height: 870},
						textTwo: {x: 60, y: 920, text: "MOONS"}

					},

					{

						plus: {x: 60, y: 1000, text: "+"},
						textOne: {x: 60, y: 1070, text: "MARS", height: 1050},
						textTwo: {x: 60, y: 1100, text: "SURFACE"}

					}
			];

		var patternInfo = [
			  		 				{
	  		 							id: "arv", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: arv.src, 
	  		 							x: 210 , 
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "myd", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: myd.src, 
	  		 							x: 260 , 
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "lss", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: lss.src, 
	  		 							x: 310 , 
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "mot", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: mot.src, 
	  		 							x: 350 , 
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "sev", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: sev.src, 
	  		 							x: 410 , 
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "cps", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: cps.src, 
	  		 							x: 500 , 
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "lm", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: lm.src, 
	  		 							x: 550 , 
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "lop", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: lop.src, 
	  		 							x: 630 , 
	  		 							sizeW: 40,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "hll", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: hll.src, 
	  		 							x: 710 , 
	  		 							sizeW: 30,
	  		 							sizeH: 60
			  		 				},

			  		 				{
	  		 							id: "ap", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: ap.src, 
	  		 							x: 740 , 
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "trr", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: trr.src, 
	  		 							x: 770 , 
	  		 							sizeW: 55,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "snp", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: snp.src, 
	  		 							x: 820 , 
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "av", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: av.src, 
	  		 							x: 860 , 
	  		 							sizeW: 40,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "psm", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: psm.src, 
	  		 							x: 905 , 
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "aas", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: aas.src, 
	  		 							x: 950 , 
	  		 							sizeW: 35,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "ccs", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: ccs.src, 
	  		 							x: 985 , 
	  		 							sizeW: 50,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "dsh", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: dsh.src, 
	  		 							x: 1035 , 
	  		 							sizeW: 50,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "ldsh", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: ldsh.src, 
	  		 							x: 1090 , 
	  		 							sizeW: 35,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "mav", 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: mav.src, 
	  		 							x: 1125 , 
	  		 							sizeW: 35,
	  		 							sizeH: 70
			  		 				}



			 ];

		rectInfo = [
	  					{
					  		 	x: 210,
					  		 	id: "arvRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#arv",
					  		 	info: "<b><u>ASTERIOD RETRIEVAL VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>"
						},

						{
					  		 	x: 260,
					  		 	id: "mydRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#myd",
					  		 	info: "<b><u>MULTI-YEAR DEEP SPACE HABITAT</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>"
						},

						{
					  		 	x: 300,
					  		 	id: "lssRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#lss",
					  		 	info: "<b><u>LARGE STORAGE STAGE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 360,
					  		 	id: "motRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#mot",
					  		 	info: "<b><u>MARS ORBIT TRANSFER VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>"
						},

						{
					  		 	x: 420,
					  		 	id: "sevRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#sev",
					  		 	info: "<b><u>SPACE EXPLORATION VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>, <span style='color:purple'>Asteroid In Native Orbit</span>"
						}, 

						{
					  		 	x: 500,
					  		 	id: "cpsRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#cps",
					  		 	info: "<b><u>CRYOGENIC PROPULSION SYSTEM</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Asteroid In Native Orbit</span>"
						}, 

						{
					  		 	x: 550,
					  		 	id: "lmRect",
					  		 	width: 40,
					  		 	height: 100,
					  		 	fill: "url(#lm",
					  		 	info: "<b><u>LUNAR MODULE</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>"
						},

						{
					  		 	x: 630,
					  		 	id: "lopRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#lop",
					  		 	info: "<b><u>LUNAR ORBITAL OUTPOST</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>"
						},

						{
					  		 	x: 710,
					  		 	id: "hllRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#hll",
					  		 	info: "<b><u>HEAVY LIFT LAUNCH VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 740,
					  		 	id: "apRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#ap",
					  		 	info: "<b><u>ADVANCED PROPULSION</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>, Mars Surface"
						},

						{
					  		 	x: 770,
					  		 	id: "trrRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#trr",
					  		 	info: "<b><u>TELE-ROBOTIC ROVERS</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Outpost</span>, Mars Surface"
						},

						{
					  		 	x: 820,
					  		 	id: "snpRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#snp",
					  		 	info: "<b><u>SURFACE NUCLEAR POWER</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Outpost</span>, Mars Surface"
						},

						{
					  		 	x: 860,
					  		 	id: "avRect",
					  		 	width: 40,
					  		 	height: 100,
					  		 	fill: "url(#av",
					  		 	info: "<b><u>ADVANCED EVA</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 895,
					  		 	id: "psmRect",
					  		 	width: 50,
					  		 	height: 100,
					  		 	fill: "url(#psm",
					  		 	info: "<b><u>PRESSURIZED SURFACE MOBILITY</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 950,
					  		 	id: "aasRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#aas",
					  		 	info: "<b><u>AEROASSIST SYSTEM</u></b><br><br> <b>Required for:</b> Mars Surface"
						},

						{
					  		 	x: 985,
					  		 	id: "ccsRect",
					  		 	width: 50,
					  		 	height: 100,
					  		 	fill: "url(#ccs",
					  		 	info: "<b><u>CREW COMMAND & SERVICE MODULE (ORION):</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 1035,
					  		 	id: "dshRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#dsh",
					  		 	info: "<b><u>DEEP SPACE HABITATION:</u></b><br><br> <b>Required for:</b> <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 1090,
					  		 	id: "ldshRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#ldsh",
					  		 	info: "<b><u>LONG DURATION SURFACE HABITAT:</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Outpost</span>, Mars Surface"
						},

						{
					  		 	x: 1125,
					  		 	id: "mavRect",
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#mav",
					  		 	info: "<b><u>MARS ASCENT VEHICLE</u></b><br><br> <b>Required for:</b> Mars Surface"
						}


		  ];

		var count = 1;

		texts.forEach(function(text){

				svg.append("text")
				   .attr("class", "label")
				   .attr("x", text.textOne.x)
				   .attr("y", text.textOne.y)
				   .text(text.textOne.text);

				if (text.textTwo) {
					svg.append("text")
					   .attr("class", "label")
					   .attr("x", text.textTwo.x)
					   .attr("y", text.textTwo.y)
					   .text(text.textTwo.text);
				}

				if (text.plus) {
					svg.append("text")
					   .attr("class", "label")
					   .attr("x", text.plus.x)
					   .attr("y", text.plus.y)
					   .text(text.plus.text);
				}



		patternInfo.forEach(function(pattern){

			  		 svg.append("defs")
						   .append("pattern")
						   .attr("id", pattern.id+count)
						   .attr('patternUnits', 'userSpaceOnUse')
						   .attr("width", pattern.width)
						   .attr("height", pattern.height)
						   .append("image")
						   .attr("width", pattern.sizeW)
						   .attr("height", pattern.sizeH)
						   .attr("xlink:href", pattern.link)
						   .attr('x', pattern.x)
		                   .attr('y', text.textOne.height);

		  		 });

		  rectInfo.forEach(function(rect){
		  			svg.append("rect")
		  			   .attr("id",rect.id + count)
		  			   .attr("x", rect.x)
		  			   .attr("y", text.textOne.height)
		  			   .attr("width", rect.width)
		  			   .attr("height", rect.height)
		  			   .attr("fill", rect.fill + count + ")")
		  			   .on("mouseenter", function(){
					         	tip.show(rect);
					   })
					   .on("mouseleave", tip.hide);
		  });

		  count+=1

		  if (text.plus){
			  	svg.append("line")
					.attr("x1", 210)
					.attr("y1", text.plus.y)
					.attr("x2", 1150)
					.attr("y2", text.plus.y)
					.attr("stroke", "grey")
					.attr("stroke-width", "3")
		  }


});



// SETTING OPACITY TO 0.3

// ROW ONE

$("#arvRect1").attr("opacity", "0.2");
$("#mydRect1").attr("opacity", "0.2");
$("#lssRect1").attr("opacity", "0.2");
$("#motRect1").attr("opacity", "0.2");
$("#sevRect1").attr("opacity", "0.2");

$("#cpsRect1").attr("opacity", "0.2");
$("#lmRect1").attr("opacity", "0.2");
$("#lopRect1").attr("opacity", "0.2");


$("#apRect1").attr("opacity", "0.2");
$("#trrRect1").attr("opacity", "0.2");
$("#snpRect1").attr("opacity", "0.2");
$("#aasRect1").attr("opacity", "0.2");
$("#psmRect1").attr("opacity", "0.2");
$("#ldshRect1").attr("opacity", "0.2");
$("#mavRect1").attr("opacity", "0.2");

// ROW TWO

$("#arvRect2").attr("opacity", "0.2");
$("#mydRect2").attr("opacity", "0.2");
$("#motRect2").attr("opacity", "0.2");
$("#lssRect2").attr("opacity", "0.2");


$("#lmRect2").attr("opacity", "0.2");
$("#lopRect2").attr("opacity", "0.2");


$("#apRect2").attr("opacity", "0.2");
$("#trrRect2").attr("opacity", "0.2");
$("#snpRect2").attr("opacity", "0.2");
$("#aasRect2").attr("opacity", "0.2");
$("#psmRect2").attr("opacity", "0.2");
$("#ldshRect2").attr("opacity", "0.2");
$("#mavRect2").attr("opacity", "0.2");



// ROW THREE

$("#arvRect3").attr("opacity", "0.2");
$("#mydRect3").attr("opacity", "0.2");
$("#motRect3").attr("opacity", "0.2");
$("#sevRect3").attr("opacity", "0.2");


$("#apRect3").attr("opacity", "0.2");
$("#trrRect3").attr("opacity", "0.2");
$("#snpRect3").attr("opacity", "0.2");
$("#aasRect3").attr("opacity", "0.2");
$("#dshRect3").attr("opacity", "0.2");
$("#ldshRect3").attr("opacity", "0.2");
$("#mavRect3").attr("opacity", "0.2");


// ROW FOUR

$("#arvRect4").attr("opacity", "0.2");
$("#mydRect4").attr("opacity", "0.2");
$("#motRect4").attr("opacity", "0.2");
$("#sevRect4").attr("opacity", "0.2");

$("#apRect4").attr("opacity", "0.2");
$("#aasRect4").attr("opacity", "0.2");
$("#dshRect4").attr("opacity", "0.2");
$("#mavRect4").attr("opacity", "0.2");

// ROW FIVE

$("#arvRect5").attr("opacity", "0.2");
$("#lssRect5").attr("opacity", "0.2");

$("#cpsRect5").attr("opacity", "0.2");
$("#lmRect5").attr("opacity", "0.2");
$("#lopRect5").attr("opacity", "0.2");

$("#trrRect5").attr("opacity", "0.2");
$("#snpRect5").attr("opacity", "0.2");
$("#psmRect5").attr("opacity", "0.2");
$("#aasRect5").attr("opacity", "0.2");
$("#dshRect5").attr("opacity", "0.2");
$("#ldshRect5").attr("opacity", "0.2");
$("#mavRect5").attr("opacity", "0.2");

// ROW SIX

$("#arvRect6").attr("opacity", "0.2");
$("#mydRect6").attr("opacity", "0.2");
$("#lssRect6").attr("opacity", "0.2");
$("#motRect6").attr("opacity", "0.2");
$("#sevRect6").attr("opacity", "0.2");

$("#cpsRect6").attr("opacity", "0.2");
$("#lmRect6").attr("opacity", "0.2");
$("#lopRect6").attr("opacity", "0.2");



// BOTTOM TEXT
svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 600)
	.attr("transform", "rotate(90 215,600)")
	.text("ASTERIOD RETRIEVAL VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 550)
	.attr("transform", "rotate(90 215,600)")
	.text("MULTI-YEAR DEEP SPACE HABITAT");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 500)
	.attr("transform", "rotate(90 215,600)")
	.text("LARGE STORAGE STAGE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 450)
	.attr("transform", "rotate(90 215,600)")
	.text("MARS ORBIT TRANSFER VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 400)
	.attr("transform", "rotate(90 215,600)")
	.text("SPACE EXPLORATION VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 310)
	.attr("transform", "rotate(90 215,600)")
	.text("CRYOGENIC PROPULSION SYSTEM");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 250)
	.attr("transform", "rotate(90 215,600)")
	.text("LUNAR MODULE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 180)
	.attr("transform", "rotate(90 215,600)")
	.text("LUNAR ORBITAL OUTPOST");


svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 100)
	.attr("transform", "rotate(90 215,600)")
	.text("HEAVY LIFT LAUNCH VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 70)
	.attr("transform", "rotate(90 215,600)")
	.text("ADVANCED PROPULSION");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", 20)
	.attr("transform", "rotate(90 215,600)")
	.text("TELE-ROBOTIC ROVERS");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -20)
	.attr("transform", "rotate(90 215,600)")
	.text("SURFACE NUCLEAR POWER");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -70)
	.attr("transform", "rotate(90 215,600)")
	.text("ADVANCED EVA");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -110)
	.attr("transform", "rotate(90 215,600)")
	.text("PRESSURIZED SURFACE MOBILITY");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -150)
	.attr("transform", "rotate(90 215,600)")
	.text("AERO ASSIT SYSTEM");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -190)
	.attr("transform", "rotate(90 215,600)")
	.text("CREW COMMAND AND SERVICE MODULE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -240)
	.attr("transform", "rotate(90 215,600)")
	.text("DEEP SPACE HABITATION");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -280)
	.attr("transform", "rotate(90 215,600)")
	.text("LONG DURATION SURFACE HABITAT");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 750)
	.attr("y", -320)
	.attr("transform", "rotate(90 215,600)")
	.text("MARS ASCENT VEHICLE");
		
};