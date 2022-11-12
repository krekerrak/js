/*NULL означает отсутствие, неизвестность информации. Значение NULL не является значением в полном смысле слова: по определению оно означает отсутствие значения и может иметь тип NULL или иметь любой другой тип (CREATE TABLE new_tab AS (SELECT NULL) — специальный тип null, CREATE TABLE new_table AS (SELECT 10+NULL) — тип integer). Поэтому NULL не равно ни логическому значению FALSE, ни пустой строке, ни нулю. При сравнении NULL с любым значением будет получен результат NULL, а не FALSE и не 0. Более того, NULL не равно NULL!*/

let myObject = null;
console.log(myObject);//пример null с переменной 

const myObjectTwo = null;
console.log(myObjectTwo);//пример null с константой