loadARM = function(){

			var svg = d3.select(".canvas")
						.append("svg")
						.attr("height", 900)
						.attr("width", 1200)
						.attr("id", "arm_mission");

			// ARM LABEL

			svg.append("text")
			   .attr("class", "header")
			   .attr("x", 60)
			   .attr("y", 80)
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
			   .attr("y", 80)
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
			   .attr("y", 80)
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
	  		 							link: "/images/ARV.png", 
	  		 							x: 210 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "myd"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/MYD.png", 
	  		 							x: 260 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "lss"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/LSS.png", 
	  		 							x: 310 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "mot"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/MOT.png", 
	  		 							x: 350 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "sev"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/SEV.png", 
	  		 							x: 410 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "cps"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/CPS.png", 
	  		 							x: 490 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 25,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "lm"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/LM.png", 
	  		 							x: 540 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				}, 

			  		 				{
	  		 							id: "lop"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/LOP.png", 
	  		 							x: 620 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 40,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "hll"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/HLL.png", 
	  		 							x: 710 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 60
			  		 				},

			  		 				{
	  		 							id: "ap"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/AP.png", 
	  		 							x: 740 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "trr"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/TRR.png", 
	  		 							x: 770 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 55,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "snp"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/SNP.png", 
	  		 							x: 830 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 30,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "av"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/AV.png", 
	  		 							x: 860 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 40,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "psm"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/PSM.png", 
	  		 							x: 905 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 45,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "aas"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/AAS.png", 
	  		 							x: 950 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 35,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "ccs"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/CCS.png", 
	  		 							x: 985 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 50,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "dsh"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/DSH.png", 
	  		 							x: 1035 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 50,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "ldsh"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/LDSH.png", 
	  		 							x: 1090 , 
	  		 							y: text.textOne.height,
	  		 							sizeW: 35,
	  		 							sizeH: 70
			  		 				},

			  		 				{
	  		 							id: "mav"+count, 
	  		 							width: 2000, 
	  		 							height: 2000, 
	  		 							link: "/images/MAV.png", 
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
					  		 	id: "arv"+count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#arv" + count + ")",
					  		 	info: "ARV Info"
						},

						{
					  		 	x: 260,
					  		 	y: text.textOne.height,
					  		 	id: "myd" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#myd" + count + ")",
					  		 	info: "MYD Info"
						},

						{
					  		 	x: 300,
					  		 	y: text.textOne.height,
					  		 	id: "lss" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#lss" + count + ")",
					  		 	info: "LSS Info"
						},

						{
					  		 	x: 360,
					  		 	y: text.textOne.height,
					  		 	id: "mot" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#mot" + count + ")",
					  		 	info: "MOT Info"
						},

						{
					  		 	x: 420,
					  		 	y: text.textOne.height,
					  		 	id: "sev" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#sev" + count + ")",
					  		 	info: "SEV Info"
						}, 

						{
					  		 	x: 490,
					  		 	y: text.textOne.height,
					  		 	id: "cps" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#cps" + count + ")",
					  		 	info: "CPS Info"
						}, 

						{
					  		 	x: 540,
					  		 	y: text.textOne.height,
					  		 	id: "lm" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#lm" + count + ")",
					  		 	info: "LM Info"
						},

						{
					  		 	x: 620,
					  		 	y: text.textOne.height,
					  		 	id: "lop" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#lop" + count + ")",
					  		 	info: "LOP Info"
						},

						{
					  		 	x: 710,
					  		 	y: text.textOne.height,
					  		 	id: "hll" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#hll" + count + ")",
					  		 	info: "HLL Info"
						},

						{
					  		 	x: 740,
					  		 	y: text.textOne.height,
					  		 	id: "ap" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#ap" + count + ")",
					  		 	info: "AP Info"
						},

						{
					  		 	x: 770,
					  		 	y: text.textOne.height,
					  		 	id: "trr" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#trr" + count + ")",
					  		 	info: "TRR Info"
						},

						{
					  		 	x: 830,
					  		 	y: text.textOne.height,
					  		 	id: "snp" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#snp" + count + ")",
					  		 	info: "SNP Info"
						},

						{
					  		 	x: 830,
					  		 	y: text.textOne.height,
					  		 	id: "av" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#av" + count + ")",
					  		 	info: "AV Info"
						},

						{
					  		 	x: 895,
					  		 	y: text.textOne.height,
					  		 	id: "av" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#psm" + count + ")",
					  		 	info: "PSM Info"
						},

						{
					  		 	x: 950,
					  		 	y: text.textOne.height,
					  		 	id: "aas" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#aas" + count + ")",
					  		 	info: "ASS Info"
						},

						{
					  		 	x: 985,
					  		 	y: text.textOne.height,
					  		 	id: "ccs" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#ccs" + count + ")",
					  		 	info: "CCS Info"
						},

						{
					  		 	x: 1035,
					  		 	y: text.textOne.height,
					  		 	id: "dsh" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#dsh" + count + ")",
					  		 	info: "DSH Info"
						},

						{
					  		 	x: 1090,
					  		 	y: text.textOne.height,
					  		 	id: "ldsh" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#ldsh" + count + ")",
					  		 	info: "LDSH Info"
						},

						{
					  		 	x: 1125,
					  		 	y: text.textOne.height,
					  		 	id: "mav" + count,
					  		 	width: 70,
					  		 	height: 100,
					  		 	fill: "url(#mav" + count + ")",
					  		 	info: "MAV Info"
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
		  });

		  count+=1


});


		// 	 // ARM Diagram 
		// 	 svg.append("text")
		// 	   .attr("class", "label")
		// 	   .attr("x", 60)
		// 	   .attr("y", 200)
		// 	   .text("ARM");

		// 	// DIAGRAMS

		// 	 var patternInfo = [
		// 	  		 				{
	 //  		 							id: "arv1", 
	 //  		 							width: 400, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/ARV.png", 
	 //  		 							x: 210 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "myd1", 
	 //  		 							width: 400, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/MYD.png", 
	 //  		 							x: 260 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "lss1", 
	 //  		 							width: 600, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/LSS.png", 
	 //  		 							x: 310 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "mot1", 
	 //  		 							width: 600, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/MOT.png", 
	 //  		 							x: 350 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 45,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "sev1", 
	 //  		 							width: 600, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/SEV.png", 
	 //  		 							x: 410 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "cps1", 
	 //  		 							width: 700, 
	 //  		 							height: 700, 
	 //  		 							link: "/images/CPS.png", 
	 //  		 							x: 490 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "lm1", 
	 //  		 							width: 700, 
	 //  		 							height: 700, 
	 //  		 							link: "/images/LM.png", 
	 //  		 							x: 540 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 45,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "lop1", 
	 //  		 							width: 800, 
	 //  		 							height: 800, 
	 //  		 							link: "/images/LOP.png", 
	 //  		 							x: 620 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 40,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "hll1", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/HLL.png", 
	 //  		 							x: 710 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 60
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "ap1", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/AP.png", 
	 //  		 							x: 740 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "trr1", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/TRR.png", 
	 //  		 							x: 770 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 55,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "snp1", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/SNP.png", 
	 //  		 							x: 830 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "av1", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/AV.png", 
	 //  		 							x: 860 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 40,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "psm1", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/PSM.png", 
	 //  		 							x: 905 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 45,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "aas1", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/AAS.png", 
	 //  		 							x: 950 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 35,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "ccs1", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/CCS.png", 
	 //  		 							x: 985 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 50,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "dsh1", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/DSH.png", 
	 //  		 							x: 1035 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 50,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "ldsh1", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/LDSH.png", 
	 //  		 							x: 1090 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 35,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "mav1", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/MAV.png", 
	 //  		 							x: 1125 , 
	 //  		 							y: 150,
	 //  		 							sizeW: 35,
	 //  		 							sizeH: 70
		// 	  		 				}



		// 	 ];

		//   patternInfo.forEach(function(pattern){

		// 	  		 svg.append("defs")
		// 				   .append("pattern")
		// 				   .attr("id", pattern.id)
		// 				   .attr('patternUnits', 'userSpaceOnUse')
		// 				   .attr("width", pattern.width)
		// 				   .attr("height", pattern.height)
		// 				   .append("image")
		// 				   .attr("width", pattern.sizeW)
		// 				   .attr("height", pattern.sizeH)
		// 				   .attr("xlink:href", pattern.link)
		// 				   .attr('x', pattern.x)
		//                    .attr('y', pattern.y);

		//   		 });

		//   rectInfo = [
	 //  					{
		// 			  		 	x: 210,
		// 			  		 	y: 150,
		// 			  		 	id: "arv1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#arv1)",
		// 			  		 	info: "ARV Info"
		// 				},

		// 				{
		// 			  		 	x: 260,
		// 			  		 	y: 150,
		// 			  		 	id: "myd1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#myd1)",
		// 			  		 	info: "MYD Info"
		// 				},

		// 				{
		// 			  		 	x: 300,
		// 			  		 	y: 150,
		// 			  		 	id: "lss1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#lss1)",
		// 			  		 	info: "LSS Info"
		// 				},

		// 				{
		// 			  		 	x: 360,
		// 			  		 	y: 150,
		// 			  		 	id: "mot1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#mot1)",
		// 			  		 	info: "MOT Info"
		// 				},

		// 				{
		// 			  		 	x: 420,
		// 			  		 	y: 150,
		// 			  		 	id: "sev1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#sev1)",
		// 			  		 	info: "SEV Info"
		// 				}, 

		// 				{
		// 			  		 	x: 490,
		// 			  		 	y: 150,
		// 			  		 	id: "cps1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#cps1)",
		// 			  		 	info: "CPS Info"
		// 				}, 

		// 				{
		// 			  		 	x: 540,
		// 			  		 	y: 150,
		// 			  		 	id: "lm1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#lm1)",
		// 			  		 	info: "LM Info"
		// 				},

		// 				{
		// 			  		 	x: 620,
		// 			  		 	y: 150,
		// 			  		 	id: "lop1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#lop1)",
		// 			  		 	info: "LOP Info"
		// 				},

		// 				{
		// 			  		 	x: 710,
		// 			  		 	y: 150,
		// 			  		 	id: "hll1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#hll1)",
		// 			  		 	info: "HLL Info"
		// 				},

		// 				{
		// 			  		 	x: 740,
		// 			  		 	y: 150,
		// 			  		 	id: "ap1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#ap1)",
		// 			  		 	info: "AP Info"
		// 				},

		// 				{
		// 			  		 	x: 770,
		// 			  		 	y: 150,
		// 			  		 	id: "trr1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#trr1)",
		// 			  		 	info: "TRR Info"
		// 				},

		// 				{
		// 			  		 	x: 830,
		// 			  		 	y: 150,
		// 			  		 	id: "snp1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#snp1)",
		// 			  		 	info: "SNP Info"
		// 				},

		// 				{
		// 			  		 	x: 830,
		// 			  		 	y: 150,
		// 			  		 	id: "av1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#av1)",
		// 			  		 	info: "AV Info"
		// 				},

		// 				{
		// 			  		 	x: 895,
		// 			  		 	y: 150,
		// 			  		 	id: "av1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#psm1)",
		// 			  		 	info: "PSM Info"
		// 				},

		// 				{
		// 			  		 	x: 950,
		// 			  		 	y: 150,
		// 			  		 	id: "aas1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#aas1)",
		// 			  		 	info: "ASS Info"
		// 				},

		// 				{
		// 			  		 	x: 985,
		// 			  		 	y: 150,
		// 			  		 	id: "ccs1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#ccs1)",
		// 			  		 	info: "CCS Info"
		// 				},

		// 				{
		// 			  		 	x: 1035,
		// 			  		 	y: 150,
		// 			  		 	id: "dsh1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#dsh1)",
		// 			  		 	info: "DSH Info"
		// 				},

		// 				{
		// 			  		 	x: 1090,
		// 			  		 	y: 150,
		// 			  		 	id: "ldsh1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#ldsh1)",
		// 			  		 	info: "LDSH Info"
		// 				},

		// 				{
		// 			  		 	x: 1125,
		// 			  		 	y: 150,
		// 			  		 	id: "mav1",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#mav1)",
		// 			  		 	info: "MAV Info"
		// 				}


		//   ];

		//   rectInfo.forEach(function(rect){
		//   			svg.append("rect")
		//   			   .attr("id",rect.id)
		//   			   .attr("x", rect.x)
		//   			   .attr("y", rect.y)
		//   			   .attr("width", rect.width)
		//   			   .attr("height", rect.height)
		//   			   .attr("fill", rect.fill)
		//   });


		// svg.append("text")
		//    .attr("class", "label")
		//    .attr("x", 60)
		//    .attr("y", 280)
		//    .text("+");

		//  // MARTIAN MOONS 
		//  svg.append("text")
		//    .attr("class", "label")
		//    .attr("x", 60)
		//    .attr("y", 350)
		//    .text("MARTIAN");	

		// svg.append("text")
		//    .attr("class", "label")
		//    .attr("x", 60)
		//    .attr("y", 380)
		//    .text("MOONS");	


		// // DIAGRAMS

		// 	 var patternInfo = [
		// 	  		 				{
	 //  		 							id: "arv2", 
	 //  		 							width: 400, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/ARV.png", 
	 //  		 							x: 210 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "myd2", 
	 //  		 							width: 400, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/MYD.png", 
	 //  		 							x: 260 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "lss2", 
	 //  		 							width: 600, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/LSS.png", 
	 //  		 							x: 310 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "mot2", 
	 //  		 							width: 600, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/MOT.png", 
	 //  		 							x: 350 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 45,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "sev2", 
	 //  		 							width: 600, 
	 //  		 							height: 400, 
	 //  		 							link: "/images/SEV.png", 
	 //  		 							x: 410 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "cps2", 
	 //  		 							width: 700, 
	 //  		 							height: 700, 
	 //  		 							link: "/images/CPS.png", 
	 //  		 							x: 490 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 25,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "lm2", 
	 //  		 							width: 700, 
	 //  		 							height: 700, 
	 //  		 							link: "/images/LM.png", 
	 //  		 							x: 540 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 45,
	 //  		 							sizeH: 70
		// 	  		 				}, 

		// 	  		 				{
	 //  		 							id: "lop2", 
	 //  		 							width: 800, 
	 //  		 							height: 800, 
	 //  		 							link: "/images/LOP.png", 
	 //  		 							x: 620 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 40,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "hll2", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/HLL.png", 
	 //  		 							x: 710 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 60
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "ap2", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/AP.png", 
	 //  		 							x: 740 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "trr2", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/TRR.png", 
	 //  		 							x: 770 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 55,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "snp2", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/SNP.png", 
	 //  		 							x: 830 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 30,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "av2", 
	 //  		 							width: 1000, 
	 //  		 							height: 1000, 
	 //  		 							link: "/images/AV.png", 
	 //  		 							x: 860 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 40,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "psm2", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/PSM.png", 
	 //  		 							x: 905 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 45,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "aas2", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/AAS.png", 
	 //  		 							x: 950 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 35,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "ccs2", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/CCS.png", 
	 //  		 							x: 985 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 50,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "dsh2", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/DSH.png", 
	 //  		 							x: 1035 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 50,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "ldsh2", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/LDSH.png", 
	 //  		 							x: 1090 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 35,
	 //  		 							sizeH: 70
		// 	  		 				},

		// 	  		 				{
	 //  		 							id: "mav2", 
	 //  		 							width: 1200, 
	 //  		 							height: 1200, 
	 //  		 							link: "/images/MAV.png", 
	 //  		 							x: 1125 , 
	 //  		 							y: 330,
	 //  		 							sizeW: 35,
	 //  		 							sizeH: 70
		// 	  		 				}



		// 	 ];

		//   patternInfo.forEach(function(pattern){

		// 	  		 svg.append("defs")
		// 				   .append("pattern")
		// 				   .attr("id", pattern.id)
		// 				   .attr('patternUnits', 'userSpaceOnUse')
		// 				   .attr("width", pattern.width)
		// 				   .attr("height", pattern.height)
		// 				   .append("image")
		// 				   .attr("width", pattern.sizeW)
		// 				   .attr("height", pattern.sizeH)
		// 				   .attr("xlink:href", pattern.link)
		// 				   .attr('x', pattern.x)
		//                    .attr('y', pattern.y);

		//   		 });

		//   rectInfo = [
	 //  					{
		// 			  		 	x: 210,
		// 			  		 	y: 330,
		// 			  		 	id: "arv2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#arv2)",
		// 			  		 	info: "ARV Info"
		// 				},

		// 				{
		// 			  		 	x: 260,
		// 			  		 	y: 330,
		// 			  		 	id: "myd2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#myd2)",
		// 			  		 	info: "MYD Info"
		// 				},

		// 				{
		// 			  		 	x: 300,
		// 			  		 	y: 330,
		// 			  		 	id: "lss2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#lss2)",
		// 			  		 	info: "LSS Info"
		// 				},

		// 				{
		// 			  		 	x: 360,
		// 			  		 	y: 330,
		// 			  		 	id: "mot2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#mot2)",
		// 			  		 	info: "MOT Info"
		// 				},

		// 				{
		// 			  		 	x: 420,
		// 			  		 	y: 330,
		// 			  		 	id: "sev2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#sev2)",
		// 			  		 	info: "SEV Info"
		// 				}, 

		// 				{
		// 			  		 	x: 490,
		// 			  		 	y: 330,
		// 			  		 	id: "cps2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#cps2)",
		// 			  		 	info: "CPS Info"
		// 				}, 

		// 				{
		// 			  		 	x: 540,
		// 			  		 	y: 330,
		// 			  		 	id: "lm2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#lm2)",
		// 			  		 	info: "LM Info"
		// 				},

		// 				{
		// 			  		 	x: 620,
		// 			  		 	y: 330,
		// 			  		 	id: "lop2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#lop2)",
		// 			  		 	info: "LOP Info"
		// 				},

		// 				{
		// 			  		 	x: 710,
		// 			  		 	y: 330,
		// 			  		 	id: "hll2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#hll2)",
		// 			  		 	info: "HLL Info"
		// 				},

		// 				{
		// 			  		 	x: 740,
		// 			  		 	y: 330,
		// 			  		 	id: "ap2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#ap2)",
		// 			  		 	info: "AP Info"
		// 				},

		// 				{
		// 			  		 	x: 770,
		// 			  		 	y: 330,
		// 			  		 	id: "trr2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#trr2)",
		// 			  		 	info: "TRR Info"
		// 				},

		// 				{
		// 			  		 	x: 830,
		// 			  		 	y: 330,
		// 			  		 	id: "snp2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#snp2)",
		// 			  		 	info: "SNP Info"
		// 				},

		// 				{
		// 			  		 	x: 830,
		// 			  		 	y: 330,
		// 			  		 	id: "av2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#av2)",
		// 			  		 	info: "AV Info"
		// 				},

		// 				{
		// 			  		 	x: 895,
		// 			  		 	y: 330,
		// 			  		 	id: "psm2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#psm2)",
		// 			  		 	info: "PSM Info"
		// 				},

		// 				{
		// 			  		 	x: 950,
		// 			  		 	y: 330,
		// 			  		 	id: "aas2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#aas2)",
		// 			  		 	info: "ASS Info"
		// 				},

		// 				{
		// 			  		 	x: 985,
		// 			  		 	y: 330,
		// 			  		 	id: "ccs2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#ccs2)",
		// 			  		 	info: "CCS Info"
		// 				},

		// 				{
		// 			  		 	x: 1035,
		// 			  		 	y: 330,
		// 			  		 	id: "dsh2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#dsh2)",
		// 			  		 	info: "DSH Info"
		// 				},

		// 				{
		// 			  		 	x: 1090,
		// 			  		 	y: 330,
		// 			  		 	id: "ldsh2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#ldsh2)",
		// 			  		 	info: "LDSH Info"
		// 				},

		// 				{
		// 			  		 	x: 1125,
		// 			  		 	y: 330,
		// 			  		 	id: "mav2",
		// 			  		 	width: 70,
		// 			  		 	height: 100,
		// 			  		 	fill: "url(#mav2)",
		// 			  		 	info: "MAV Info"
		// 				}


		//   ];

		//   rectInfo.forEach(function(rect){
		//   			svg.append("rect")
		//   			   .attr("id",rect.id)
		//   			   .attr("x", rect.x)
		//   			   .attr("y", rect.y)
		//   			   .attr("width", rect.width)
		//   			   .attr("height", rect.height)
		//   			   .attr("fill", rect.fill)
		//   });


	 // // MARs SURFACE

	 // svg.append("text")
		//    .attr("class", "label")
		//    .attr("x", 60)
		//    .attr("y", 450)
		//    .text("+");


		//  svg.append("text")
		//    .attr("class", "label")
		//    .attr("x", 60)
		//    .attr("y", 500)
		//    .text("MARTIAN");	

		// svg.append("text")
		//    .attr("class", "label")
		//    .attr("x", 60)
		//    .attr("y", 530)
		//    .text("SURFACE");





};