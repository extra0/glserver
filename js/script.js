$(function(){

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
		$(this).addClass('active');
	}

	// кликаем на ссылку и меняем кружки и ссылку
	link.click(function(){
		changer();
		var e = $(this).attr('data-index');
		$('.circle__item[data-index=' +e+']').addClass('active');
		$('.circle__text[data-index=' +e+']').addClass('active');
	});

	// кликаем на кружки и меняем сслыки
	circle.click(function(){
		changer();
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