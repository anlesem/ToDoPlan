'use strict';


//!---------------------------------------------- Контроль редактируемых полей
// Перекрашивание текста в полях ввода, имеющих ограничения
// Принимает объект target
function changeColorText(target) {
	let inputLength = target.innerText.length;

	if (inputLength > 35) {
		target.style.color = "#bb0000";
	} else if (inputLength > 30) {
		target.style.color = "#b76900";
	} else target.style.color = "";
}

// Сброс окрашивания текста при завершении редактирования
// Принимает объект target
function removeColorText(target) {
	target.style.color = "";
}

// Контроль нажатия на Enter, Backspace и перекрашиваем при вводе
// Принимает событие event
function controlChangeText(event) {

	// Ограничение по длине строки 40 символов (больше всё равно не отображается))
	if (event.target.innerText.length > 40) {
		if (event.key != "Backspace") {
			event.preventDefault();
		}
	}
	
	// Блокировка нажатия Enter (Порядок имеет значение: сначала перекрашиваем затем уже сброс)
	if (event.key == "Enter") {
		document.activeElement.blur();
	}
}