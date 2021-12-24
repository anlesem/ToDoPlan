'use strict';

//!---------------------------------------------- Входная группа
// Отслеживание
document.querySelectorAll(".pass__input input").forEach(function (input) {
	input.addEventListener("focusout", function (event) {
		addFillLabel(event.currentTarget.parentNode);
	});
});

// Добавление / удаление класса fill (аналог :hover)
function addFillLabel(parent) {
	// Проверяем на наличие символов: значение.без пробелов.длина
	let elem = parent.querySelector("input").value.trim().length;
	if (elem) parent.querySelector("label").classList.add('fill');
	else parent.querySelector("label").classList.remove('fill');
}

//!---------------------------------------------- Отключение финансового блока
moneyOff.addEventListener('click', function () {
	if (moneyOff.checked) {
		money.checked = false;
		moneyPIN.disabled = false;
		tableSwap_name.checked = true;
		tableSwapList.splice(3, 1);
	}
	else {
		moneyPIN.disabled = true;
		tableSwapList.push(tableSwap_money);
	}
}, false);