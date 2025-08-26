document.addEventListener("DOMContentLoaded", function () {


    let swiperBaner = new Swiper(".swiperBaner", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500, // скорость анимации в миллисекундах (по умолчанию 300, можно увеличить для "плавности")
        simulateTouch: true, // позволяет свайпать мышью на десктопе
        followFinger: true, // слайдер следует за пальцем/мышью — создаёт ощущение плавности
        cssMode: false, // важно! если true — Swiper использует нативный скролл браузера, и плавность теряется
        pagination: {
            el: ".swiperBaner .swiper-pagination",
        },
    });
    let ourDirectionsSwiper = new Swiper(".ourDirectionsSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 16,
        speed: 1500, // скорость анимации в миллисекундах (по умолчанию 300, можно увеличить для "плавности")
        simulateTouch: true, // позволяет свайпать мышью на десктопе
        followFinger: true, // слайдер следует за пальцем/мышью — создаёт ощущение плавности
        cssMode: false, // важно! если true — Swiper использует нативный скролл браузера, и плавность теряется
    });
    let swiperRews = new Swiper(".swiperRews", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 1500, // скорость анимации в миллисекундах (по умолчанию 300, можно увеличить для "плавности")
        simulateTouch: true, // позволяет свайпать мышью на десктопе
        followFinger: true, // слайдер следует за пальцем/мышью — создаёт ощущение плавности
        cssMode: false, // важно! если true — Swiper использует нативный скролл браузера, и плавность теряется
        navigation: {
            nextEl: ".swiperRews-button-next",
            prevEl: ".swiperRews-button-prev",
        },
        breakpoints: {
            720: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1044: {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
            }
        }
    });

    console.log('addSwiper.js finish work');

});