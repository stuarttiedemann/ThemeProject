$(window).load(function(){
	var carouselHeight = $('#myCarousel').height();
	var navBarHeight = $('#nav-bar').height();
	var skillsHeight = $('#main').height()+carouselHeight;
	var firstPictureHeight = $('#first-picture').height();
	var secondPictureHeight = $('#second-picture').height();
	var workHeight = $('#work').height()+skillsHeight+firstPictureHeight;
	var aboutHeight = $('#about').height()+workHeight+secondPictureHeight;

	console.log(aboutHeight);
	// Add active class to nav elements.
	$(window).scroll(function(){
        if(($(this).scrollTop() >= 0) && ($(this).scrollTop() < carouselHeight)){
            $('#homenav').addClass('activenav');
            $('#skillsnav').removeClass('activenav');
        }else if(($(this).scrollTop() >= carouselHeight) && ($(this).scrollTop() < skillsHeight)){
            $('#homenav').removeClass('activenav');
            $('#skillsnav').addClass('activenav');
            $('#worknav').removeClass('activenav');
        }else if(($(this).scrollTop() >= skillsHeight) && ($(this).scrollTop() < workHeight)){
            $('#worknav').addClass('activenav');
            $('#skillsnav').removeClass('activenav');
            $('#aboutnav').removeClass('activenav');
        }else if(($(this).scrollTop() >= workHeight) && ($(this).scrollTop() < aboutHeight)){
            $('#aboutnav').addClass('activenav');
            $('#worknav').removeClass('activenav');
            $('#skillsnav').removeClass('activenav');
        }
    });
})

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
	});

	// Initialize Wow Animations
	// new WOW().init();
})