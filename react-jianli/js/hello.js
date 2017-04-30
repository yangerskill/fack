jQuery(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
				});
			});
			
								   $( "span.menu" ).click(function() {
									 $( "ul.nav1" ).slideToggle( 300, function() {
									 // Animation complete.
									  });
									 });
									 

				$(document).ready(function() {
					$("#owl-demo1").owlCarousel({
						items : 1,
						lazyLoad : false,
						autoPlay : true,
						navigation : false,
						navigationText :  false,
						pagination : true,
					});
				});
	
			
				$(document).ready(function() {
					$("#owl-demo3").owlCarousel({
						items : 1,
						lazyLoad : false,
						autoPlay : true,
						navigation : false,
						navigationText :  true,
						pagination :true,
					});
				});
		
									$(document).ready(function () {
										$('#horizontalTab').easyResponsiveTabs({
											type: 'default', //Types: default, vertical, accordion           
											width: 'auto', //auto or any width like 600px
											fit: true   // 100% fit in a container
										});
									});
									
	
									$(document).ready(function() {
										/*
										var defaults = {
								  			containerID: 'toTop', // fading element id
											containerHoverID: 'toTopHover', // fading element hover id
											scrollSpeed: 1200,
											easingType: 'linear' 
								 		};
										*/
										
										$().UItoTop({ easingType: 'easeOutQuart' });
										
									});
					