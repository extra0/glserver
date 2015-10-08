$(function() {

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
		linkAnchor = $('.circle__link'),
		anchor = $('.universal__text-block .subtitle');

	link.each(function(i) {
		$(this).attr('data-index', i);
		$(this).attr('href', '#anchor-' + i);
	});

	circle.each(function(i) {$(this).attr('data-index', i);});

	linkAnchor.each(function(i) {
		$(this).attr('data-index', i);
		$(this).attr('href', '#anchor-' + i);
	});

	text.each(function(i) {$(this).attr('data-index', i);});

	anchor.each(function(i) {$(this).attr('id', 'anchor-' + i);});

	//  функция общей смены картинка текст ссылка на главной
	function changer() {
		circle.removeClass('active');
		text.removeClass('active');
		link.removeClass('active');
		linkAnchor.removeClass('active');
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

	//  слайдер отзывов
	$('.feedback__slider-list').bxSlider({
		auto: true,
		autoHover: true,
		infiniteLoop: true,
		autoDelay: 3000
	});

	// слайдер клиентов
	$('.clients__slider-list').bxSlider({
		auto: true,
		autoHover: true,
		infiniteLoop: true,
		autoDelay: 4000
	});

	// слайдер новостей
	$('.news__slider-list').bxSlider({
		auto: true,
		autoHover: true,
		infiniteLoop: true,
		autoDelay: 2500,
		slideWidth: 475,
		slideMargin: 25,
		minSlides: 2,
		maxSlides: 2
	});

	// вызов фенсибокса
	$('.fancybox').fancybox();

	//плавный якорь по ссылкам для главной страницы и готовых решений
	$(document).ready(function() {
		$('.circle__link').bind("click", function(e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 70
			}, 2500);
			e.preventDefault();
		});
	});

	//плавный якорь по ссылкам на странице аренда серверов
	$(document).ready(function() {
		$('.circle__link, .cost__server-detail-link').bind("click", function(e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
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
			$('#cpu_modal').html($("#cpu_amount").val()); // записываем значение в модальное окно
			$('input[name="cpu-val"]').val($("#cpu_amount").val()); // записываем значенеи в скрытый инпут
		}
	});
	$( "#cpu_amount" ).val( "2 x " + $( "#calculate__cpu-range" ).slider( "value" ));
	$('input[name="cpu-val"]').val($("#cpu_amount").val());

	// слайдер ram
	$('#calculate__ram-range').slider({
		range: "min",
		value: 2,
		step: 2,
		min: 2,
		max: 32,
		slide: function(event, ui) {
			$("#ram_amount").val(ui.value);
			$('#ram_modal').html($("#ram_amount").val()); // записываем значение в модальное окно
			$('input[name="ram-val"]').val($('#ram_amount').val()); // записываем значенеи в скрытый инпут
		}
	});
	$("#ram_amount").val($( "#calculate__ram-range" ).slider( "value" ));
	$('input[name="ram-val"]').val($('#ram_amount').val());

	// слайдер hdd
	$('#calculate__hdd-range').slider({
		range: "min",
		value: 100,
		step: 100,
		min: 100,
		max: 5000,
		slide: function(event, ui) {
			$("#hdd_amount").val(ui.value);
			$('#hdd_modal').html($("#hdd_amount").val()); // записываем значение в модальное окно
			$('input[name="hdd-val"]').val($('#hdd_amount').val()); // записываем значенеи в скрытый инпут
		}
	});
	$("#hdd_amount").val($( "#calculate__hdd-range" ).slider( "value" ));
	$('input[name="hdd-val"]').val($('#hdd_amount').val());

	// слайдер ip
	$('#calculate__ip-range').slider({
		range: "min",
		value: 1,
		step: 1,
		min: 1,
		max: 20,
		slide: function(event, ui) {
			$("#ip_amount").val(ui.value);
			$('#ip_modal').html($("#ip_amount").val()); // записываем значение в модальное окно
			$('input[name="ip-val"]').val($('#ip_amount').val()); // записываем значенеи в скрытый инпут
		}
	});
	$("#ip_amount").val($( "#calculate__ip-range" ).slider( "value" ));
	$('input[name="ip-val"]').val($('#ip_amount').val());

	// отмечаем пункты чекбоксов услуг в калькуляторе и заносим их в модальное
	$('input[name="ssd-val"]').val('Нет');
	$('input[name="ddos-val"]').val('Нет');

	$('.calculate__checkbox').click(function(){
		if ($('#ssd').is(':checked')) {
			$('#ssd_modal').addClass('active');
			$('input[name="ssd-val"]').val('Да');
		} else {
			$('#ssd_modal').removeClass('active');
			$('input[name="ssd-val"]').val('Нет');
		}

		if ($('#ddos').is(':checked')) {
			$('#ddos_modal').addClass('active');
			$('input[name="ddos-val"]').val('Да');
		} else {
			$('#ddos_modal').removeClass('active');
			$('input[name="ddos-val"]').val('Нет');
		}
	});

	// подствление занных в окно заказа готово сервера под шапкой
	$('.cost__server-order-btn').click(function(){
		var name = $(this).parents('.cost__server-type-item').find('.cost__server-type-name').html(),
			cost = $(this).parents('.cost__server-type-item').find('.cost__server-current-price').html();
		$('.modal__server-name').html(name); // записываем название сервера в шапку модального
		$('.modal__total-price').html(cost); // записываем стоимость сервера в блок цены модального
		$('input[name="cost"]').val(cost);  // записываем стоимость сервера в input
		$('input[name="server-name"]').val(name); // записываем название сервера в input
	});

	// огранизация подставления данных в модальное окно при клике на "заказать" в блоке детального описания сервера
	$('.server-description__order').click(function(){
		var name = $(this).parents('.universal__block').find('.server-description__server-name').html(),
			cost = $(this).parents('.server-description__table').find('.server-description__table-cost[data-index='+ $(this).attr('data-index') +']').html();
		$('.modal__server-name').html(name); // записываем название сервера в модальное окно
		$('.modal__total-price').html(cost); // записываем цену сервера в модальное окно
		$('input[name="cost"]').val(name);
		$('input[name="server-name"]').val(cost);
 	});
	

});