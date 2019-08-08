var mySwiper = new Swiper('.banner-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: "banner-swiper-pagination-bullet",
        bulletActiveClass: "banner-swiper-pagination-bullet-active",
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
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


var mySwiper2 = new Swiper('.content-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        modifierClass: "swiper-pagination-content-",
        bulletClass: "content-swiper-pagination-bullet",
        bulletActiveClass: "content-swiper-pagination-bullet-active",
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    autoplay: {
        delay: 4000,
    },
    disableOnInteraction: false,
    effect: "fade",
    speed: 2000,
    fadeEffect: {
        crossFade: true
    },
});
