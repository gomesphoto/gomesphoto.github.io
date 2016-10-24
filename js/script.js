$(document).ready(function() {
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();

	});

	$('.menu,.close').click(function(){
		$('.navigation').toggleClass('navHidden');
	});
});
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});