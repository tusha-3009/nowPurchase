$(window).on("load", function () {
  $(".panelBg").fadeOut(500);
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".headerNew").addClass("fixedHeader");
  } else {
    $(".headerNew").removeClass("fixedHeader");
  }
});

$(".teamHover").hover(function () {
  $(".ul").toggleClass("showUl");
});

$(".getInTouch").click(function () {
  $(".getInTouchForm").addClass("openForm");
  $(".submitMsg").addClass("showMsg1");
  // $("body").css("overflow", "hidden");
});
$(".mobWrapBtn").click(function () {
  $(".mobWrapBtn").toggleClass("rot");
  // $("body").css("overflow", "hidden");
});
// $(".mobWrapBtn").click(function () {
//   $(".mobNavBtnCross").toggleClass("rot");
//   // $("body").css("overflow", "hidden");
// });
$(".getInTouch").click(function () {
  $(".getInTouchForm").addClass("visibleBlack");
  // $("body").css("overflow", "hidden");
});

$(".test-next").click(function () {
  $(".test-next").addClass("test-add");
});
$(".getInTouch").click(function () {
  $(".submitMsg ").removeClass("hideMsg");
  $(".submitMsg ").removeClass("showMsg");
});
// document.getElementById("submitButton").addEventListener("click", function () {
//   setTimeout(function () {
//     document.getElementById("offSubmit").classList.add("hideMsg");
//   }, 5000); // 5 seconds delay (5000 milliseconds)
//   event.preventDefault();
// });
$(document).ready(function () {
  $(".canecelBtn").click(function () {
    $(".getInTouchForm").removeClass("openForm");
    setTimeout(function () {
      $(".getInTouchForm").removeClass("visibleBlack");
    }, 1000); // 1 seconds delay (1000 milliseconds)
  });

  $(".form").submit(function (val) {
    val.preventDefault();
    // alert("Submitted");
    $(".submitMsg").addClass("showMsg");
    $(".getInTouchFormWrap").addClass("hideForm");
    setTimeout(function () {
      $("#offSubmit").addClass("hideMsg");
    }, 5000);
    // setTimeout(function () {
    //   $(".getInTouchFormWrap").removeClass("hideForm");
    // }, 5000);
    setTimeout(function () {
      $(".getInTouchForm").removeClass("openForm");
    }, 5000);
    setTimeout(function () {
      $(".getInTouchForm").removeClass("visibleBlack");
    }, 6000);
  });
});
// $('.closePop').click(function(){
//     $('#getInTouchForm').hide(300);
// })

// $(document).ready(function() {
//     var delay = false;
//     var currentPage = 1;
//     var pageCount = $(".section").length;
//     var swipe = document.getElementsByTagName('.section');

//     $(document).on('mousewheel DOMMouseScroll', function(event) {
//         event.preventDefault();
//         if (delay) return;
//         delay = true;
//         setTimeout(function() { delay = false }, 100)

//         var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
//         // console.log(wd);

//         if (wd < 0) {
//             if (currentPage < pageCount) {
//                 currentPage++;
//             }
//         }
//         else {
//             if (1 < currentPage) {
//                 currentPage--;
//             }
//         }

//         $('html,body').animate({
//             scrollTop: $('#sec' + currentPage).offset().top
//         }, 700);

//         $('#tag' + currentPage).addClass('active');
//         for (var i = 1; i <= pageCount; i++) {
//             if (i != currentPage) {
//                 $('#tag' + i).removeClass('active');
//             }
//         }
//     });
// });
$(document).ready(function () {
  // Initialize DataFancybox gallery
  $('[data-fancybox="gallery"]').fancybox({
    buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
    loop: true,
    afterLoad: function (instance, slide) {
      if (slide.src === "#hidden-images") {
        var hiddenImages = $("#hidden-images a");
        if (hiddenImages.length > 0) {
          hiddenImages.each(function () {
            var href = $(this).attr("href");
            instance.addContent({ type: "image", src: href });
          });
        }
      }
    },
  });
});
$(".toggleBtn").hover(function () {
  // if( $(this).hasClass('open') ){
  //     $(this).removeClass('open');
  //     $('.megaMenu').slideUp(300);
  // }
  // else{
  //     $(this).addClass('open');
  //     $('.megaMenu').slideDown(300);
  // }
});
// $('.toggleBtn').mouseout(function(){
//     $(this).removeClass('open');
//     $('.megaMenu').slideUp(300);
// })
$(".toggleBtn")
  .parent("a")
  .click(function () {
    $(".toggleBtn").toggleClass("open");
    $(".megaMenuNew").toggleClass("showMenu");
  });

// $('.mobNavBtn').click(function(){
//     $('.navigationWrap').toggleClass('slide')
// })
$(".mobNavBtn").on("click", function () {
  $(this).closest(".btnWrapNew").toggleClass("active");
  $(".navigationWrapNew").toggleClass("slide");
});
$(".menu_close").on("click", function () {
  $(this).hide(300);
});

$(".imgBoxlider").slick({
  centerMode: true,
  centerPadding: "60px",
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 800,
  centerMode: false,
  // cssEase: "linear",
  draggable: false,
  focusOnSelect: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 1101,
      settings: {
        rows: 1,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        rows: 1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 641,
      settings: {
        centerMode: true,
        variableWidth: true,
        rows: 2,
        slidesToShow: 1,
      },
    },
  ],
});

$(".teamBoxlider").slick({
  swipeToSlide: true,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        infinite: false,
      },
    },
    {
      breakpoint: 420,
      settings: {
        centerPadding: "60px",
        centerMode: true,
        slidesToShow: 1,
      },
    },
  ],
});

$("ul.tabs li").click(function () {
  var currentList = $(this);
  var triggerList = $(this).attr("id");

  if (currentList.hasClass("active")) {
  } else {
    currentList
      .closest(".listWrap")
      .find("ul.tabs li, .listContBox .tab_content")
      .removeClass("active");
    $(
      '.listContBox .tab_content[data-tab="' +
        triggerList +
        '"], ul.tabs li[id="' +
        triggerList +
        '"]'
    ).addClass("active");
  }
});

// -------------Accordion Js--------------
$(".accTrigger").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).next(".accCont").slideUp(300);
  } else {
    $(this).addClass("active");
    $(this).next(".accCont").slideDown(300);
    $(this)
      .closest(".eachAcc")
      .prevAll(".eachAcc")
      .find(".accTrigger")
      .removeClass("active");
    $(this)
      .closest(".eachAcc")
      .nextAll(".eachAcc")
      .find(".accTrigger")
      .removeClass("active");
    $(this)
      .closest(".eachAcc")
      .prevAll(".eachAcc")
      .find(".accCont")
      .slideUp(300);
    $(this)
      .closest(".eachAcc")
      .nextAll(".eachAcc")
      .find(".accCont")
      .slideUp(300);
  }
});

// $('.mediaSlider').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '60px',
//     arrows:false,
//     dots:false,
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 autoplay: true,
//             }
//         }
//     ]
// });
// var path = anime.path('#path2');

// var motionPath = anime({
//   targets: '.arrow11',
//   translateX: path('x'),
//   translateY: path('y'),
//   rotate: path('angle'),
//   duration: 10000,
//   loop: true
// });
if ($(".testSlider").length) {
  var swiper = new Swiper(".testSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      360: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      420: {
        slidesPerView: 1.25,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 1.25,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2.25,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2.3,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 2.02,
        spaceBetween: 50,
      },
      1366: {
        slidesPerView: 2.25,
        spaceBetween: 50,
      },
      1440: {
        slidesPerView: 2.15,
        spaceBetween: 50,
      },
      1500: {
        slidesPerView: 2.01,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".test-next",
      prevEl: ".test-prev",
    },
  });
}
// $('.testSlider').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     centerMode: true,
//     autoplay: true,
//     centerPadding: '200px',
//     arrows:true,
//     dots:false,
//     responsive: [
//         {
//             breakpoint: 1101,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 992,
//             settings: {
//                 slidesToShow: 2,
//             }
//         },
//         {
//             breakpoint: 641,
//             settings: {
//                 slidesToShow: 1,
//             }
//         }
//     ],
//     prevArrow: '<button class="slide-arrow prev-arrow"></button>',
//     nextArrow: '<button class="slide-arrow next-arrow"></button>'
// });

const animatedSections = document.querySelectorAll(".animated-section");
var sechead = document.querySelectorAll(".sechead");
var circle1 = document.querySelectorAll(".idcircle1");
var circle2 = document.querySelectorAll(".idcircle2");
var ellipse = document.querySelectorAll(".ellipse");
var circle = document.querySelectorAll(".ideacircle");
var trmain = document.querySelectorAll(".trMain");

window.addEventListener("scroll", function () {
  var clr1 = document.getElementById("clr01");
  var clr2 = document.getElementById("clr02");
  var clr3 = document.getElementById("clr03");
  var clr4 = document.getElementById("clr04");
  var clr5 = document.getElementById("clr05");
  var clr6 = document.getElementById("clr06");
  var car = document.getElementById("target");
  var scrollPosition = window.scrollY;
  // if (scrollPosition > 1100) {
  //     // console.log("running")
  //     car.style.opacity = 1;
  // }
  // else {
  //     car.style.opacity = 0;
  // }
  //     if (scrollPosition > 550) {
  //         clr1.style.opacity = 1;
  //         clr1.style.transform = "translateY(0)";
  //     } else {
  //         clr1.style.opacity = 0;
  //         clr1.style.transform = "translateY(100px)";
  //     }
  //     if (scrollPosition > 1490) {
  //         clr2.style.opacity = 1;
  //         clr2.style.transform = "translateY(0)";
  //     } else {
  //         clr2.style.opacity = 0;
  //         clr2.style.transform = "translateY(100px)";
  //     }
  //     if (scrollPosition > 1490) {
  //         clr2.style.opacity = 1;
  //         clr2.style.transform = "translateY(0)";
  //     } else {
  //         clr2.style.opacity = 0;
  //         clr2.style.transform = "translateY(100px)";
  //     }
  //     if (scrollPosition > 1940) {
  //         clr3.style.opacity = 1;
  //         clr3.style.transform = "translateY(0)";
  //     } else {
  //         clr3.style.opacity = 0;
  //         clr3.style.transform = "translateY(100px)";
  //     }
  //     if (scrollPosition > 1300) {
  //         clr4.style.opacity = 1;
  //         clr4.style.transform = "translateY(0)";
  //     } else {
  //         clr4.style.opacity = 0;
  //         clr4.style.transform = "translateY(100px)";
  //     }
  //     if (scrollPosition > 1660) {
  //         clr5.style.opacity = 1;
  //         clr5.style.transform = "translateY(0)";
  //     } else {
  //         clr5.style.opacity = 0;
  //         clr5.style.transform = "translateY(100px)";
  //     }
  //     if (scrollPosition > 2200) {
  //         clr6.style.opacity = 1;
  //         clr6.style.transform = "translateY(0)";
  //     } else {
  //         clr6.style.opacity = 0;
  //         clr6.style.transform = "translateY(100px)";
  //     }
});

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

gsap.defaults({ ease: "none" });

const pulses = gsap
  .timeline({
    defaults: {
      scale: 2,
      autoAlpha: 1,
      transformOrigin: "center",
      ease: "elastic(2.5, 1)",
    },
  })
  .to(".ball02, .text01", {}, 0.84)
  .to(".ball03, .text02", {}, 1.36)
  .to(".ball04, .text03", {}, 1.92);

const main = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top center",
      end: "bottom center",
      // align: "#svg",
    },
  })
  .to("#target", {
    duration: 4,
    motionPath: {
      path: "#mainPath",
      align: "#mainPath",
      alignOrigin: [0.8, 0.8],
      autoRotate: true,
    },
  });
// const path = [{ x: 100, y: 100 }, { x: 300, y: 200 }, { x: 500, y: 100 }];
// const boxes = document.querySelectorAll(".box");
// gsap.to("#a11", {
//     duration: 10,
//     motionPath: {
//         path: "#ellipse-path",
//         align: "#ellipse-path",
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true,
//         loop: true
//     },
//     // scale: 1.5,
//     // yoyo: true,
//     repeat: 1,
//     repeatDelay: 0.75,
//     ease: "linear",
//     loop: true
// });

//  if(window.innerWidth > 1024 ){
//     // console.log("hii i am souvik")
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // If the section is in view, run the animation and unobserve it
//             animateSection(entry.target);
//             observer.unobserve(entry.target);
//           }
//         });
//       });
//       animatedSections.forEach((section) => {
//         observer.observe(section);
//       });

//     function animateSection(section) {

//         // if(window.innerWidth < 1024){
//         //     return;
//         // }

//         anime({
//             targets: '.header .container',
//             opacity: [0, 1],
//             delay: 1000,
//             duration: 4000
//         })
//         anime({
//             targets: '.headerBotStripe',
//             translateY: [-70, 0],
//             opacity: [0, 1],
//             delay: 2000,
//             duration: 4000
//         })
//         anime({
//             targets: '.teamBoxWrap',
//             translateY: [200, 0],
//             // delay: 1000,
//             duration: 4000
//         })
//         anime({
//             targets: sechead,
//             translateX: [-200, 0],
//             // delay: 1000,
//             duration: 4000
//         })
//         anime({
//             targets: '.titleText',
//             translateX: [-400, 0],
//             // delay: 300,
//             duration: 4000
//         })
//         anime({
//             targets: '.leftBannerCont .titleText',
//             translateX: [0, 0],
//             // delay: 300,
//             duration: 4000
//         })

//         anime({
//             targets: '.marketbnr .leftBannerCont, .mapSec .mapleft, .triangleTopLeftBg .sechead',
//             translateX: [-200, 0],
//             opacity: [0, 1],
//             // delay: 300,
//             duration: 4000
//         })
//         anime({
//             targets: '.marketbnr .rightBannerImg, .mapSec .mapRight, .triangleTopLeftBg .keyWrap',
//             translateX: [200, 0],
//             opacity: [0, 1],
//             // delay: 300,
//             duration: 4000
//         })
//         anime({
//             targets: '.siteMapRow',
//             translateY: [200, 0],
//             duration: 4000
//         })

//         anime({
//             targets: '.trWrap',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             duration: 4000
//         })

//         anime({
//             targets: '.privilegeSectionWrap .eachBoxWrap',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             duration: 4000
//         })
//         anime({
//             targets: '.listMenuWrap',
//             translateX: [-200, 0],
//             opacity: [0, 1],
//             duration: 4000
//         })
//         anime({
//             targets: '.listContBox',
//             translateX: [200, 0],
//             opacity: [0, 1],
//             duration: 4000
//         })
//         anime({
//             targets: '.casSecM .listContBox',
//             translateX: [0, 0],
//             opacity: [0, 1],
//             duration: 4000
//         })
//         anime({
//             targets: '.caseEachWrap',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             duration: 4000
//         })
//         anime({
//             targets: '.imgBoxlider',
//             translateX: [400, 0],
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(1), .priceSec .pricewrapHolder, .sollutionWrap .eachSol:nth-child(1), .eachBoxWrap .eachBox:nth-child(1)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 500,
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(2), .priceSec .pricewrapHolder2, .sollutionWrap .eachSol:nth-child(2), .eachBoxWrap .eachBox:nth-child(2)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 900,
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(3), .sollutionWrap .eachSol:nth-child(3), .eachBoxWrap .eachBox:nth-child(3)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 1300,
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(4), .sollutionWrap .eachSol:nth-child(4), .eachBoxWrap .eachBox:nth-child(4)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 1700,
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(5), .sollutionWrap .eachSol:nth-child(5), .eachBoxWrap .eachBox:nth-child(5)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 2100,
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(6), .sollutionWrap .eachSol:nth-child(6), .eachBoxWrap .eachBox:nth-child(6)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 2500,
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(7), .sollutionWrap .eachSol:nth-child(7), .eachBoxWrap .eachBox:nth-child(7)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 2900,
//             duration: 4000
//         })
//         anime({
//             targets: '.trBox:nth-child(8), .sollutionWrap .eachSol:nth-child(8), .eachBoxWrap .eachBox:nth-child(8)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 3300,
//             duration: 4000
//         })

//         anime({
//             targets: '.cultureRow .imgBox',
//             translateX: [-100, 0],
//             duration: 1500,
//             opacity:[0,1]
//         })
//         anime({
//             targets: '.cultureRow .contBox',
//             translateX: [100, 0],
//             duration: 1500,
//             opacity:[0,1]
//         })
//         anime({
//             targets: '.cultureRow .contBox .titleText',
//             translateX: [0, 0],
//             duration: 4000
//         })
//         anime({
//             targets: '.founderCont  .titleText',
//             translateX: [0, 0],
//             duration: 4000
//         })
//         anime({
//             targets: '.founderCont',
//             translateX: [-100, 0],
//             duration: 4000
//         })
//         anime({
//             targets: '.founderImg',
//             translateX: [100, 0],
//             duration: 4000
//         })
//         anime({
//             targets: '.testCulture  .testSlider',
//             translateX: [-200, 0],
//             duration: 4000
//         })

//         anime({
//             targets: '.testSlider',
//             translateX: [200, 0],
//             duration: 4000
//         })
//         anime({
//             targets: '.glimpsRowWrap',
//             translateY: [200, 0],
//             duration: 4000
//         })

//         anime({
//             targets: '.eachCM:nth-child(1)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             duration: 2500
//         })
//         anime({
//             targets: '.eachCM:nth-child(2)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             duration: 3000
//         })
//         anime({
//             targets: '.eachCM:nth-child(3)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             duration: 3500
//         })

//         anime({
//             targets: '.mediaSectionWrap .mediaWrap .eachMediaBox:nth-child(1)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 300,
//             duration: 2500
//         })
//         anime({
//             targets: '.mediaSectionWrap .mediaWrap .eachMediaBox:nth-child(2)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 500,
//             duration: 2500
//         })
//         anime({
//             targets: '.mediaSectionWrap .mediaWrap .eachMediaBox:nth-child(3)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 700,
//             duration: 2500
//         })
//         anime({
//             targets: '.mediaSectionWrap .mediaWrap .eachMediaBox:nth-child(4)',
//             translateY: [200, 0],
//             opacity: [0, 1],
//             delay: 900,
//             duration: 2500
//         })

//         anime({
//             targets: '.investorWrap',
//             translateX: [200, 0],
//             // delay: 300,
//             duration: 2000
//         })

//         anime({
//             targets: '.addr',
//             translateX: [200, 0],
//             // delay: 300,
//             duration: 2000
//         })

//         anime({
//             targets: '.mainCircleBg',
//             scale: [0, 1 ],
//             delay: 350,
//             duration: 750
//         })
//         anime({
//             targets: '.bigImg',
//             scale: [0, 1 ],
//             delay: 1000,
//             duration: 1000
//         });
//         anime({
//             targets: '.experinceStepWrap',
//             scale: [0, 1 ],
//             delay: 2000,
//             duration: 1600
//         });

//         // anime({
//         //     targets: trmain,
//         //     delay:500,
//         //     scale:[0 , 1],
//         //     duration:2000,
//         // });
// anime({
//     targets: circle,
//     opacity:[0,1],
//     delay:2000,
//     duration:2000,
// });

//         anime({
//             targets: '.footerSection',
//             translateY: [300, 0],
//             // delay: 1000,
//             duration: 4000
//         })
//         // anime({
//         //     targets: ".keyWrap",
//         //     translateX: [100, 0],
//         //     duration:2000,
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(1)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:100
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(2)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:200
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(3)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:400
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(4)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:600
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(5)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:100
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(6)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:200
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(7)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:400
//         // });
//         // anime({
//         //     targets: ".trBox:nth-child(8)",
//         //     translateY: [300, 0],
//         //     duration:2000,
//         //     delay:600
//         // });
//         anime({
//             targets: ellipse,
//             scale: [0,1],
//             opacity:[0,1],
//             delay: 1000,
//             duration:2000,
//         });
//         anime({
//             targets: ".trustSwrap",
//             scale: [0,1],
//             opacity:[0,1],
//             delay: 4000,
//             duration:2000,
//         });
//         anime({
//             targets: ".textCenterWrap",
//             scale: [0,1],
//             opacity:[0,1],
//             delay: 4000,
//             duration:2000,
//         });
//         // anime({
//         //     targets: ".mapleft",
//         //     translateX: [-1000, 0],
//         //     opacity:[0,1],
//         //     duration:2000,
//         // });
//         // anime({
//         //     targets: ".mapRight",
//         //     translateX: [1000, 0],
//         //     opacity:[0,1],
//         //     duration:2000,
//         // });
//         // anime({
//         //     targets: ".pricewrap",
//         //     translateY: [100, 0],
//         //     opacity:[0,1],
//         //     duration:3000,
//         // });
//         anime({
//             targets: ".arrow11",
//             keyframes: [
//                 { translateX: -8, translateY: 4, },
//               { translateX: -25, translateY: 15, },
//               { translateX: -30, translateY: 20, },
//                 // {translateY: 4},
//               ],
//             duration:4000,
//             delay: 6000,
//         });
//         anime({
//             targets: ".arrow12",
//             keyframes: [
//                 { translateX: -8, translateY: 4, },
//               { translateX: -25, translateY: 20, },
//               { translateX: -50, translateY: 40, },
//                 // {translateY: 4},
//               ],
//             duration:4000,
//             delay: 6000,
//         });
//         anime({
//             targets: ".arrow13",
//             keyframes: [
//                 { translateX: -8, translateY: 4, },
//               { translateX: -25, translateY: 12, },
//               { translateX: -40, translateY: 20, },
//                 // {translateY: 4},
//               ],
//             duration:4000,
//             delay: 6000,
//         });
//         anime({
//             targets: ".arrow14",
//             keyframes: [
//                 { translateX: 10, translateY: -6, },
//                 { translateX: 20, translateY: -12, },
//                 { translateX: 30, translateY: -19, },
//               ],
//             duration:4000,
//             delay: 6000,
//         });
//         anime({
//             targets: ".arrow15",
//             keyframes: [
//                 { translateX: 10, translateY: -8, },
//                 { translateX: 20, translateY: -16, },
//                 { translateX: 30, translateY: -25, },
//               ],
//             duration:4000,
//             delay: 6000,
//         });
//         anime({
//             targets: ".arrow16",
//             keyframes: [
//                 { translateX: 10, translateY: -4, },
//                 { translateX: 20, translateY: -10, },
//                 { translateX: 30, translateY: -15, },
//               ],
//             duration:4000,
//             delay: 6000,
//         });
//         // anime({
//         //     targets: ".trBox:nth-child(8)",
//         //     translateY: [100, 0],
//         //     duration:2000,
//         //     delay:600
//         // });
//         var path = anime.path('.motion-path-demo path');

//       }
//  }

//     // Variable to store the animation instance
//     var animationInstance;

//     // Function to start the animation
//     function startAnimation() {
//         animationInstance = animateSection();
//     }

//     // Function to stop the animation
//     function stopAnimation() {

//         if (animationInstance) {
//         console.log("hii souvik")
//         animationInstance.pause();
//         }
//     }

// // Function to check the device screen width and conditionally start or stop the animation
// function checkScreenWidth() {
//     // Get the device's screen width
//     var screenWidth = window.innerWidth;

//     // Start or stop the animation based on the screen width
//     if (screenWidth <= 1024) {

//       stopAnimation();
//     } else {
//       startAnimation();
//     }
//   }

//   // Call the function initially to check the screen width and conditionally start or stop the animation
//   checkScreenWidth();

//   // Add a resize event listener to dynamically check the screen width and conditionally start or stop the animation
//   window.addEventListener('resize', checkScreenWidth);

$(".counter").countUp();

$("ul.tabs li").click(function () {
  var currentList = $(this);
  var triggerList = $(this).attr("id");

  if (currentList.hasClass("active")) {
  } else {
    currentList
      .closest(".listWrap")
      .find("ul.tabs li, .listContBox .tab_content")
      .removeClass("active");
    $(
      '.listContBox .tab_content[data-tab="' +
        triggerList +
        '"], ul.tabs li[id="' +
        triggerList +
        '"]'
    ).addClass("active");
  }
});

AOS.init({
  duration: 1200,
});

const aos = document.querySelectorAll(".aosAnim");
const observer = new IntersectionObserver(
  /*When ever any element with aos class is visible in the dom,
         or get out of the dom this callback
        executes.
        
        */
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ltr");
        //   entry.target.classList.remove("ltr-out");
      } else {
        //   entry.target.classList.add("ltr-out");
        //   entry.target.classList.remove("ltr");
      }
    });
  },
  {
    /*if 30% of the observing element is visible, the callback above only executes*/
    threshold: 0.3,
    // rootMargin: "-10px",
  }
);
/*Observing every element with aos class*/
aos.forEach((el) => {
  observer.observe(el);
});

$("[data-fancybox]").fancybox();
