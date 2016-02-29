$(function(){
	$("a.page-scroll").bind("click",function(event){
		alert($(this.hash).offset().top);
		$("html,body").animate({scrollTop:$(this.hash).offset().top},1200);
	});
});
