'use strict';

//!---------------------------------------------- Отображение Свойств
let properties = document.getElementById('properties');

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