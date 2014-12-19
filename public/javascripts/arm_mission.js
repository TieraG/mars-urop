$(document).ready(function(){

	var svg = d3.select(".canvas")
					.append("svg")
					.attr("height", 400)
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
			.attr("x", -350)
			.attr("y", 650)
			.attr("transform", "rotate(90 215,600)")
			.text("ASTERIOD RETRIEVAL VEHICLE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 600)
			.attr("transform", "rotate(90 215,600)")
			.text("MULTI-YEAR DEEP SPACE HABITAT");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 560)
			.attr("transform", "rotate(90 215,600)")
			.text("LARGE STORAGE STAGE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 510)
			.attr("transform", "rotate(90 215,600)")
			.text("MARS ORBIT TRANSFER VEHICLE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 470)
			.attr("transform", "rotate(90 215,600)")
			.text("SPACE EXPLORATION VEHICLE");

		////////

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 390)
			.attr("transform", "rotate(90 215,600)")
			.text("CRYOGENIC PROPULSION SYSTEM");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 350)
			.attr("transform", "rotate(90 215,600)")
			.text("LUNAR MODULE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 310)
			.attr("transform", "rotate(90 215,600)")
			.text("LUNAR ORBITAL OUTPOST");

		////////

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 220)
			.attr("transform", "rotate(90 215,600)")
			.text("HEAVY LIFT LAUNCH VEHICLE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 170)
			.attr("transform", "rotate(90 215,600)")
			.text("ADVANCED PROPULSION");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 130)
			.attr("transform", "rotate(90 215,600)")
			.text("TELE-ROBOTIC ROVERS");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 90)
			.attr("transform", "rotate(90 215,600)")
			.text("SURFACE NUCLEAR POWER");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 50)
			.attr("transform", "rotate(90 215,600)")
			.text("ADVANCED EVA");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", 10)
			.attr("transform", "rotate(90 215,600)")
			.text("PRESSURIZED SURFACE MOBILITY");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -40)
			.attr("transform", "rotate(90 215,600)")
			.text("AERO ASSIT SYSTEM");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -90)
			.attr("transform", "rotate(90 215,600)")
			.text("CREW COMMAND AND SERVICE MODULE");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -130)
			.attr("transform", "rotate(90 215,600)")
			.text("DEEP SPACE HABITATION");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -170)
			.attr("transform", "rotate(90 215,600)")
			.text("LONG DURATION SURFACE HABITAT");

		svg.append("text")
			.attr("class", 'bottom')
			.attr("x", -350)
			.attr("y", -210)
			.attr("transform", "rotate(90 215,600)")
			.text("MARS ASCENT VEHICLE");
});


		
		