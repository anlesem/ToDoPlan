'use strict';

//!------------------- Переключение отображения полей таблицы при малых размерах экрана
let initialPoint;				// начало движения
let finalPoint;				// конец движения

let tableSwap_name = document.getElementById('table__swap-name');
let tableSwap_set = document.getElementById('table__swap-set');
let tableSwap_note = document.getElementById('table__swap-note');
let tableSwap_money = document.getElementById('table__swap-money');

let tableSwapWidth = 1100;
let tableSwapList = [tableSwap_name, tableSwap_set, tableSwap_note, tableSwap_money]

// Отслеживание
document.addEventListener('touchstart', start, false);
document.addEventListener('touchend', end, false);

// Вычисление смещения движения 
function start(event) {
	initialPoint = event.changedTouches[0];
}

function end(event) {
	finalPoint = event.changedTouches[0];
	let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
	let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
	if (xAbs > 30 || yAbs > 30) {															// Диапазон смещения. Данный весьма мал, но сбоев не обнаружено
		if (xAbs > yAbs) {
			if (finalPoint.pageX < initialPoint.pageX) {
				if (window.innerWidth < tableSwapWidth) slide('next'); 			// Движение влево  
			}
			else if (window.innerWidth < tableSwapWidth) slide('prev');			// Движение вправо
		}
	}
}

// Переключение блоков 
function slide(n) {
	for (let i = 0; i < tableSwapList.length; i++) {
		if (tableSwapList[i].checked) {									// Определение актуальной позиции input.checked 
			if (n == 'next') {												// Для следующего
				if ((i + 1) == tableSwapList.length) return;			// Проверка последний ли?		
				else {
					tableSwapList[i + 1].checked = true;				// Переключение позиции input.checked
					return;														// Завершение именно функции, а не цикла
				}
			} else if (i == 0) return;									// Для предыдущего. Проверка первый ли?
				else {
					tableSwapList[i - 1].checked = true;				// Переключение позиции input.checked
				return;															// Завершение именно функции, а не цикла
			}
		}
	}
}


//!---------------------------------------------- Входная группа
let passEnterLogin = document.getElementById('pass__enter-login');
let passEnterPassword = document.getElementById('pass__enter-password');
let passRegistrationLogin = document.getElementById('pass__registration-login');
let passRegistrationEmail = document.getElementById('pass__registration-email');
let passRegistrationPassword = document.getElementById('pass__registration-password');

// Отслеживание
passEnterLogin.addEventListener('focusout', () => enterLabel('#pass__enter-login'));
passEnterPassword.addEventListener('focusout', () => enterLabel('#pass__enter-password'));
passRegistrationLogin.addEventListener('focusout', () => enterLabel('#pass__registration-login'));
passRegistrationEmail.addEventListener('focusout', () => enterLabel('#pass__registration-email'));
passRegistrationPassword.addEventListener('focusout', () => enterLabel('#pass__registration-password'));

// Добавление / удаление класса fill (аналог :hover)
function enterLabel(id) {
	// Проверяем на наличие символов: значение.без пробелов.длина
	let elem = document.querySelector(id).value.trim().length;
	if (elem) document.querySelector(id + '+label').classList.add('fill');
	else document.querySelector(id + '+label').classList.remove('fill');
}



//!---------------------------------------------- Отключение финансового блока
// Глобальное отключение всего связанного с финансами в настройках
let moneyOff = document.getElementById('money-off');	
let moneyPIN = document.getElementById('money-pin');

// Фильтр в header
let money = document.getElementById('money');

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
