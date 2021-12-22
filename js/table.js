'use strict';

//!---------------------------------------------- Кнопка прокрутки наверх
// Кнопка в footer (для корректного расположения)
let scrollUp = document.querySelector('.scroll-up');

// Основной блок Таблицы
let mainBlock = document.querySelector('main');
	
// Включение / отключение отображения кнопки при прокрутке
mainBlock.addEventListener("scroll", function (event) {
	if (event.currentTarget.scrollTop > 400) {
		scrollUp.style.display = "block";
	} else {
		scrollUp.style.display = "none";
	}
});

// Перемотка наверх
scrollUp.addEventListener("click", function () {
	mainBlock.scrollTop = 0;
});

//!---------------------------------------------- Контроль редактируемых полей в Таблице
document.querySelectorAll('[contenteditable]').forEach(function (input) {

	// Ловим фокус
	input.addEventListener("focus", function (event) { 
		
		// Перекрашиваем цвет при фокусировке (global.js)
		changeColorText(event.target);
	});
	
	// Ловим нажатие на клавишу
	input.addEventListener("keydown", function (event) {
	
		// Контролируем Enter, Backspace и перекрашиваем при вводе (global.js)
		controlChangeText(event.target,event);
	});
	
	// Ловим потерю фокуса 
	input.addEventListener("blur", function (event) { 

		// Сброс окрашивания (global.js)
		removeColorText(event.target);
				
		//todo Отправка локальных изменений
		
	});
});

