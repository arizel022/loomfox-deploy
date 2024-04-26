

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
  });