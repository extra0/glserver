$(function() {

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

	// маска на телефон
	$('.mask').mask('+8 (999) 99-999-99')

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
		text = $('.circle__text'),
		anchor = $('.universal__text-block .subtitle');

	i = 1;
	link.each(function() {
		$(this).attr('data-index', i);
		$(this).attr('href', '#anchor-' + i);
		i++;
	});

	i = 1;
	circle.each(function() {
		$(this).attr('data-index', i);
		i++;
	});

	i = 1;
	text.each(function() {
		$(this).attr('data-index', i);
		i++;
	});

	i = 1;
	anchor.each(function() {
		$(this).attr('id', 'anchor-' + i);
		i++;
	});

	//  функция общей смены картинка текст ссылка на главной
	function changer() {
		circle.removeClass('active');
		text.removeClass('active');
		link.removeClass('active');
	}

	// кликаем на ссылку и меняем кружки и ссылку
	link.click(function() {
		changer();
		$(this).addClass('active');
		var e = $(this).attr('data-index');
		$('.circle__item[data-index=' + e + ']').addClass('active');
		$('.circle__text[data-index=' + e + ']').addClass('active');
		return false;
	});

	// кликаем на кружки и меняем сслыки
	// circle.click(function(){
	// 	changer();
	// 	$(this).addClass('active');
	// 	var e = $(this).attr('data-index');
	// 	$('.main__menu-category-link[data-index=' +e+']').addClass('active');
	// 	$('.circle__text[data-index=' +e+']').addClass('active');
	// });

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

	// вызов фенсибокса
	$('.fancybox').fancybox();

	//плавный якорь по ссылкам
	$(document).ready(function() {
		$('.main__menu-category-link').bind("click", function(e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 70
			}, 2500);
			e.preventDefault();
		});
	});

	// слайдер процессора 
	$('#calculate__cpu-range').slider({
		range: "min",
		value: 2.0,
		step: 0.2,
		min: 2.0,
		max: 5.0,
		slide: function(event, ui) {
			$("#cpu_amount").val("2 x "+ ui.value);
			$('#cpu_modal').html($("#cpu_amount").val());
		}
	});
	$( "#cpu_amount" ).val( "2 x " + $( "#calculate__cpu-range" ).slider( "value" ));

	// слайдер ram
	$('#calculate__ram-range').slider({
		range: "min",
		value: 2,
		step: 2,
		min: 2,
		max: 32,
		slide: function(event, ui) {
			$("#ram_amount").val(ui.value);
			$('#ram_modal').html($("#ram_amount").val());
		}
	});
	$("#ram_amount").val($( "#calculate__ram-range" ).slider( "value" ));

	// слайдер hdd
	$('#calculate__hdd-range').slider({
		range: "min",
		value: 100,
		step: 100,
		min: 100,
		max: 5000,
		slide: function(event, ui) {
			$("#hdd_amount").val(ui.value);
			$('#hdd_modal').html($("#hdd_amount").val());
		}
	});
	$("#hdd_amount").val($( "#calculate__hdd-range" ).slider( "value" ));

	// слайдер ip
	$('#calculate__ip-range').slider({
		range: "min",
		value: 1,
		step: 1,
		min: 1,
		max: 20,
		slide: function(event, ui) {
			$("#ip_amount").val(ui.value);
			$('#ip_modal').html($("#ip_amount").val());
		}
	});
	$("#ip_amount").val($( "#calculate__ip-range" ).slider( "value" ));

	// отмечаем пункты чекбоксов услуг в калькуляторе и заносим их в модальное
	$('.calculate__checkbox').click(function(){
		if ($('#ssd').is(':checked')) {
			$('#ssd_modal').addClass('active');
		} else {
			$('#ssd_modal').removeClass('active');
		}

		if ($('#ddos').is(':checked')) {
			$('#ddos_modal').addClass('active');
		} else {
			$('#ddos_modal').removeClass('active');
		}
	});
	

});