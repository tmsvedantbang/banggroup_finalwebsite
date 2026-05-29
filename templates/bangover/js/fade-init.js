jQuery( document ).ready(function( $ ) {


	//init
	$('.bwWrapper').BlackAndWhite({
		hoverEffect:true,
		webworkerPath: 'js/',
		intensity:1,
		onImageReady:function(img){
			$(img).parent().animate({
				opacity:1
			});
		}
	});

}); /*End of main*/