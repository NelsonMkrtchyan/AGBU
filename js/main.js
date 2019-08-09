var opportunitySwiper = new Swiper('.opportunity-slider-1', {

    direction: 'horizontal',
    loop: true,
    speed: 3000,

    autoplay: {delay: 2500},
    disableOnInteraction: false,
    effect: "fade",
    fadeEffect: {crossFade: true},

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletClass: "opportunity-slider-1-pagination-bullet",
        // bulletActiveClass: "opportunity-slider-1-pagination-bullet-active",
    },

});


var childrenscentersSwiper = new Swiper('.childrenscenters-slider-1', {

    direction: 'horizontal',
    loop: true,
    speed: 3000,

    autoplay: {delay: 2500},
    disableOnInteraction: false,
    effect: "fade",
    fadeEffect: {crossFade: true},

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletClass: "opportunity-slider-1-pagination-bullet",
        // bulletActiveClass: "opportunity-slider-1-pagination-bullet-active",
    },

});


var artsakhSwiper = new Swiper('.artsakh-slider-1', {

    direction: 'horizontal',
    loop: true,
    speed: 3000,

    autoplay: {delay: 2500},
    disableOnInteraction: false,
    effect: "fade",
    fadeEffect: {crossFade: true},

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletClass: "opportunity-slider-1-pagination-bullet",
        // bulletActiveClass: "opportunity-slider-1-pagination-bullet-active",
    },

});

var weSwiper = new Swiper('.we-banner-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: "we-banner-swiper-pagination-bullet",
        bulletActiveClass: "we-banner-swiper-pagination-bullet-active",
    },
    autoplay: {
        delay: 3000,
    },
    disableOnInteraction: false,
    effect: "fade",
    speed: 3000,
    fadeEffect: {
        crossFade: true
    },

});


// ##########################################

$(document).ready(function () {


    var childrenscentersSlider = $('.childrenscenters-slider-2').slick({

        dots: true,
        // arrows: false,
        // autoplay: true,
        // autoplaySpeed: 1000,

        centerMode: true,

        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]

    })


    function changeSlideNext() {
        childrenscentersSlider.slick('slickNext');
    }

    function changeSlidePrev() {
        childrenscentersSlider.slick('slickPrev');
    }

    function killSlideChange(timer) {
        window.clearTimeout(timer);
    }


    $(".childrenscentersSlider .slider-item").on('mouseover', function () {
        var middle_index = $(".slick-center").attr('data-slick-index');
        var current_index = $(this).attr('data-slick-index');
        console.log('nnnn', middle_index - current_index);
        if (middle_index - current_index > 0) {
            console.log('prev');
            changeSlidePrev();
        } else {
            console.log('prev');
            changeSlideNext();

        }

    });

    $(".childrenscentersSlider .slider-item").on('mouseout', function () {
        var middle_index = $(".slick-center").attr('data-slick-index');
        var current_index = $(this).attr('data-slick-index');
        console.log('nnnn', middle_index - current_index);
        if (middle_index - current_index > 0) {
            console.log('prev');
            changeSlidePrev();
        } else {
            console.log('prev');
            changeSlideNext();

        }

    });


});

