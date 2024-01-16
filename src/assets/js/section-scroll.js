
// //Use jQuery to smooth scroll to the target element
// $(document).ready(() => {
//     const animatedSections = [...document.querySelectorAll('.animated-section')]
//         .filter((section) => section.tagName === 'SECTION')
//         .sort((a, b) => a.offsetTop - b.offsetTop)
//         .map((section) => section.id)

//     function animateTo(target, duration = 300) {
//         $('html, body').animate({
//             scrollTop: target.offsetTop
//         }, duration);

//     }

//     let currentSection = 0;

//     const observer = new IntersectionObserver((entries) => {
//         let targetIndex = -1;
//         let target = null;
//         entries.some((entry) => {
//             if (entry.isIntersecting) {
//                 // If the section is in view, run the animation and unobserve it
//                 const index = animatedSections.indexOf(entry.target.id);
//                 if (index > -1 && index !== currentSection) {
//                     targetIndex = index;
//                     target = entry.target;
//                     return true;
//                 }
//             }
//         });
//         if (targetIndex > -1) {
//             currentSection = targetIndex;
//             animateTo(target);
//         }

//     }, {
//         root: null,
//         threshold: 0.05
//     }
//     )

//     animatedSections.forEach((section) => {
//         observer.observe(document.getElementById(section),);
//     })
// });