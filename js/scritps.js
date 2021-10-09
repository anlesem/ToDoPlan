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


//*---------------------------------------------- ПЕРЕМЕННЫЕ

var initialPoint;				// начало движения
var finalPoint;				// конец движения

var mobileWidth = 800;

let asideTable = document.getElementById('aside-table');
let asidePanel = document.getElementById('aside-panel');


//*---------------------------------------------- ОТСЛЕЖИВАНИЕ

// Отслеживание. Движения
document.addEventListener('touchstart', start, false);
document.addEventListener('touchend', end, false);