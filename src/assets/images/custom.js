// $(".toggleBtn").hover(function () {
//   if ($(this).hasClass("open")) {
//     $(this).removeClass("open");
//     $(".megaMenu").slideUp(300);
//   } else {
//     $(this).addClass("open");
//     $(".megaMenu").slideDown(300);
//   }
// });
// $(".toggleBtn").mouseout(function () {
//   $(this).removeClass("open");
//   $(".megaMenu").slideUp(300);
// });
// $(".toggleBtn").click(function () {
//   $(this).toggleClass("open");
//   $(".megaMenu").slideToggle(300);
// });

$(".mobNavBtn").click(function () {
  $(".navigationWrap").toggleClass("slide");
});
$(".mobNavBtn").on("click", function () {
  $(this).toggleClass("active");
  $(".navigationWrap").toggleClass("slide");
});
$(".menu_close").on("click", function () {
  $(this).hide(300);
});

$(".imgBoxlider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  centerPadding: "60px",
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".teamBoxlider").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 641,
      settings: {
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

if ($(".testSlider").length) {
  var swiper = new Swiper(".testSlider", {
    // slidesPerView: 1.5,
    spaceBetween: 16,
    breakpoints: {
      360: {
        slidesPerView: 2,
      },
      1023: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2.3,
      },
    },
    navigation: {
      nextEl: ".test-next",
      prevEl: ".test-prev",
    },
  });
}

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
  // console.log(scrollPosition)
  if (scrollPosition > 1100) {
    car.style.opacity = 1;
  } else {
    car.style.opacity = 0;
  }
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

// Create an intersection observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the section is in view, run the animation and unobserve it
      animateSection(entry.target);
      observer.unobserve(entry.target);
    }
  });
});
animatedSections.forEach((section) => {
  observer.observe(section);
});

function animateSection(section) {
  // anime({
  //   targets: '.motion-path-demo .el',
  //   translateX: path('x'),
  //   translateY: path('y'),
  //   rotate: path('angle'),
  //   easing: 'linear',
  //   duration: 5000,
  // });
  anime({
    targets: ".headerBotStripe",
    translateY: [-45, 0],
    delay: 1500,
    duration: 500,
  });
  // anime({
  //     targets: '.bannerContent .leftBannerCont',
  //     translateX: [-500, 0],
  //     duration: 3000
  // })
  // anime({
  //     targets: '.bannerContent .rightBannerImg',
  //     translateX: [500, 0],
  //     duration: 3000
  // })

  // anime({
  //     targets: '.titleText',
  //     translateX: [-1500, 0],
  //     delay: 1000,
  //     duration: 1600
  // })
  anime({
    targets: ".businessSectionWrap .imgBoxWrap",
    translateX: [2500, 0],
    delay: 2000,
    duration: 600,
  });

  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(1)',
  //     translateY: [500, 0],
  //     delay: 600,
  //     duration: 2000
  // })
  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(2)',
  //     translateY: [500, 0],
  //     delay: 650,
  //     duration: 2000
  // })
  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(3)',
  //     translateY: [500, 0],
  //     delay: 700,
  //     duration: 2000
  // })
  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(4)',
  //     translateY: [500, 0],
  //     delay: 750,
  //     duration: 2000
  // })
  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(5)',
  //     translateY: [500, 0],
  //     delay: 800,
  //     duration: 2000
  // })
  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(6)',
  //     translateY: [500, 0],
  //     delay: 850,
  //     duration: 2000
  // })
  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(7)',
  //     translateY: [500, 0],
  //     delay: 900,
  //     duration: 2000
  // })
  // anime({
  //     targets: '.eachBoxWrap .eachBox:nth-child(8)',
  //     translateY: [500, 0],
  //     delay: 950,
  //     duration: 2000
  // })

  anime({
    targets: ".mainCircleBg",
    scale: [0, 1],
    delay: 350,
    duration: 750,
  });
  anime({
    targets: ".bigImg",
    scale: [0, 1],
    delay: 1000,
    duration: 1000,
  });
  anime({
    targets: ".experinceStepWrap",
    scale: [0, 1],
    delay: 2000,
    duration: 1600,
  });

  anime({
    targets: circle1,
    translateX: [0, 600],
    translateY: [0, -400],
    delay: 2000,
    opacity: [0, 1],
  });

  anime({
    targets: circle2,
    translateX: [0, -600],
    translateY: [0, 300],
    delay: 2000,
    opacity: [0, 1],
  });
  // anime({
  //     targets: trmain,
  //     delay:500,
  //     scale:[0 , 1],
  //     duration:2000,
  // });
  anime({
    targets: circle,
    opacity: [0, 1],
    delay: 2000,
    duration: 2000,
  });
  // anime({
  //     targets: ".keyWrap",
  //     translateX: [100, 0],
  //     duration:2000,
  // });
  // anime({
  //     targets: ".trBox:nth-child(1)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:100
  // });
  // anime({
  //     targets: ".trBox:nth-child(2)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:200
  // });
  // anime({
  //     targets: ".trBox:nth-child(3)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:400
  // });
  // anime({
  //     targets: ".trBox:nth-child(4)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:600
  // });
  // anime({
  //     targets: ".trBox:nth-child(5)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:100
  // });
  // anime({
  //     targets: ".trBox:nth-child(6)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:200
  // });
  // anime({
  //     targets: ".trBox:nth-child(7)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:400
  // });
  // anime({
  //     targets: ".trBox:nth-child(8)",
  //     translateY: [300, 0],
  //     duration:2000,
  //     delay:600
  // });
  // anime({
  //     targets: ellipse,
  //     scale: [0,1],
  //     opacity:[0,1],
  //     delay: 1000,
  //     duration:2000,
  // });
  anime({
    targets: ".trustSwrap",
    scale: [0, 1],
    opacity: [0, 1],
    delay: 4000,
    duration: 2000,
  });
  anime({
    targets: ".textCenterWrap",
    scale: [0, 1],
    opacity: [0, 1],
    delay: 4000,
    duration: 2000,
  });
  // anime({
  //     targets: ".mapleft",
  //     translateX: [-1000, 0],
  //     opacity:[0,1],
  //     duration:2000,
  // });
  // anime({
  //     targets: ".mapRight",
  //     translateX: [1000, 0],
  //     opacity:[0,1],
  //     duration:2000,
  // });
  // anime({
  //     targets: ".pricewrap",
  //     translateY: [100, 0],
  //     opacity:[0,1],
  //     duration:3000,
  // });
  anime({
    targets: ".arrow11",
    keyframes: [
      { translateX: -8, translateY: 4 },
      { translateX: -25, translateY: 15 },
      { translateX: -30, translateY: 20 },
      // {translateY: 4},
    ],
    duration: 4000,
    delay: 6000,
  });
  anime({
    targets: ".arrow12",
    keyframes: [
      { translateX: -8, translateY: 4 },
      { translateX: -25, translateY: 20 },
      { translateX: -50, translateY: 40 },
      // {translateY: 4},
    ],
    duration: 4000,
    delay: 6000,
  });
  anime({
    targets: ".arrow13",
    keyframes: [
      { translateX: -8, translateY: 4 },
      { translateX: -25, translateY: 12 },
      { translateX: -40, translateY: 20 },
      // {translateY: 4},
    ],
    duration: 4000,
    delay: 6000,
  });
  anime({
    targets: ".arrow14",
    keyframes: [
      { translateX: 10, translateY: -6 },
      { translateX: 20, translateY: -12 },
      { translateX: 30, translateY: -19 },
    ],
    duration: 4000,
    delay: 6000,
  });
  anime({
    targets: ".arrow15",
    keyframes: [
      { translateX: 10, translateY: -8 },
      { translateX: 20, translateY: -16 },
      { translateX: 30, translateY: -25 },
    ],
    duration: 4000,
    delay: 6000,
  });
  anime({
    targets: ".arrow16",
    keyframes: [
      { translateX: 10, translateY: -4 },
      { translateX: 20, translateY: -10 },
      { translateX: 30, translateY: -15 },
    ],
    duration: 4000,
    delay: 6000,
  });
  anime({
    targets: ".trBox:nth-child(8)",
    translateY: [100, 0],
    duration: 2000,
    delay: 600,
  });
  var path = anime.path(".motion-path-demo path");
}
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
document.addEventListener("DOMContentLoaded", () => {
  const videoContainer = document.querySelector(".bannerPoly");
  const hexagonMask = document.querySelector(".hexagon-mask");
  const video = document.querySelector(".video");

  videoContainer.addEventListener("mouseover", () => {
    hexagonMask.style.opacity = 1;
    video.play();
  });

  videoContainer.addEventListener("mouseout", () => {
    hexagonMask.style.opacity = 0;
    video.pause();
  });
});

$(".counter").countUp();
AOS.init({
  duration: 1200,
});
