loadEnhanced = function(){


			var svg = d3.select(".canvas")
						.append("svg")
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
			   .attr("x", 30)
			   .attr("y", 90)
			   .text("ENHANCED");

			svg.append("text")
			   .attr("class", "header")
			   .attr("x", 30)
			   .attr("y", 110)
			   .text("EXPLORATION");

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
				.attr("stroke-width", "5");


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
				.attr("stroke-width", "5");

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
				.attr("stroke-width", "5");


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
		  };
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