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
  autoplay: false,
  rtl: document.dir == 'rtl' ? true : false,
  loop:false,
  dots:false,
  nav: true,
  items: 1,
  navText: ["<span class='fa fa-chevron-right'></span>","<span class='fa fa-chevron-left'></span>"]
  
});
 
  $('.brand_slider').owlCarousel({
		items:8,
		autoplay:false,
		rtl:true,
		loop: true,
		margin:18,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:8
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
  autoplay: false,
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
          items: 2,

      },
      992: {
          items: 3,

      },
      1200: {
          items: 3,


      },
      1400: {
          items: 4,


      }
  }});

});
