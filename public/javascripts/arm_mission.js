loadARM = function(){

			var svg = d3.select(".canvas")
						.append("svg")
						.attr("height", 930)
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
						textOne: {x: 60, y:200, text: "ARM", height: 150},
					},

					{

						plus: {x: 60, y: 280, text: "+"},
						textOne: {x: 60, y: 350, text: "MARTIAN", height: 330},
						textTwo: {x: 60, y: 380, text: "MOONS"}

					},

					{

						plus: {x: 60, y: 460, text: "+"},
						textOne: {x: 60, y: 530, text: "MARS", height: 510},
						textTwo: {x: 60, y: 560, text: "SURFACE"}

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

				// DIAGRAMS

			 var patternInfo = [
			  		 				{
	  		 							id: "arv"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: arv.src, 
	  		 							x: 210 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "myd"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: myd.src, 
	  		 							x: 260 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "lss"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: lss.src, 
	  		 							x: 310 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "mot"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: mot.src, 
	  		 							x: 350 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "sev"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: sev.src, 
	  		 							x: 410 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "cps"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: cps.src, 
	  		 							x: 500 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "lm"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: lm.src, 
	  		 							x: 550 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "lop"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: lop.src, 
	  		 							x: 630 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 40,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "hll"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: hll.src, 
	  		 							x: 710 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 60
			  		 				},

			  		 				{
	  		 							id: "ap"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: ap.src, 
	  		 							x: 740 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "trr"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: trr.src, 
	  		 							x: 770 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 55,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "snp"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: snp.src, 
	  		 							x: 820 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "av"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: av.src, 
	  		 							x: 860 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 40,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "psm"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: psm.src, 
	  		 							x: 905 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "aas"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: aas.src, 
	  		 							x: 950 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 35,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "ccs"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: ccs.src, 
	  		 							x: 985 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 50,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "dsh"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: dsh.src, 
	  		 							x: 1035 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 50,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "ldsh"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: ldsh.src, 
	  		 							x: 1090 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 35,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "mav"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: mav.src, 
	  		 							x: 1125 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 35,
	  		 							sizeH: 70
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
						   .attr("width", pattern.sizeW)
						   .attr("height", pattern.sizeH)
						   .attr("xlink:href", pattern.link)
						   .attr('x', pattern.x)
		                   .attr('y', pattern.y);

		  		 });

		  rectInfo = [
	  					{
					  		 	x: 210,
					  		 	y: text.textOne.height,
					  		 	id: "arvRect"+count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#arv" + count + ")",
					  		 	info: "<b><u>ASTERIOD RETRIEVAL VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>"
						},

						{
					  		 	x: 260,
					  		 	y: text.textOne.height,
					  		 	id: "mydRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#myd" + count + ")",
					  		 	info: "<b><u>MULTI-YEAR DEEP SPACE HABITAT</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>"
						},

						{
					  		 	x: 300,
					  		 	y: text.textOne.height,
					  		 	id: "lssRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#lss" + count + ")",
					  		 	info: "<b><u>LARGE STORAGE STAGE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 360,
					  		 	y: text.textOne.height,
					  		 	id: "motRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#mot" + count + ")",
					  		 	info: "<b><u>MARS ORBIT TRANSFER VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>"
						},

						{
					  		 	x: 420,
					  		 	y: text.textOne.height,
					  		 	id: "sevRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#sev" + count + ")",
					  		 	info: "<b><u>SPACE EXPLORATION VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>, <span style='color:purple'>Asteroid In Native Orbit</span>"
						}, 

						{
					  		 	x: 500,
					  		 	y: text.textOne.height,
					  		 	id: "cpsRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#cps" + count + ")",
					  		 	info: "<b><u>CRYOGENIC PROPULSION SYSTEM</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Asteroid In Native Orbit</span>"
						}, 

						{
					  		 	x: 550,
					  		 	y: text.textOne.height,
					  		 	id: "lmRect" + count,
					  		 	width: 40,
					  		 	height: 100,
					  		 	fill: "url(#lm" + count + ")",
					  		 	info: "<b><u>LUNAR MODULE</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>"
						},

						{
					  		 	x: 630,
					  		 	y: text.textOne.height,
					  		 	id: "lopRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#lop" + count + ")",
					  		 	info: "<b><u>LUNAR ORBITAL OUTPOST</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>"
						},

						{
					  		 	x: 710,
					  		 	y: text.textOne.height,
					  		 	id: "hllRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#hll" + count + ")",
					  		 	info: "<b><u>HEAVY LIFT LAUNCH VEHICLE</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 740,
					  		 	y: text.textOne.height,
					  		 	id: "apRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#ap" + count + ")",
					  		 	info: "<b><u>ADVANCED PROPULSION</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>, Mars Surface"
						},

						{
					  		 	x: 770,
					  		 	y: text.textOne.height,
					  		 	id: "trrRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#trr" + count + ")",
					  		 	info: "<b><u>TELE-ROBOTIC ROVERS</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Outpost</span>, Mars Surface"
						},

						{
					  		 	x: 820,
					  		 	y: text.textOne.height,
					  		 	id: "snpRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#snp" + count + ")",
					  		 	info: "<b><u>SURFACE NUCLEAR POWER</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Outpost</span>, Mars Surface"
						},

						{
					  		 	x: 860,
					  		 	y: text.textOne.height,
					  		 	id: "avRect" + count,
					  		 	width: 40,
					  		 	height: 100,
					  		 	fill: "url(#av" + count + ")",
					  		 	info: "<b><u>ADVANCED EVA</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 895,
					  		 	y: text.textOne.height,
					  		 	id: "psmRect" + count,
					  		 	width: 50,
					  		 	height: 100,
					  		 	fill: "url(#psm" + count + ")",
					  		 	info: "<b><u>PRESSURIZED SURFACE MOBILITY</u></b><br><br> <b>Required for:</b> <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 950,
					  		 	y: text.textOne.height,
					  		 	id: "aasRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#aas" + count + ")",
					  		 	info: "<b><u>AEROASSIST SYSTEM</u></b><br><br> <b>Required for:</b> Mars Surface"
						},

						{
					  		 	x: 985,
					  		 	y: text.textOne.height,
					  		 	id: "ccsRect" + count,
					  		 	width: 40,
					  		 	height: 100,
					  		 	fill: "url(#ccs" + count + ")",
					  		 	info: "<b><u>CREW COMMAND & SERVICE MODULE (ORION):</u></b><br><br> <b>Required for:</b> <span style='color:orange'>ARM</span>, <span style='color:orange'>Martian Moons</span>, <span style='color:#0099FF'>Lunar Sortie</span>, <span style='color:#0099FF'>Lunar Outpost</span>, <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 1035,
					  		 	y: text.textOne.height,
					  		 	id: "dshRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#dsh" + count + ")",
					  		 	info: "<b><u>DEEP SPACE HABITATION:</u></b><br><br> <b>Required for:</b> <span style='color:purple'>Earth-Moon L2</span>, <span style='color:purple'>Asteroid in Native Orbit</span>, Mars Surface"
						},

						{
					  		 	x: 1090,
					  		 	y: text.textOne.height,
					  		 	id: "ldshRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#ldsh" + count + ")",
					  		 	info: "<b><u>LONG DURATION SURFACE HABITAT:</u></b><br><br> <b>Required for:</b> <span style='color:#0099FF'>Lunar Outpost</span>, Mars Surface"
						},

						{
					  		 	x: 1125,
					  		 	y: text.textOne.height,
					  		 	id: "mavRect" + count,
					  		 	width: 30,
					  		 	height: 100,
					  		 	fill: "url(#mav" + count + ")",
					  		 	info: "<b><u>MARS ASCENT VEHICLE</u></b><br><br> <b>Required for:</b> Mars Surface"
						}


		  ];

		  rectInfo.forEach(function(rect){
		  			svg.append("rect")
		  			   .attr("id",rect.id)
		  			   .attr("x", rect.x)
		  			   .attr("y", rect.y)
		  			   .attr("width", rect.width)
		  			   .attr("height", rect.height)
		  			   .attr("fill", rect.fill)
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
$("#dshRect1").attr("opacity", "0.2");
$("#ldshRect1").attr("opacity", "0.2");
$("#mavRect1").attr("opacity", "0.2");

// ROW TWO

$("#arvRect2").attr("opacity", "0.2");
$("#lssRect2").attr("opacity", "0.2");

$("#cpsRect2").attr("opacity", "0.2");
$("#lmRect2").attr("opacity", "0.2");
$("#lopRect2").attr("opacity", "0.2");

$("#trrRect2").attr("opacity", "0.2");
$("#snpRect2").attr("opacity", "0.2");
$("#psmRect2").attr("opacity", "0.2");
$("#aasRect2").attr("opacity", "0.2");
$("#dshRect2").attr("opacity", "0.2");
$("#ldshRect2").attr("opacity", "0.2");
$("#mavRect2").attr("opacity", "0.2");



// ROW THREE

$("#arvRect3").attr("opacity", "0.2");
$("#mydRect3").attr("opacity", "0.2");
$("#lssRect3").attr("opacity", "0.2");
$("#motRect3").attr("opacity", "0.2");
$("#sevRect3").attr("opacity", "0.2");

$("#cpsRect3").attr("opacity", "0.2");
$("#lmRect3").attr("opacity", "0.2");
$("#lopRect3").attr("opacity", "0.2");






// BOTTOM TEXT
svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 600)
	.attr("transform", "rotate(90 215,600)")
	.text("ASTERIOD RETRIEVAL VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 550)
	.attr("transform", "rotate(90 215,600)")
	.text("MULTI-YEAR DEEP SPACE HABITAT");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 500)
	.attr("transform", "rotate(90 215,600)")
	.text("LARGE STORAGE STAGE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 450)
	.attr("transform", "rotate(90 215,600)")
	.text("MARS ORBIT TRANSFER VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 400)
	.attr("transform", "rotate(90 215,600)")
	.text("SPACE EXPLORATION VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 310)
	.attr("transform", "rotate(90 215,600)")
	.text("CRYOGENIC PROPULSION SYSTEM");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 250)
	.attr("transform", "rotate(90 215,600)")
	.text("LUNAR MODULE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 180)
	.attr("transform", "rotate(90 215,600)")
	.text("LUNAR ORBITAL OUTPOST");


svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 100)
	.attr("transform", "rotate(90 215,600)")
	.text("HEAVY LIFT LAUNCH VEHICLE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 70)
	.attr("transform", "rotate(90 215,600)")
	.text("ADVANCED PROPULSION");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", 20)
	.attr("transform", "rotate(90 215,600)")
	.text("TELE-ROBOTIC ROVERS");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -20)
	.attr("transform", "rotate(90 215,600)")
	.text("SURFACE NUCLEAR POWER");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -70)
	.attr("transform", "rotate(90 215,600)")
	.text("ADVANCED EVA");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -110)
	.attr("transform", "rotate(90 215,600)")
	.text("PRESSURIZED SURFACE MOBILITY");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -150)
	.attr("transform", "rotate(90 215,600)")
	.text("AERO ASSIT SYSTEM");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -190)
	.attr("transform", "rotate(90 215,600)")
	.text("CREW COMMAND AND SERVICE MODULE");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -240)
	.attr("transform", "rotate(90 215,600)")
	.text("DEEP SPACE HABITATION");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -280)
	.attr("transform", "rotate(90 215,600)")
	.text("LONG DURATION SURFACE HABITAT");

svg.append("text")
	.attr("class", 'bottom')
	.attr("x", 215)
	.attr("y", -320)
	.attr("transform", "rotate(90 215,600)")
	.text("MARS ASCENT VEHICLE");
		
};