var appswiper = (function() {
    // 'use strict';
    function swiperMain() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            cubeEffect: {
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    function swiperList() {
        var swiperlist = new Swiper('.swiper-container-list', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    function swiperRelatedList() {
        var swiperlist = new Swiper('.swiper-related-list', {
            slidesPerView: 4,
            navigation: {
                nextEl: '.rl-next',
                prevEl: '.rl-prev',
            },
            breakpoints: {
                1366: {
                    slidesPerView: 5,
                },
                1100: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 4,
                },
                640: {
                    slidesPerView: 3,
                },
                480: {
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 1,
                }
            }

        });
    }
    function swiperRelatedListRight() {
        var swiper = new Swiper('.swiper-related-flip', {
            effect: 'flip',
            grabCursor: true,
            navigation: {
                nextEl: '.rf-next',
                prevEl: '.rf-prev',
            },
        });
    }
    function swiperRelatedProduct() {
        var swiper = new Swiper('.swiper-related-product', {
            effect: 'flip',
            grabCursor: true,
            navigation: {
                nextEl: '.product-next',
                prevEl: '.product-prev',
            },
        });
    }
    function brandingList() {
        var swiperlist = new Swiper('.branding-list', {
            slidesPerView: 4,
            navigation: {
                nextEl: '.branding-next',
                prevEl: '.branding-prev',
            },
            breakpoints: {
                1366: {
                    slidesPerView: 10,
                },
                1100: {
                    slidesPerView: 8,
                },
                1024: {
                    slidesPerView: 6,
                },
                768: {
                    slidesPerView: 6,
                },
                640: {
                    slidesPerView: 5,
                },
                480: {
                    slidesPerView: 3,
                },
                320: {
                    slidesPerView: 2,
                }
            }

        });
    }
    return{
        swiperRelatedListRight:swiperRelatedListRight,
        swiperMain:swiperMain,
        swiperList:swiperList,
        swiperRelatedProduct:swiperRelatedProduct,
        swiperRelatedList:swiperRelatedList,
        brandingList:brandingList,
    };
})();
$(document).ready(function($) {
    appswiper.swiperMain();
    appswiper.swiperList();
    appswiper.swiperRelatedList();
    appswiper.swiperRelatedListRight();
    appswiper.swiperRelatedProduct();
    appswiper.brandingList();
});
