$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {

  $("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
  });
  
  $(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
  });


  $('.slider-head').owlCarousel({
  autoplay: true,
  rtl: document.dir == 'rtl' ? true : false,
  loop:true,
  dots:false,
  nav: true,
  items: 1,
  navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
  
});
 
  $('.brand_slider').owlCarousel({

		autoplay:true,
		rtl:true,
		loop: true,
		margin:18,
		nav:false,
		responsive:{
			0:{
				items:1
			},
      325:{
				items:2
			},
      425:{
				items:3
			},
			480:{
				items:3
			},
      768:{
				items:4
			},
			991:{
				items:5
			},
			1024:{
				items:6
			},
			1440:{
				items:8
			},
      1920:{
				items:8
			}
		}
	}); 
  $('.side-project').owlCarousel({
    items:4,
  autoplay: true,
  loop: true,
  rtl:true,
  nav: false,
  dots: false,
  margin:20,
  center: true,
  responsive: {
      0: {
          items: 1,

      },
      480: {
          items: 1,

      },
      768: {
          items: 1,

      },
      991: {
          items: 2,

      },
      1024: {
          items: 2,


      },
      1200: {
          items: 3,
      }

  }});

});
if ($(window).width() <= 768){ 
    $(".wow").removeClass("wow");
    }