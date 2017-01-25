$(document).ready(function() {
	name_selector = '';
function window_scroll (name){
		var bo = $("body").scrollTop();
		if (bo == 0) {
			bo = $("html").scrollTop();
			};
		var p = $(name);
		var offset = p.offset().top;				
		var p_offset = $(window).height() - p_height;
		var big = offset-= p_offset ;
		if ( bo > big ){
			return true;
		}
		else {
			return false;
		};
};


function running_numbers (name) {
	$(function () {
		$({
			n: 0
		}).animate({
			n: $(name).html()
		}, {
			duration: 2000,
			step: function (a) {
				$(name).html(a | 0)
			}
		})
	});
}


var slider1 = $("#main_slider");
	 
	  slider1.owlCarousel({
			items : 1,
			itemsDesktop : [1000,1], 
			itemsDesktopSmall : [1000,1], 
			itemsTablet: [1000,1], 
			itemsMobile : [1000,1], 
			slideSpeed: [1000],
			pagination: false,
			navigation: true,
			mouseDrag: false,
			navigationText: ["",""],
			autoPlay: [10000]
	  });
	  
	  var slider2 = $("#review_slider");
	 
	  slider2.owlCarousel({
			items : 1,
			itemsDesktop : [1000,1], 
			itemsDesktopSmall : [1000,1], 
			itemsTablet: [1000,1], 
			itemsMobile : [1000,1], 
			slideSpeed: [1000],
			pagination: true,
			navigation: true,
			mouseDrag: false,
			touchDrag: true,
			stopOnHover: true,
			navigationText: ["",""],
			autoPlay: false,
	  });
	  
	  var slider3 = $("#logos");
	 
	  slider3.owlCarousel({
			items : 6,
			itemsDesktop : [1144,3], 
			itemsDesktopSmall : [640,2], 
			itemsTablet: [1144,3], 
			itemsMobile : [640,2], 
			slideSpeed: [640],
			pagination: false,
			navigation: false,
			mouseDrag: true,
			stopOnHover: true,
			navigationText: ["",""],
			autoPlay: false,
	  });

	if ($(window).width() > 1144 ) {
	$('.header_box header .logo').css({
		'position' : 'relative',
		'opacity' : '0',
		'left': '-100px' 
	});
	$('.header_box header .logo').animate({
		'opacity' : '1',
		'left': '0px' 
	},1000);
	
	$('.header_box header .nav').css({
		'position' : 'relative',
		'opacity' : '0',
		'top': '-100px' 
	});
	$('.header_box header .nav').animate({
		'position' : 'relative',
		'opacity' : '1',
		'top': '0px' 
	}, 1000); 
	
   var p_height = 300;
   	$('.sertification > h2, .sertification > hr, .sertification > h3').css({
		'position' : 'relative',
		'transform' : 'scale(0)'
		
		
	}); 
	$('.sertification > h2, .sertification > hr, .sertification > h3').css({
		'transition': '1s',
		'transform' : 'scale(1)'
	});

	$('.sertifucations_box .sertification .sertification_loop').css({
		'position' : 'relative',
		'opacity' : '0',
		'bottom': '-400px' 
	}); 	
	$('.sertifucations_box .sertification .sertification_loop').animate({
		'bottom': '0px',
		'opacity'  : '1'
	},1000);
	var number_once = true;  
  $(window).scroll(function(){		
	if ( window_scroll('.our_numbers')) {
	if(number_once == true) {
	 running_numbers ('.our_numbers > :nth-child(1) span');
	 running_numbers ('.our_numbers > :nth-child(2) span');
	 running_numbers ('.our_numbers > :nth-child(3) span');
	 running_numbers ('.our_numbers > :nth-child(4) span');
	number_once = false;
	};
	}; 
	});
	
	
	$('.company_reviews_box .company_reviews h2, .company_reviews_box .company_reviews hr, .company_reviews_box #review_slider .text_block').css({
		'position' : 'relative',
		'opacity' : '0',
		'right': '-600px' 
	}); 
   $(window).scroll(function(){		
		if ( window_scroll('.company_reviews_box .company_reviews h2')) {
			$('.company_reviews_box .company_reviews h2, .company_reviews_box .company_reviews hr, .company_reviews_box #review_slider .text_block').animate({
				'right': '0px',
				'opacity'  : '1'
			},1000);
		}; 	
	});
	$('.company_reviews_box #review_slider .owl-wrapper :first-child.owl-item .img_block').css({
		'position' : 'relative',
		'opacity' : '0',
		'left': '-600px' 
	}); 
   $(window).scroll(function(){		
		if ( window_scroll('.company_reviews_box .company_reviews h2')) {
			$('.company_reviews_box #review_slider .owl-wrapper :first-child.owl-item .img_block').animate({
				'left': '0px',
				'opacity'  : '1'
			},1000);
		}; 	
	});
	$('.company_reviews_box #review_slider .owl-controls .owl-pagination').css({
		'opacity' : '0',
		'bottom': '-300px' 
	}); 
   $(window).scroll(function(){		
		if ( window_scroll('.company_reviews_box .company_reviews h2')) {
			$('.company_reviews_box #review_slider .owl-controls .owl-pagination').animate({
				'bottom': '100px',
				'opacity'  : '1'
			},1000);
		}; 	
	});
	$('.adven > h2, .adven > hr, .adven > h3').css({
		'position' : 'relative',
		'transform' : 'scale(0)'
		
		
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.adven > h2')) {
			$('.adven > h2, .adven > hr, .adven > h3').css({
				'transition': '1s',
				'transform' : 'scale(1)'
			});
		}; 	
	});
	$('.adven_item_box .adven_item').css({
		'position' : 'relative',
		'opacity' : '0',
		'bottom': '-600px' 
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.adven > hr')) {
			$('.adven_item_box .adven_item').css({
				'bottom': '0px',
				'opacity'  : '1'
			});
		}; 	
	});
	$('.price > h2, .price > hr, .price > h3').css({
		'position' : 'relative',
		'transform' : 'scale(0)'
		
		
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.price > h2')) {
			$('.price > h2, .price > hr, .price > h3').css({
				'transition': '1s',
				'transform' : 'scale(1)'
			});
		}; 	
	});
	$('.service_price').eq(0).css({
		'position' : 'relative',
		'opacity' : '0',
		'left': '-500px' 
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.price > h2')) {
			$('.service_price').eq(0).animate({
				'left': '0px',
				'opacity'  : '1'
			},1000);
		}; 	
	});
	
	$('.service_price').eq(2).css({
		'position' : 'relative',
		'opacity' : '0',
		'right': '-500px' 
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.price > h2')) {
			$('.service_price').eq(2).animate({
				'right': '0px',
				'opacity'  : '1'
			},1000);
		}; 	
	});
	
	$('.service_price.middle').css({
		'position' : 'relative',
		'opacity' : '0',
		'bottom': '-500px' 
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.price > h2')) {
			$('.service_price.middle').animate({
				'bottom': '0px',
				'opacity'  : '1'
			},1000);
		}; 	
	});
	var count = 1;
	var destination1 = 200;
	while ( count <= $('.logos ul li').length){		
		destination1 = destination1 + 100;
		destination = destination1 + 'px';
		name = '.logos ul .owl-wrapper > :nth-child(' + count + ')';
		$(name).css({
			'position' : 'relative',
			'top' : destination,
			'opacity': '0'
		})
		count++;
	};
	var logos_once = true;
	$(window).scroll(function(){		
		if ( window_scroll('.logos')) {
			if(logos_once == true) {
			var count2 = 1;
			var speed = 500;
			while ( count2 <= $('.logos ul li').length){		
				speed = speed + 200;
				name = '.logos ul .owl-wrapper > :nth-child(' + count2 + ')';
				$(name).animate({
					'top' : '0px',
					'opacity': '1'
				},speed);
				count2++;
			};
				logos_once = false;
			};
		}; 	
	});
	$('.contact_form > h2, .contact_form > hr, .contact_form > h3').css({
		'position' : 'relative',
		'transform' : 'scale(0)'
		
		
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.contact_form > h2')) {
			$('.contact_form > h2, .contact_form > hr, .contact_form > h3').css({
				'transition': '1s',
				'transform' : 'scale(1)'
			});
		}; 	
	});
	$('.contact_form #contact .name').css({
		'position' : 'relative',
		'left' : '-300px',
		'opacity' : '0'
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.contact_form #contact .name')) {
			$('.contact_form #contact .name').animate({
				'left' : '0px',
				'opacity' : '1'
			},1000);
		}; 	
	});
	$('.contact_form #contact .email').css({
		'position' : 'relative',
		'right' : '-300px',
		'opacity' : '0'
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.contact_form #contact .email')) {
			$('.contact_form #contact .email').animate({
				'right' : '0px',
				'opacity' : '1'
			},1000);
		}; 	
	});
	$('#contact .message, .contact_form #contact button').css({
		'position' : 'relative',
		'bottom' : '-300px',
		'opacity' : '0'
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.contact_form #contact .email')) {
			$('.contact_form #contact .message, .contact_form #contact button').css({
				'bottom' : '0px',
				'opacity' : '1'
			});
		}; 	
	});
	$('.location .info_box').css({
		'position' : 'relative',
		'transition' : '1s',
		'transform' : 'scale(0)'
	}); 
	$(window).scroll(function(){		
		if ( window_scroll('.location')) {
			$('.location .info_box').css({
				'transform' : 'scale(1)'
			});
		}; 	
	});
	};
	var empty_field = $('.contact_form #contact .input_effect input').val();
	$('.contact_form #contact .input_effect input, .contact_form #contact .input_effect textarea').focus(function(){
		$(this).parent().addClass('active');
	});
		$('.contact_form #contact .input_effect input, .contact_form #contact .input_effect textarea').focusout(function(){
		
		if( $(this).val() == empty_field) {
			$(this).parent().removeClass('active');
		}
		else {
			 $(this).addClass('active');
		};
	});
	// adaptive-nav
	function adaptive_nav (name) {	
	nav_content = $(name).html();
	$(name).append('<div class="min_nav">' + nav_content + '</div>');
	}
	adaptive_nav ('header .nav');
	$( ".header_box header > .nav  > .button" ).on( "click", function() {
		$(this).parent().addClass('min');
		$(".header_box header .nav .min_nav").slideDown(500);
	});
	$( ".header_box header .nav .min_nav .button" ).on( "click", function() {
		$(this).parent().parent().removeClass('min');
		$(".header_box header .nav .min_nav").slideUp(500);
	});

	$(window).resize(function(){
		if ($(window).width() > 640 ) {
			$(".header_box header .nav .min_nav").hide();
		}
		$('.header_box header > .nav').removeClass('min');
	});
// main_slider  settings
	setTimeout(function(){
	img_width = $(window).width();
	img_width = img_width + 5;
	$('.header_box .main_slider .item > img').css({
		'width': img_width
	});
	img_height = $('.header_box .main_slider .item > img').height();
	$('#main_slider .owl-item').css({
		'height': img_height
	});
	}, 50);
	$(window).resize(function(){
	img_width = $(window).width();
	img_width = img_width + 5;
			$('.header_box .main_slider .item > img').css({
				'width': img_width
			});
	img_height = $('.header_box .main_slider .item > img').css('height');
			$('#main_slider .owl-item').css({
				'height': img_height
			});
	});
	
// end main_slider setting
// nav_scroll
	$('.header_box header .nav li').on('click', function(){
		step = $(this).attr('step');
		$('.header_box header .nav li').removeClass('active');
		$(this).addClass('active');
		step_item = '#' + step;
		step_item =$(step_item).offset().top;
		if (step_item > 20){
		$('body').animate({
				scrollTop : step_item
		}, 1000 );
		$('html').animate({
				scrollTop : step_item
		}, 1000 );
		};
	});
	nav_content = $('header .nav').html();
	$('.float_nav').html(nav_content);
		$(window).scroll(function(){		
		var bo = $("body").scrollTop();
		if (bo == 0) {
			bo = $("html").scrollTop();
		};
		if (bo > 100) {
			$('.float_nav').fadeIn();
		}
		else {
			$('.float_nav').fadeOut();
		}
	});
	$('.float_nav > ul li').on("click",function(){
		step = $(this).attr('step');
		step_item = '#' + step;
		step_item =$(step_item).offset().top;
		if (step_item > 20){
		$('body').animate({
				scrollTop : step_item
		}, 1000 );
		$('html').animate({
				scrollTop : step_item
		}, 1000 );
		};
	});
	menu_count = $('.float_nav > ul li').length;
	menu_width = menu_count * 100;
	menu_width = menu_width + 'px';
	$('.float_nav > ul').css({
		'width' : menu_width
	});
	$(window).scroll(function(){

	num = 1;
	menu_count = $('.float_nav > ul li').length;
	while(num <= menu_count) {
		current_step_top = num;
		current_step_top = '#step' + current_step_top;
		current_step_top = $(current_step_top).offset().top;
		eq_count = num - 1;
		next_step_top = num + 1;
		last_item = false;
		if (next_step_top > menu_count) {
			next_step_top = menu_count;
			last_item = true;
		}
		next_step_top = '#step' + next_step_top;
		next_step_top = $(next_step_top).offset().top;
		var bo = $("body").scrollTop();
		if (bo == 0) {
			bo = $("html").scrollTop();
		};
		$('.float_nav > ul li').eq(eq_count).removeClass('active');
		if (bo >= current_step_top) {
				if (last_item == true) {
					$('.float_nav > ul li').eq(eq_count).addClass('active');
				}
				else {
				if (bo < next_step_top) {
					$('.float_nav > ul li').eq(eq_count).addClass('active');
				};
				};
			};
		num++;
	};	
	});
// and nav_scroll
	$(window).resize(function(){
		if ($(window).width() > 640 ) {
			$(".header_box header .nav .min_nav").hide();
			$('.location').removeClass('hide');
			$('.location .info_box').show();
		}
		$('.header_box header > .nav').removeClass('min');
	});
	$('.location .button').click(function(){
		$(this).parent().toggleClass('hide');
		$('.location .info_box').slideToggle();
	})
});