
	/* Loader
	-----------------------------------------------------------------------------------*/

	$(window).on('load', function() {

		"use strict";
		// Load the page and wait 1s.
	    $('#loader').delay( 1000 ).fadeOut('slow');	

	});

$(document).ready(function() {

	"use strict";


	/* AOS
	-----------------------------------------------------------------------------------*/

	if ( $("[data-aos]").length ) {
		AOS.init();
	}

	/* Video Player
	-----------------------------------------------------------------------------------*/
	if ($("#video-wrap").length) {
        $('#video-wrap').YTPlayer({            
             showControls: false,
            playerVars: {
                modestbranding: 0,
                autoplay: 1,
                controls: 1,
                showinfo: 0,
                wmode: 'transparent',
                branding: 0,
                rel: 0,
                autohide: 0,
                origin: window.location.origin
            }
        });
    }

	/* Vegas Slider
	-----------------------------------------------------------------------------------*/

    if ($("#slider").length) {
    	$("#slider").vegas({
    		delay: 7000,
    		timer: true,
    		shuffle: true,
    		firstTransition: 'fade2',
    		firstTransitionDuration: 2000,
    		transition: 'fade2',
    		transitionDuration: 4000,
    		slides: [
    			{ src: "./img/portfolio_1.jpg" },
    			{ src: "./img/portfolio_2.jpg" },
    			{ src: "./img/portfolio_3.jpg" },
    			{ src: "./img/portfolio_4.jpg" }
    		]
    	});
    }

	/* Scroll Up
	-----------------------------------------------------------------------------------*/
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 500) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});

	/* Scroll To
	-----------------------------------------------------------------------------------*/

	/* activate scrollspy menu */
	$('body').scrollspy({ 
		target: '.navbar', offset:74
	});

	//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
	$('.navbar-nav a').on('click', function(){ 
		$.scrollTo( 
			this.hash, 1000,
			{ offset:-73 }
		);
	});	

	$('.scroll-link').on('click', function(){ 
		$.scrollTo( 
			this.hash, 1000,
			{ offset:-73 }
		);				
	});	

	/* Simple Count Down 
	-----------------------------------------------------------------------------------*/
		
	if( $('#countdown').length ) {
		// Set the date we're counting down to
		var countDownDate = Date.parse('25 Jun 2019 15:30:00');
		
		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get todays date and time
		  var now = new Date().getTime();

		  // Find the distance between now an the count down date
		  var distance = countDownDate - now;

		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result in the element with class="countdown"
		  document.getElementById('countdown').innerHTML = 
		  "<ul>" + 
			  "<li>" + "<h2>" + days + "</h2>" + "<h4>days</h4>" + "</li>" +
			  "<li>" + "<h2>" + hours + "</h2>" + "<h4>hours</h4>" + "</li>"+
			  "<li>" + "<h2>" + minutes + "</h2>" + "<h4>min</h4>" + "</li>"+
			  "<li>" + "<h2>" + seconds + "</h2>" + "<h4>sec</h4>"+"</li>"+			  
		  "</ul>";
		  
		  // If the count down is finished, write some text 
		  if (distance < 0) {
		  	clearInterval(x);
		  	document.getElementById('countdown').innerHTML = "EXPIRED";
		  }
		}, 1000);
	}


	/* Sticky Nav
	-----------------------------------------------------------------------------------*/
	
	$(window).on('scroll', function() {

		var sliderHeight = $("#slider").outerHeight();
		var blogHeight = $("#blog-header").outerHeight();
		var videoHeight = $("#video-bg").outerHeight();
				
		/* Full Width */
		($(window).scrollTop() > sliderHeight) ? $('#primary-navbar').addClass('affix') : $('#primary-navbar').removeClass('affix');		
		($(window).scrollTop() > blogHeight) ? $('#primary_navbar_blog').addClass('affix') : $('#primary_navbar_blog').removeClass('affix');
	
		/* Box Layouth */
		($(window).scrollTop() > sliderHeight) ? $('#primary-navbar-box').addClass('affix') : $('#primary-navbar-box').removeClass('affix');		
		($(window).scrollTop() > blogHeight) ? $('#primary_navbar_blog_box').addClass('affix') : $('#primary_navbar_blog_box').removeClass('affix');
		
		/* Video Layouth */
		($(window).scrollTop() > videoHeight) ? $('#primary-navbar-video').addClass('affix') : $('#primary-navbar-video').removeClass('affix');		
				
	});

	/* Count Up Plugin Settings
	-----------------------------------------------------------------------------------*/

	var options = {
		useEasing : true,
		useGrouping : true,
		separator : ' ',
		decimal : '.',
		prefix : '',
		suffix : ''
	};

	// Set the count up numbers
	var countup_1 = new CountUp("counter-1", 0, 4500, 0, 2.5, options);
	var countup_2 = new CountUp("counter-2", 0, 153, 0, 2.5, options);
	var countup_3 = new CountUp("counter-3", 0, 49, 0, 2.5, options);
	var countup_4 = new CountUp("counter-4", 0, 978, 0, 2.5, options);	
	
	var $CounterStart = $('#countup' );

	// If scroll get to the waypoint, the Count up start
	$CounterStart.waypoint(function(direction) {
		if (direction === 'down') {
			countup_1.start();
			countup_2.start();
			countup_3.start();
			countup_4.start();
		}
	}, {
		offset: '100%'
	});


	/* Isotope Plugin Settings
	-----------------------------------------------------------------------------------*/

	if ( $('.grid').length ) {
		// init Isotope
		var $grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				percentPosition: false,
				masonry: {
			    // use outer width of grid-sizer for columnWidth
			    columnWidth: '.grid-item'
			}
		});

		$grid.imagesLoaded().progress( function() {
	        $grid.isotope('layout');
	    });
	};

	// filter functions
	var filterFns = {
		
	  // show if name ends with -ium
	  ium: function() {
	  	var name = $(this).find('.name').text();
	  	return name.match( /ium$/ );
	  }
	};
	
	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});


	/* Magnific Popup Plugin Settings
	-----------------------------------------------------------------------------------*/

	/* image */
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
				preload: [0,6] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
	});

	/* youtube video, vimeo, google maps */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


	/* Bootstrap Collapse
	-----------------------------------------------------------------------------------*/
	
	(function() {
  
	  $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
		if (e.type === 'show'){
		  $(this).addClass('active');
		}else{
		  $(this).removeClass('active');
		}
	  });  

	}).call(this);


	/* Owl Carousel
	-----------------------------------------------------------------------------------*/	

	$('#gift-carousel').owlCarousel({
		loop:true,
		margin:10,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:4,
				nav:false,
				loop:false
			}
		}
	})

	$('#comment-carousel').owlCarousel({
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		touchDrag: true,
		autoplay:true,
		loop:true,
		items:1,
		margin:30,
		stagePadding:30,
		smartSpeed:450
	});


    /* RSVP FORM
    -----------------------------------------------------------------------------------*/
	
	// form validation
	$("#rsvp_form").validate({
		rules: {
			name: {
				required: true,
				minlength: 4
			},
			email: "required",
			
			guest: {
				required: true
			},
			attend: {
				required: true
			},
			message: {
				maxlength: 200
			}
		},
		messages: {
			name:{
				required: "Please enter your name",
				minlength: jQuery.validator.format("At least {0} characters required!")
			},
			email: "Please enter your email",
			guest: "Please select number of guest",
			attend: "Please select event",
			message: {
				maxlength: jQuery.validator.format("Please enter no more than {0} characters!")
			},
		},

		// ajax request
		submitHandler: function (form) {
			
			var data = $(form).serialize();
			var form = $("#rsvp_form");
			
			// loader
			$( ".loader").show();
			
			// ajax request
			$.ajax({
				type: "POST",
				url: "attending",
				data: data,
				dataType: "json",
				success: function (data) {
					
					// if send data successfull
					if(data.status === 'success'){
						
						$( ".loader").hide();
						$( form ).fadeOut( "slow" );
						setTimeout(function() {
							$( ".form-success").show( "slow" );
						}, 300);
						
					// if send data something wrong	
					}else if(data.status === 'error'){
						
						$( ".loader").hide();
						$( form ).fadeOut( "slow" );
						setTimeout(function() {
							$( ".form-error").show( "slow" );
						}, 300);
					}
					
				}
			});
			return false;
		}	   

	});


});