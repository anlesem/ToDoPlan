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