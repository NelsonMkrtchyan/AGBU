$( document ).ready(function() {

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop : true,
        autoplay: {
            delay: 2000,
        },
        fadeEffect: {
            crossFade: true,

        },
        effect: 'fade',
        speed:500,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true
        },
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });
});