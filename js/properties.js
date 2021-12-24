'use strict';

//!---------------------------------------------- Закрытие Свойств
// Отслеживание нажатия на кнопку Закрыть в Свойствах
document.querySelector('.properties__set-close').addEventListener("click", function () {
	properties.checked = false;
	});



//!---------------------------------------------- Отображение Свойств
// Отслеживание двойного нажатия на строку Таблицы и передача родительского объекта.table
document.querySelectorAll('main .table').forEach(function (elem) {
	elem.addEventListener("dblclick", function (event) {

		openProperties(event.currentTarget);
	});
 });

// Отображение Окна Свойств
function openProperties(target) {
	properties.checked = true;
	console.log(target);
 }