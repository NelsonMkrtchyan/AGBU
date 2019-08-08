/**
 * Created by tatev on 9/28/18.
 */
$(document).ready(function() {

    var swiper = new Swiper('.swiper-container', {
        navigation:false,
        loop : true,
        autoplay: {
            delay: 5000,
        },
        fadeEffect: {
            crossFade: true,

        },
        effect: 'fade',
        speed:3000,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true,
        },
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });






}); 