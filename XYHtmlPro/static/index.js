$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>60){
			$("#header").addClass("header-scroll");
		}else{
			$("#header").removeClass("header-scroll");
		}
	});
});