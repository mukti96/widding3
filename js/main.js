(function ($) {
 "use strict";
 
  		/*======================
				Menu Stick
		======================= */
		var s = $("#sticker");
		var pos = s.position();					   
		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			if (windowpos > pos.top) {
			s.addClass("stick");
			} else {
			s.removeClass("stick");	
			}
		});	
		
		
        /*=============================
	       OnePageNav js
       ============================ */
			 $("ul#navigation").onePageNav();	
			jQuery(function($) {
				$('ul#navigation a').bind('click', function(event) {
					var $anchor = $(this);
					$('html').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 100
					}, 1000);
					event.preventDefault();
				});
			});   
			
			
			/*========== owlCarousel ==============*/
			
		 $('.bless-testimonial').owlCarousel({
					items:1,
					loop:true,
					margin:10,
					autoplay:true,
					autoplayTimeout:3000,
					});	
					
					
			/*=============== tooltip ==================*/
			 $(function () {
				  $('.mrt-tooltip').tooltip()
				})

 	 /*================ 
			isotope
		================*/
	var $krisha = $('.myallproject').isotope({
	  itemSelector: '.grid-item'
	});
	$(".work-menu button").click(function(){			
		var clickMenu = $(this).attr('data-filter');
		$krisha.isotope({
			filter:clickMenu
		})
	});
	$(".work-menu button").click(function(){
		$(".work-menu button").removeClass("activemenu");
		$(this).addClass("activemenu");
		
	});
	
	/* ==============
		lightbox 
	=================*/
	lightbox.option({
			  'resizeDuration': 300,
			  'wrapAround': true
			});
			
        $('.countdown').ClassyCountdown({
				theme: "white",
				end: $.now() + 10000
			});
			
		 var owl = $('.mrt-owl-left');
              owl.owlCarousel({
                items: 2,
                loop: true,
                margin: 10,
				nav:false,
				dots:true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: false
              });	
			
			
		 var owl = $('.mrt-owl-right');
              owl.owlCarousel({
                items: 2,
                loop: true,
                margin: 10,
				nav:false,
				dots:true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: false
              });	
			
			
		/*==================
	       Scroll Top btn
        =====================*/
            $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').fadeIn().addClass('opacity');
            } else {
            $('.scroll-up-btn').fadeOut();
            }
            });
            $('.scroll-up-btn').on('click', function () {
            $("html, body").animate({
            scrollTop: 0
            }, 1000);
            return false;
            });
			
			
})(jQuery); 