$( document ).ready(function(){

	$("#slon").click(function(){

		$("#click_me").css('display', 'none');

		$("#b6").addClass("step");
		$("#b8").addClass("step");
		$("#c7").addClass("step");
		$("#d8").addClass("step");
		$("#a5").addClass("step");
		$("#d6").addClass("step");
		$("#e5").addClass("step");
		$("#f4").addClass("attack");
	
		$("#peshka").click(function(){

			$( "#slon" ).animate({
				left: "+180",
				top: "+180",

			}, 2000, function() {});
			$( "#peshka" ).animate({
				opacity: "0",
			}, 2000, function() {});	

			$("#b6").removeClass("step");
			$("#c7").removeClass("step");
			$("#b8").removeClass("step");
			$("#d8").removeClass("step");
			$("#a5").removeClass("step");
			$("#d6").removeClass("step");
			$("#e5").removeClass("step");
			$("#f4").removeClass("attack");

		});

	
		$("#b8").click(function(){
	
			$( "#slon" ).animate({
				left: "-60",
				top: "-60",
			}, 2000, function() {});


			$("#b6").removeClass("step");
			$("#c7").removeClass("step");
			$("#b8").removeClass("step");
			$("#d8").removeClass("step");
			$("#a5").removeClass("step");
			$("#d6").removeClass("step");
			$("#e5").removeClass("step");
			$("#f4").removeClass("attack");
		
		});



		$("#a5").click(function(){
	
			$( "#slon" ).animate({
				left: "-110",
				top: "120",
			}, 2000, function() {});


			$("#b6").removeClass("step");
			$("#c7").removeClass("step");
			$("#b8").removeClass("step");
			$("#d8").removeClass("step");
			$("#a5").removeClass("step");
			$("#d6").removeClass("step");
			$("#e5").removeClass("step");
			$("#f4").removeClass("attack");
		
		});

		$("#d8").click(function(){
	
			$( "#slon" ).animate({
				left: "+60",
				top: "-60",
			}, 2000, function() {});


			$("#b6").removeClass("step");
			$("#c7").removeClass("step");
			$("#b8").removeClass("step");
			$("#d8").removeClass("step");
			$("#a5").removeClass("step");
			$("#d6").removeClass("step");
			$("#e5").removeClass("step");
			$("#f4").removeClass("attack");
		
		});
	});
});