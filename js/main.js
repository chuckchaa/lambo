gsap.registerPlugin(ScrollToPlugin)

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn')
    const menuMobile = document.querySelector('.menu-mobile')

    menuBtn.addEventListener('click', () => {
        menuMobile.classList.toggle('menu--open')
        menuBtn.classList.toggle('menu-btn--open')
    })

    const promo = document.querySelector('.promo__inner')
    const scrollBtn = document.querySelector('.promo__arrow')
    const offsetY = getComputedStyle(promo).height.slice(0, -2)
    const vh = window.innerHeight / 100
    promo.style.setProperty('--vh', `${vh}px`)

    scrollBtn.addEventListener('click', () => {
        gsap.to(window, { duration: 1, scrollTo: offsetY })
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    })
})

let map

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.231750984292184, lng: -8.628358206057525 },
        zoom: 14,
        styles: [
            {
                featureType: 'administrative',
                elementType: 'all',
                stylers: [
                    {
                        saturation: '-100',
                    },
                ],
            },
            {
                featureType: 'administrative.province',
                elementType: 'all',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                featureType: 'landscape',
                elementType: 'all',
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: 65,
                    },
                    {
                        visibility: 'on',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'all',
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        lightness: '50',
                    },
                    {
                        visibility: 'simplified',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'all',
                stylers: [
                    {
                        saturation: '-100',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'all',
                stylers: [
                    {
                        visibility: 'simplified',
                    },
                ],
            },
            {
                featureType: 'road.arterial',
                elementType: 'all',
                stylers: [
                    {
                        lightness: '30',
                    },
                ],
            },
            {
                featureType: 'road.local',
                elementType: 'all',
                stylers: [
                    {
                        lightness: '40',
                    },
                ],
            },
            {
                featureType: 'transit',
                elementType: 'all',
                stylers: [
                    {
                        saturation: -100,
                    },
                    {
                        visibility: 'simplified',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        hue: '#ffff00',
                    },
                    {
                        lightness: -25,
                    },
                    {
                        saturation: -97,
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'labels',
                stylers: [
                    {
                        lightness: -25,
                    },
                    {
                        saturation: -100,
                    },
                ],
            },
        ],
    })
}

window.initMap = initMap
