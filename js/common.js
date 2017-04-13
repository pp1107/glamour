$(document).ready(function() {

	var windowWidth = $(window).width();
	if(windowWidth < 767){
		$('.has-main').click(function(){
			$(this).toggleClass('active');
			$('.sub-menu-level-2, .sub-menu-level-3').toggle('slow');
		});
	}

	if(windowWidth > 767){
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 10) {
	        $("header").addClass("header-active");
	        $(".header-active .header-js-1").removeClass('col-md-6 col-sm-4 col-sm-push-4 col-md-push-3').addClass("col-md-8");
	        $(".header-active .header-js-2").removeClass('col-md-3 col-sm-4 col-sm-pull-4 col-md-pull-6 col-xs-6').addClass("hidden-md");
	        $(".header-active .header-js-3").removeClass('col-md-3 col-sm-4 col-xs-6').addClass("col-md-4");
	    } else {
	        $("header").removeClass("header-active");
	        $("header .header-js-1").addClass('col-md-6 col-sm-4 col-sm-push-4 col-md-push-3').removeClass("col-md-8");
	        $("header .header-js-2").addClass('col-md-3 col-sm-4 col-sm-pull-4 col-md-pull-6 col-xs-6').removeClass("hidden-md");
	        $("header .header-js-3").addClass('col-md-3 col-sm-4 col-xs-6').removeClass("col-md-4");
	    }
	});
	}

	if(windowWidth < 767){
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 255) {
	        $("header").addClass("header-active-menu");
	    } else {
	        $("header").removeClass("header-active-menu");
	    }
	});
	}

	$('.mobile-btn').click(function(event) {
		$('.top-nav nav > ul').toggle('slow');
	});
	$('.bxslider').bxSlider({
		pagerCustom: '#bx-pager'
	});



});
