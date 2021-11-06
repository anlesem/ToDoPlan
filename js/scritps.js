// Переключение отображения полей таблицы при малых размерах экрана
function start(event) {
	initialPoint = event.changedTouches[0];
}

function end(event) {
	finalPoint = event.changedTouches[0];
	var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
	var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
	if (xAbs > 30 || yAbs > 30) {																									// Диапазон смещения. Данный весьма мал, но сбоев не обнаружено
		if (xAbs > yAbs) {
			if (finalPoint.pageX < initialPoint.pageX) {
				if (window.innerWidth < tableSwapWidth) slide('next'); 			// Движение влево  
			}
			else if (window.innerWidth < tableSwapWidth) slide('prev');			// Движение вправо
		}
	}
}

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

// Входная группа
function enterLabel(id) {
	var e = document.querySelector(id).value.trim().length;
	if (e) document.querySelector(id + '+label').classList.add('fill');
	else document.querySelector(id + '+label').classList.remove('fill');
}


//*---------------------------------------------- ПЕРЕМЕННЫЕ

// Переключение отображения полей таблицы при малых размерах экрана
var initialPoint;				// начало движения
var finalPoint;				// конец движения

let tableSwap_name = document.getElementById('table__swap-name');
let tableSwap_set = document.getElementById('table__swap-set');
let tableSwap_note = document.getElementById('table__swap-note');
let tableSwap_money = document.getElementById('table__swap-money');

var tableSwapWidth = 1100;
var tableSwapList = [tableSwap_name, tableSwap_set, tableSwap_note, tableSwap_money]

// Входная группа
let passEnterLogin = document.getElementById('pass__enter-login');
let passEnterPassword = document.getElementById('pass__enter-password');
let passRegistrationLogin = document.getElementById('pass__registration-login');
let passRegistrationEmail = document.getElementById('pass__registration-email');
let passRegistrationPassword = document.getElementById('pass__registration-password');

// Отключение финансового блока
let moneyOff = document.getElementById('money-off');
let moneyPIN = document.getElementById('money-pin');
let money = document.getElementById('money');


//*---------------------------------------------- ОТСЛЕЖИВАНИЕ

// Отслеживание. Движения
document.addEventListener('touchstart', start, false);
document.addEventListener('touchend', end, false);

// Входная группа
passEnterLogin.addEventListener('focusout', () => enterLabel('#pass__enter-login'));
passEnterPassword.addEventListener('focusout', () => enterLabel('#pass__enter-password'));
passRegistrationLogin.addEventListener('focusout', () => enterLabel('#pass__registration-login'));
passRegistrationEmail.addEventListener('focusout', () => enterLabel('#pass__registration-email'));
passRegistrationPassword.addEventListener('focusout', () => enterLabel('#pass__registration-password'));

// Отключение финансового блока
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


