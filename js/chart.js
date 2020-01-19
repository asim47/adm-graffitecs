  jQuery(document).ready(function($){
      $('[data-toggle="popover"],.gtx-slide.swiper-slide-active').popover({html: true,container: 'body',placement: 'bottom'});
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      simulateTouch: true,
      slideToClickedSlide: true,
      loop: true,
      slidesPerView: 3,
      loopAdditionalSlides: 10,
      coverflowEffect: {
        rotate: 0,
         stretch: 0,
         depth: 34,
         modifier: 12,
         slideShadows : false,

      },
      breakpoints: {
        1024: {
          spaceBetween: 20,
          coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows : false,
          },
        },
        480: {
        slidesPerView: 1
        }
      },
      navigation: {
       nextEl: '.swiper-next',
       prevEl: '.swiper-prev',
     },
      pagination: {
        el: '.swiper-pagination-main',
        type: 'bullets',
        clickable: true
      }
  });

  var sp = {
    grabCursor: true,
    centeredSlides: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    loop: true,
    slidesPerView: 3,
    loopAdditionalSlides: 5,
    spaceBetween: 0,
    breakpoints: {
      480: {
      slidesPerView: 1
      }
    },
    pagination: {
      el: '.swiper-pagination-2',
      type: 'bullets',
      clickable: true
    },
    navigation: {
     nextEl: '.swiper-next-2',
     prevEl: '.swiper-prev-2',
   },
    on: {
  slideChangeTransitionStart: function () {
    $(".slider-type-3").removeClass("animate-now")
  },
  init: function () {
    $(".slider-type-2 ").removeClass("check-box")
  },
  slideChange: function () {
    if (!($(".slider-type-2 ").hasClass("check-box"))){
      setTimeout(function(){
          slidechangesalt ()
      },500);
    }

  },
}
  }
  var swiper2 = new Swiper('.swiper-container2', sp);


  
  var sp2 = {
    grabCursor: true,
    centeredSlides: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    loop: true,
    slidesPerView: 4,
    loopAdditionalSlides: 5,
    spaceBetween: 0,
    breakpoints: {
      1024: {
      slidesPerView: 3
    },
    480: {
    slidesPerView: 1
    }
  },
  navigation: {
   nextEl: '.swiper-next-3',
   prevEl: '.swiper-prev-3',
 },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  on: {
      slideChange: function () {

        $('.gtx-slide.swiper-slide-active').popover('destroy');
        setTimeout(function(){
            $('.gtx-slide.swiper-slide-active').popover({html: true,container: 'body'});
        },500);
      }
    }
  }
  var swiper3 = new Swiper('.swiper-container3', sp2);
/*
  $(".swiper-container").on('click','.swiper-slide', function () {
    var $this = $(this);
     if ($this.hasClass('clicked')){
         // code for double click
         return;
     }else{
          $this.addClass('clicked');
          $(".slider-type-2").removeClass("animate-now");
          $(".slider-type-3").removeClass("animate-now");
          setTimeout(function(){
            $this.removeClass('clicked');
            $(".slider-type-3").removeClass("check-box");
              slidechanges ()
          },500);
                  return false;
     }//end of else
  });*/
  swiper.on('slideChange', function () {
    setTimeout(function(){
    $(".slider-type-3").removeClass("check-box");
        slidechanges ()
    },500)
});
swiper.on('slideChangeTransitionStart', function () {
  $(".slider-type-2").removeClass("animate-now")
  $(".slider-type-3").removeClass("animate-now")
});

/*
$(".swiper-container2").on('click','.swiper-slide', function () {
  var $this = $(this);
   if ($this.hasClass('clicked')){
       // code for double click
       return;
   }else{
        $this.addClass('clicked');
        $(".slider-type-3").removeClass("animate-now");
        setTimeout(function(){
          $this.removeClass('clicked');
            slidechangesalt ()
        },500);
                return false;
   }//end of else


});


$(".swiper-container3").on('click','.swiper-slide', function () {
  var $this = $(this);
   if ($this.hasClass('clicked')){
       // code for double click
       return;
   }else{
        $this.addClass('clicked');
       //code for single click
        setTimeout(function() {
                $this.removeClass('clicked'); },500);
                return false;
   }//end of else
});*/
/*$(".gtx-inner-container").on('click','.gtx-chart-box', function () {
	
	var $this = $(this);
 
   if ($this.hasClass('clicked')){
	   // code for double click
	   alert("!!double!");
       return;
   }else{
        $this.addClass('clicked');
       //code for single click
        alert("!!single!");
        setTimeout(function() {
                $this.removeClass('clicked'); },500);
                return false;
   }//end of else
});*/

function slidechanges () {
$('.gtx-slide.swiper-slide-active').popover('destroy');
$(".slider-type-2").addClass("check-box");
$("html, body").animate({ scrollTop: ($('.swiper-container').offset().top) - 50 }, 600);
  $(".slider-type-2").addClass("animate-now");
  $(".slider-type-3").removeClass("animate-now");
  swiper2.destroy(true, true);
  swiper3.destroy(true, true);
  $(".swiper-container2 .swiper-wrapper .swiper-slide").remove();
  $(".swiper-container3 .swiper-wrapper .swiper-slide").remove();
  var a = $(".swiper-container .swiper-slide-active").data('type');
  var b = $(".swiper-container2 .swiper-wrapper");
  $('.gtx-fetch-folder .'+a).clone().appendTo(b);
  swiper2 = new Swiper('.swiper-container2', sp);
  $('.gtx-slide.swiper-slide-active').popover({html: true,container: 'body'});
}
function slidechangesalt () {
  $('.gtx-slide.swiper-slide-active').popover('destroy');
  $(".slider-type-2").removeClass("check-box");
  $(".slider-type-3").addClass("check-box");
  $("html, body").animate({ scrollTop: $('.slider-type-2').offset().top }, 600);
  $(".slider-type-3").addClass("animate-now");
  swiper3.destroy(true, true);
  $(".swiper-container3 .swiper-wrapper .swiper-slide").remove();
  var a = $(".swiper-container2 .swiper-slide-active").data('type');
  var b = $(".swiper-container3 .swiper-wrapper");
  $('.gtx-fetch-folder2 .'+a).clone().appendTo(b);
  swiper3 = new Swiper('.swiper-container3', sp2);
  $('.gtx-slide.swiper-slide-active').popover({html: true,container: 'body'});
}
});
