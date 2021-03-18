// FOR TOGGLE SWITCH DARK & LIGHT THEME
const btn = document.querySelector("#night__mood__2");
const theme = document.querySelector("#dark-theme");
const storedTheme = localStorage.getItem('#dark-theme');
    if(storedTheme){
        theme.href = storedTheme;
    }
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "css/home-2.css") {
    theme.href = "css/home-2-night-mood.css";
  } else {
    theme.href = "css/home-2.css";
  }
   localStorage.setItem('#dark-theme',theme.href)  

});




// FOR RESPONSIVE DROPDOWN MENU
$(function () {
    $(".navbar__dropdown a").click(function() {
        $(this).next().toggle();
        if($('.dropdown__list:visible').length > 1) {
            $('.dropdown__list:visible').hide();
            $(this).next().show();
        }
    }); 
});


// FOR DROPDOWN INDICATOR ROTATE
$(".dropdown__indicator").on('click', function(){
    $(".dropdown__indicator").removeClass('active');
    $(this).addClass('active');
})


// FOR RESPONSIVE SLIDE NAVBAR
$(".navbar__toggle").on('click', function(){
    $(".navbar__slide").addClass('active');
    $(".body").addClass('active');
    $(".navbar__remove").on('click', function(){
        $(".navbar__slide").removeClass('active');
        $(".body").removeClass('active');
    })
})


// FOR CURRENT PAGE ACTIVE NAVBAR
$(document).ready(function() {
    var url = window.location.href;
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    url = url.substr(url.lastIndexOf("/") + 1);

    if(url == ''){
        url = 'index.html';
    }

    $('.navbar__item').each(function(){
        var href = $(this).find('a').attr('href');

        if(url == href){
            $(this).addClass('active');
        }
    });
});


// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 10){
        $(".navbar__part").addClass("navbar-fixed");
    }else{
        $(".navbar__part").removeClass("navbar-fixed");
    }
});


// FOR TOGGLE SWITCH DARK & LIGHT THEME
// const btn = document.querySelector(".night__mood");
// const theme = document.querySelector("#dark-theme");
// const storedTheme = localStorage.getItem('#dark-theme');
//     if(storedTheme){
//         theme.href = storedTheme;
//     }
// btn.addEventListener("click", function() {
//   if (theme.getAttribute("href") == "css/style.css") {
//     theme.href = "css/night-mood.css";
//   } else {
//     theme.href = "css/style.css";
//   }
//    localStorage.setItem('#dark-theme',theme.href)  

// });




// FOR BACK2TOP BUTTON
$(window).on("scroll", function(){
    var scroll = $(this).scrollTop();
    if(scroll > 500){
        $(".scroll__top").show();
    }else{
        $(".scroll__top").hide();
    }
});


// FOR RESUME CATEGORY ACTIVE BUTTON
$(".cate__btn").on("click", function(){
    $(".cate__btn").removeClass("active");
    $(this).addClass("active");
});


// FOR RESUME CATEGORY ACTIVE CONTENT
function filter(active) {
    hide = document.getElementsByClassName('cate__active');
    for (i = 0; i < hide.length; i++) {
      hide[i].style.display = 'none';
    }
  
    let show = document.getElementsByClassName(active);
    for (i = 0; i < hide.length; i++) {
      show[i].style.display = 'block';
    }
}

// FOR FAQ SECTION ACCORDION
jQuery(document).ready(function($){
    var panels = $(".faq__ans").hide();
    panels.first().show();
    
     $(".faq__que").click(function(){
         var $this = $(this);
         panels.slideUp();
         $this.next().slideDown();
    });
});


// FOR PORTFOLIO CATEGORY ACTIVE MENU
$(".menu").on("click", function(){
    $(".menu").removeClass("active");
    $(this).addClass("active");
});
  

// FOR PORTFOLIO PAGINATION
$(".page__link").on("click", function(){
    $(".page__link").removeClass("active");
    $(this).addClass("active");
});
  





// ==========================================================







$('.counter-number').counterUp({
    delay: 80,
    time: 1500
});






// ========================================CAROSEL=======================================



// FOR PORTFOLIO SECTION SLIDER
$('.portfolio__slide').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    nextArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    prevArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
});


  // FOR TESTIMONIAL SLIDER
  $('.client__slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
});


// FOR FEATURE SECTION SLIDER
$('.skill__slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    fade: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
});


// FOR BLOG SUGGEST SLIDER
$('.suggest__slider').slick({
  dots: false,
  infinite: true,
  adaptiveHeight: false,
  variableWidth: true,
  speed: 800,
  autoplay: true,
  arrows: true,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});

// ======================================================
//             PAGE LODER JS
// ======================================================

let spinnerWrapper = document.querySelector('.spinner__wrapper');

window.addEventListener('load', function () {
    spinnerWrapper.style.display = 'none';
});

// ======================================================
//             PAGE LODER JS END
// ======================================================


// ======================================================
//             LOGIN/RAG JS
// ======================================================
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container__1");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// ======================================================
//             LOGIN/RAG END JS
// ======================================================