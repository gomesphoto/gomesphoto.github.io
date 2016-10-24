$(document).ready(function() {
	$(window).scroll(function(){
		var scrolling = $(this).scrollTop();

	});

	$('.menu,.close,.navigation a').click(function(){
		$('.navigation').toggleClass('navHidden');
	});
});
$(document).on('click', 'a.smooth', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});