$(function(){

	//прелоадер
	// window.addEventListener('DOMContentLoaded', function() {
	//     new QueryLoader2(document.querySelector("body"), {
	//         barColor: "#efefef",
	//         backgroundColor: "#00a3e2",
	//         percentage: true,
	//         barHeight: 3,
	//         minimumTime: 200,
	//         fadeOutTime: 1000
	//     });
	// });

	// вызов анимации при скролле
	var wow = new WOW({
		boxClass: 'wow', // класс срабатывания при прокрутке
		animateClass: 'animated', // класс анимации
		offset: 150, // расстоние до элемента, при запуске анимации
		mobile: false, // запуск на мобильных устройствах
		live: true // асинхронный запуск
	});
	wow.init();

	// назначение индексов для меню и блока с кружками
	var link = $('.main__menu-category-link'),
		circle = $('.circle__item'),
		text = $('.circle__text');

	i = 1;
	link.each(function(){$(this).attr('data-index', i);i++;});

	i = 1;
	circle.each(function(){$(this).attr('data-index', i);i++;});

	i = 1;
	text.each(function(){$(this).attr('data-index', i);i++;});

	//  функция общей смены картинка текст ссылка на главной
	function changer() {
		circle.removeClass('active');
		text.removeClass('active');
		link.removeClass('active');
		
	}

	// кликаем на ссылку и меняем кружки и ссылку
	link.click(function(){
		changer();
		$(this).addClass('active');
		var e = $(this).attr('data-index');
		$('.circle__item[data-index=' +e+']').addClass('active');
		$('.circle__text[data-index=' +e+']').addClass('active');
	});

	// кликаем на кружки и меняем сслыки
	circle.click(function(){
		changer();
		$(this).addClass('active');
		var e = $(this).attr('data-index');
		$('.main__menu-category-link[data-index=' +e+']').addClass('active');
		$('.circle__text[data-index=' +e+']').addClass('active');
	});

	//  слайдер отзывов
	$('.feedback__slider-list').bxSlider({
		// auto: true,
		// autoHover: true,
		// infiniteLoop: true,
		// autoDelay: 3000
	});

	// слайдер клиентов
	$('.clients__slider-list').bxSlider({
		// auto: true,
		// autoHover: true,
		// infiniteLoop: true,
		// autoDelay: 4000
	});

	// слайдер новостей
	$('.news__slider-list').bxSlider({
		// auto: true,
		// autoHover: true,
		// infiniteLoop: true,
		// autoDelay: 2500,
		slideWidth: 475,
		slideMargin: 25,
		minSlides: 2,
		maxSlides: 2
	});

});