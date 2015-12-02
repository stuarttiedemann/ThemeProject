$(document).ready(function() {
	// Initialize Bootstrap Carousel and set slide scroll timer.
    $('.carousel').carousel({
   		interval: 6000
  	}) 
    // Fade in writing on first slide
  	var classCheck = $('#first-div').hasClass('active');
  	
  		if(classCheck === true){
  			$('.main-callout').fadeIn(3000);
  		}else{
  			$('.main-callout').css('display','none');
  		}
  	// variables for sticky navbar
  	var mainNav = $('#nav-bar');
	var mainNavScroll = 'nav-bar-scrolled';
	var mainPadding = 'padding-main';
	var headerHeight = ($('header').height());
	var main = $('#main');
	
	// Make navbar stick to top of page after scrolling below carousel
	$(window).scroll(function(){
		// console.log($(this).scrollTop());
		if($(this).scrollTop() > headerHeight){
			mainNav.addClass(mainNavScroll);
			main.addClass(mainPadding);
		}else{
			mainNav.removeClass(mainNavScroll);
			main.removeClass(mainPadding);
		}
	});	
	
	// Add jQuery Easing effect for smooth transitions when navmenu is clicked.
	$('.page-scroll a').bind('click', function(){
		var $anchor=$(this);
		$('html,body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top},2000,'easeInOutCirc');
			event.preventDefault();
		$('.carousel').carousel({
   		interval: 4000
  		}) 	
	});
	// Initialize Wow Animations
	new WOW().init();
})