$(document).ready(function(){

	$(".canvas").empty();

	var svg = d3.select(".canvas")
					.append("svg")
					.attr("height", 400)
					.attr("width", 1200)
					.attr("id", "moon_mission");


		// SETTING OPACITY TO 0.3

		// ROW ONE

		$(".one").find("#arvRect1").css("opacity", "0.2");
		$(".one").find("#mydRect1").css("opacity", "0.2");
		$(".one").find("#motRect1").css("opacity", "0.2");
		$(".one").find("#sevRect1").css("opacity", "0.2");


		$(".one").find("#apRect1").css("opacity", "0.2");
		$(".one").find("#trrRect1").css("opacity", "0.2");
		$(".one").find("#snpRect1").css("opacity", "0.2");
		$(".one").find("#aasRect1").css("opacity", "0.2");
		$(".one").find("#dshRect1").css("opacity", "0.2");
		$(".one").find("#ldshRect1").css("opacity", "0.2");
		$(".one").find("#mavRect1").css("opacity", "0.2");

		// ROW TWO

		
		$(".two").find("#arvRect2").css("opacity", "0.2");
		$(".two").find("#mydRect2").css("opacity", "0.2");
		$(".two").find("#motRect2").css("opacity", "0.2");
		$(".two").find("#sevRect2").css("opacity", "0.2");


		
		$(".two").find("#apRect2").css("opacity", "0.2");
		$(".two").find("#aasRect2").css("opacity", "0.2");
		$(".two").find("#dshRect2").css("opacity", "0.2");
		$(".two").find("#mavRect2").css("opacity", "0.2");



		// ROW THREE

		$(".three").find("#arvRect3").css("opacity", "0.2");
		$(".three").find("#mydRect3").css("opacity", "0.2");
		$(".three").find("#lssRect3").css("opacity", "0.2");
		$(".three").find("#motRect3").css("opacity", "0.2");
		$(".three").find("#sevRect3").css("opacity", "0.2");

		$(".three").find("#cpsRect3").css("opacity", "0.2");
		$(".three").find("#lmRect3").css("opacity", "0.2");
		$(".three").find("#lopRect3").css("opacity", "0.2");

		// Add tool tips
		var count = 1;
		for (var i=0; i<3; i++){
			rectInfo.forEach(function(rect){
				var attr = $("#"+rect.id+count).attr('style');
				$("#"+ rect.id+count).attr("title", rect.info);
			});
			count+=1;
		}

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

		$(document).tooltip({

  			content: function () {
              return $(this).prop('title');
          	}, 

          	tooltipClass: "tooltip"
		});
});




		
		