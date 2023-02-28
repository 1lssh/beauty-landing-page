(function () {
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__nav');
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		menu.classList.toggle('header__nav_active')
		burger.classList.toggle('header__burger_active')
		body.classList.toggle('lock')
	});

}())