$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });

    var swiper3 = new Swiper(".quality-slide-in", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });

});

