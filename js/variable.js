

//! ---------------------------------------------------- Переключатели
let moneyOff = document.getElementById('money-off');	
let money = document.getElementById('money');
let filters = document.getElementById('filters');
let properties = document.getElementById('properties');
let info = document.getElementById('info');
let archive = document.getElementById('archive');


//!----------------------------------------------------- Frame настройки
let moneyPIN = document.getElementById('money-pin');


//! ---------------------------------------------------- Таблица
let mainBlock = document.querySelector('main'); // Основной блок Таблицы


let scrollUp = document.querySelector('.scroll-up'); // Кнопка Наверх в footer (для корректного расположения)


//!------------------- Переключение отображения полей таблицы при малых размерах экрана
let initialPoint;				// начало движения
let finalPoint;				// конец движения

let tableSwap_name = document.getElementById('table__swap-name');
let tableSwap_set = document.getElementById('table__swap-set');
let tableSwap_note = document.getElementById('table__swap-note');
let tableSwap_money = document.getElementById('table__swap-money');

let tableSwapWidth = 1100;
let tableSwapList = [tableSwap_name, tableSwap_set, tableSwap_note, tableSwap_money]


