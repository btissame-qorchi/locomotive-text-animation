/**
 * LOCOMOTIVE SCROLL
 */
const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});

/**
 * DISABLED LOCOMOTIVE ON VERSION MOBILE
 */
if ($(window).width() <= 1024) {
    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: false,
    });
}



scroller.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('.data-scrolling', {
    scrollTop(value) {
        return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
});

ScrollTrigger.addEventListener('refresh', () => scroller.update());

ScrollTrigger.refresh();
// $(".timeline4 .bloc5 .play").click(function(){
//     $('.timeline4 .bloc5 video').get(0).play();
// }) 
// scroller.on('scroll', function(){
//    if ($(".timeline4 .bloc5").hasClass("video4")) {
//   $(".timeline4 .bloc5 video").get(0).play(); ;
//   console.log('yes');
// } 

// });
