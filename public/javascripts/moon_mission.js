loadMoonToMars = function(){


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
			   .attr("x", 55)
			   .attr("y", 90)
			   .text("MOON");

			svg.append("text")
			   .attr("class", "header")
			   .attr("x", 50)
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
					textOne: {x: 60, y:200, text: "LUNAR", height: 150},
					textTwo: {x: 60, y: 230, text: "SORTIE"}

				},

				{

					plus: {x: 60, y: 280, text: "+"},
					textOne: {x: 60, y: 350, text: "LUNAR", height: 330},
					textTwo: {x: 60, y: 380, text: "OUTPOST"}

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
$("#motRect1").attr("opacity", "0.2");
$("#sevRect1").attr("opacity", "0.2");


$("#apRect1").attr("opacity", "0.2");
$("#trrRect1").attr("opacity", "0.2");
$("#snpRect1").attr("opacity", "0.2");
$("#aasRect1").attr("opacity", "0.2");
$("#dshRect1").attr("opacity", "0.2");
$("#ldshRect1").attr("opacity", "0.2");
$("#mavRect1").attr("opacity", "0.2");

// ROW TWO

$("#arvRect2").attr("opacity", "0.2");
$("#mydRect2").attr("opacity", "0.2");
$("#motRect2").attr("opacity", "0.2");
$("#sevRect2").attr("opacity", "0.2");

$("#apRect2").attr("opacity", "0.2");
$("#aasRect2").attr("opacity", "0.2");
$("#dshRect2").attr("opacity", "0.2");
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