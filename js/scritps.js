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
				if (asideTable.checked && window.innerWidth < mobileWidth) asidePanel.checked = true; 			// Движение влево  
			}
			else if (asidePanel.checked && window.innerWidth < mobileWidth) asideTable.checked = true;;		// Движение вправо
		}
	}
}

function enterLabel(id) {
	var e = document.querySelector(id).value.trim().length;
	if (e) document.querySelector(id + '+label').classList.add('fill');
	else document.querySelector(id + '+label').classList.remove('fill');
}


//*---------------------------------------------- ПЕРЕМЕННЫЕ

var initialPoint;				// начало движения
var finalPoint;				// конец движения

var mobileWidth = 800;

let asideTable = document.getElementById('aside-table');
let asidePanel = document.getElementById('aside-panel');

// Входная группа
let passEnterLogin = document.getElementById('pass__enter-login');
let passEnterPassword = document.getElementById('pass__enter-password');
let passRegistrationLogin = document.getElementById('pass__registration-login');
let passRegistrationEmail = document.getElementById('pass__registration-email');
let passRegistrationPassword = document.getElementById('pass__registration-password');


//*---------------------------------------------- ОТСЛЕЖИВАНИЕ

// Отслеживание. Движения
document.addEventListener('touchstart', start, false);
document.addEventListener('touchend', end, false);

passEnterLogin.addEventListener('focusout', () => enterLabel('#pass__enter-login'));
passEnterPassword.addEventListener('focusout', () => enterLabel('#pass__enter-password'));
passRegistrationLogin.addEventListener('focusout', () => enterLabel('#pass__registration-login'));
passRegistrationEmail.addEventListener('focusout', () => enterLabel('#pass__registration-email'));
passRegistrationPassword.addEventListener('focusout', () => enterLabel('#pass__registration-password'));

// passEnterLogin.addEventListener('mouseout', () => enterLabel('#pass__enter-login'));
// passEnterPassword.addEventListener('mouseout', () => enterLabel('#pass__enter-password'));
// passRegistrationLogin.addEventListener('mouseout', () => enterLabel('#pass__registration-login'));
// passRegistrationEmail.addEventListener('mouseout', () => enterLabel('#pass__registration-email'));
// passRegistrationPassword.addEventListener('mouseout', () => enterLabel('#pass__registration-password'));



