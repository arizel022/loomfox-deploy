

$(function () {

    $('.menu__hideBtn').click(function () {
        $(this).toggleClass('hide');
        $('.menu').toggleClass('hide');
        $('.main').toggleClass('full');
    });


    $('#mode').click(function () {
        $(this).toggleClass('active');
        $('#mode .swither__item').toggleClass('active');
    });

});


$(document).ready(function () {
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank"></a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});

$(document).ready(function () {
    $('.fullSizePict').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank"></a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});

//Swup
const swup = new Swup({});

//updateCurrentLink
function updateCurrentLink() {
    const currentPagePath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (linkPath === currentPagePath) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
}

window.addEventListener('load', () => {
    updateCurrentLink(); // Вызов функции при загрузке страницы
});




//Swup reload updateCurrentLink
swup.hooks.on('page:view', (visit) => {
    console.log('New page loaded:', visit.to.url);
    updateCurrentLink(); // Повторный запуск функции обновления текущего элемента меню


    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank"></a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }

    });


});



