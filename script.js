// let start=0;
// let end=0;
// let condition=true;
// function forward() {
//     anime({
//         targets: '.menu-small',
//         translateX: ['-100%', '0'],
//         easing: 'easeInOutQuad',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false
//     });
//     condition=false; 
//     anime({
//         targets: '.stick',
//         rotate: 180,
//         easing: 'easeInOutQuad',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false
//     });
//     anime({
//         targets: '.menu_small_icon',
//         rotate: 90,
//         easing: 'easeInOutQuad',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false
//     });
// };

// let links=document.querySelectorAll('.scroll');
// let targetID;
// links.forEach(function (element){
//     element.addEventListener('click', function (event) {
//         event.preventDefault();
//         targetID=element.getAttribute('href');
//         document.querySelector(targetID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// });

// $(document).ready(function () {
//   $('.info_punkts').bxSlider();
// });

// function backward() {
//     anime({
//         targets: '.menu-small',
//         translateX: ['0', '-100%'],
//         easing: 'easeInOutQuad',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false
//     });
//     anime({
//         targets: '.stick',
//         rotate: 0,
//         easing: 'easeInOutQuad',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false
//     });
//     anime({
//         targets: '.menu_small_icon',
//         rotate: -180,
//         easing: 'easeInOutQuad',
//         direction: 'alternate',
//         duration: 1000,
//         loop: false
//     });
//     condition=true;
// };
// $('.menu_small_icon').click(function(){
//     if (condition==true) {
//         forward();
//     } else {
//         backward();
//     }
// })
// $('.container').on('touchstart', function (event){
//     start=event.originalEvent.touches[0].pageY;
// })
// $('.container').on('touchend', function (event){
//     end = event.originalEvent.changedTouches[0].pageX;
//     if (end-start >= 70 && condition) {
//         forward();
//     }
//     else if (start - end >= 70 && !condition) {
//         backward();
//     }
// })

// $('.carousel').slick({
//     prevArrow:'<img src="arrow_carous_left.png">',
//     nextArrow:'<img src="arrow_carous.png">',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
    
//   });

