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
function removeColorText(target) {
	target.style.color = "";
}

// Контроль нажатия на Enter, Backspace и перекрашиваем при вводе
function controlChangeText(target,event) {
	let inputLength = target.innerText.length;

	// Перекрашиваем цвет при вводе
	changeColorText(target);

	// Ограничение по длине строки 40 символов (больше всё равно не отображается))
	if (inputLength > 40) {
		if (event.key != "Backspace") {
			event.preventDefault();
		}
	}
	
	// Блокировка нажатия Enter (Порядок имеет значение: сначала перекрашиваем затем уже сброс)
	if (event.key == "Enter") {
		document.activeElement.blur();
	}
}