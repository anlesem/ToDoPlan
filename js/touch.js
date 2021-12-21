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