$(function(){

	var timer;

	var timeOut = function(){
		$('.box2').animate({
		'width' : '30%',
		'height' : '300px',
		},2000);
	}

	$('body').click(function(){
		alert("Animação foi cancelada");
		clearTimeout(timer);
	})

	$('.box1').animate({
		'width' : '30%',
		'height' : '300px',
	},2000,function(){
		timer = setTimeout(timeOut,0);
	});

});