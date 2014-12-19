$(document).ready(function(){

	var svg = d3.select(".canvas")
					.append("svg")
					.attr("height", 400)
					.attr("width", 1200)
					.attr("id", "arm_mission");


		// SETTING OPACITY TO 0.3

		// ROW ONE

		$("#arvRect1").css("opacity", "0.2");
		$("#lssRect1").css("opacity", "0.2");
		$("#mydRect1").css("opacity", "0.2");
		$("#motRect1").css("opacity", "0.2");
		$("#sevRect1").css("opacity", "0.2");

		$("#cpsRect1").css("opacity", "0.2");
		$("#lmRect1").css("opacity", "0.2");
		$("#lopRect1").css("opacity", "0.2");


		$("#apRect1").css("opacity", "0.2");
		$("#trrRect1").css("opacity", "0.2");
		$("#snpRect1").css("opacity", "0.2");
		$("#psmRect1").css("opacity", "0.2");
		$("#aasRect1").css("opacity", "0.2");
		$("#ldshRect1").css("opacity", "0.2");
		$("#mavRect1").css("opacity", "0.2");

		// ROW TWO

		$("#arvRect2").css("opacity", "0.2");
		$("#lssRect2").css("opacity", "0.2");
		$("#mydRect2").css("opacity", "0.2");
		$("#motRect2").css("opacity", "0.2");

		$("#lmRect2").css("opacity", "0.2");
		$("#lopRect2").css("opacity", "0.2");


		$("#apRect2").css("opacity", "0.2");
		$("#trrRect2").css("opacity", "0.2");
		$("#snpRect2").css("opacity", "0.2");
		$("#psmRect2").css("opacity", "0.2");
		$("#aasRect2").css("opacity", "0.2");
		$("#ldshRect2").css("opacity", "0.2");
		$("#mavRect2").css("opacity", "0.2");
		



		// ROW THREE

		$("#arvRect3").css("opacity", "0.2");
		$("#mydRect3").css("opacity", "0.2");
		$("#motRect3").css("opacity", "0.2");
		$("#sevRect3").css("opacity", "0.2");


		$("#apRect3").css("opacity", "0.2");
		$("#trrRect3").css("opacity", "0.2");
		$("#snpRect3").css("opacity", "0.2");
		$("#aasRect3").css("opacity", "0.2");
		$("#dshRect3").css("opacity", "0.2");
		$("#ldshRect3").css("opacity", "0.2");
		$("#mavRect3").css("opacity", "0.2");

		// ROW FOUR


		$("#arvRect4").css("opacity", "0.2");
		$("#mydRect4").css("opacity", "0.2");
		$("#motRect4").css("opacity", "0.2");
		$("#sevRect4").css("opacity", "0.2");


		$("#apRect4").css("opacity", "0.2");
		$("#aasRect4").css("opacity", "0.2");
		$("#dshRect4").css("opacity", "0.2");
		$("#mavRect4").css("opacity", "0.2");

		// ROW FIVE

		$("#arvRect5").css("opacity", "0.2");
		$("#lssRect5").css("opacity", "0.2");

		$("#cpsRect5").css("opacity", "0.2");
		$("#lmRect5").css("opacity", "0.2");
		$("#lopRect5").css("opacity", "0.2");

		$("#trrRect5").css("opacity", "0.2");
		$("#snpRect5").css("opacity", "0.2");
		$("#psmRect5").css("opacity", "0.2");
		$("#aasRect5").css("opacity", "0.2");
		$("#dshRect5").css("opacity", "0.2");
		$("#ldshRect5").css("opacity", "0.2");
		$("#mavRect5").css("opacity", "0.2");

		// ROW SIX

		$("#arvRect6").css("opacity", "0.2");
		$("#mydRect6").css("opacity", "0.2");
		$("#lssRect6").css("opacity", "0.2");
		$("#motRect6").css("opacity", "0.2");
		$("#sevRect6").css("opacity", "0.2");

		$("#cpsRect6").css("opacity", "0.2");
		$("#lmRect6").css("opacity", "0.2");
		$("#lopRect6").css("opacity", "0.2");



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

		////// Listener for tool tip
		var count = 1

		rectInfo.forEach(function(rect){

				var i = $(rect.id + count);


				i.on("mouseenter", function(){
						i.tool			   
				});

				i.on("mouseleave", tip.hide);
		});
});




		
		