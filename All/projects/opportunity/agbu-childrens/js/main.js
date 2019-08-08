$(document).ready(function() {

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop : true,
        autoplay: {
            delay: 800,
        },
        fadeEffect: {
            crossFade: true,

        },
        effect: 'fade',
        speed:2000,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });



   /* $('.slider').slick({
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 3,
        pauseOnHover:true,
        focusOnSelect: true,
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
    });
*/

   /* $(".slick-active").on("mouseenter", function () {
        $(".slick-active").removeClass('slick-center') ,
         $(this) .addClass("showtext"),
            $("slick-cloned") .removeClass("showtext")

    });


    $(".slick-active").on("mouseleave", function () {
        $(this).removeClass('slick-center') ,
            $(".slick-active").removeClass("showtext")
    });*/


   /* $('.slick-active').mouseleave(
        function(){  $(this) .removeClass("showtext")}
    )*/


    var $showcaseSlider = $(".showcase-slider").slick({
        centerMode: true,
        centerPadding: '120px',

        slidesToShow: 3,
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
    });

    /*$(".showcase-slider .slider-item").on('mouseover', function(){
        $showcaseSlider.slick('slickNext');
    });*/




    function changeSlideNext(){
        $showcaseSlider.slick('slickNext');
    }

    function changeSlidePrev(){
        $showcaseSlider.slick('slickPrev');
    }




    function killSlideChange(timer){
        window.clearTimeout(timer);
    }


    $(".showcase-slider .slider-item").on('mouseover', function(){
        var  middle_index = $(".slick-center").attr('data-slick-index');
        var  current_index = $(this).attr('data-slick-index');
        console.log('nnnn',middle_index - current_index);
        if(middle_index - current_index > 0 ){
            console.log('prev');
            changeSlidePrev();
        } else {
            console.log('prev');
            changeSlideNext();

        }

    });

    $(".showcase-slider .slider-item").on('mouseout', function(){
        var  middle_index = $(".slick-center").attr('data-slick-index');
        var  current_index = $(this).attr('data-slick-index');
        console.log('nnnn',middle_index - current_index);
        if(middle_index - current_index > 0 ){
            console.log('prev');
            changeSlidePrev();
        } else {
            console.log('prev');
            changeSlideNext();

        }

    });



});

