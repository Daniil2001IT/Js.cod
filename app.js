// Number. Типы Чисел 

//const name = 23 // integer (Интержджир). Без десятка в конце 
//const float = 42.42 // float - Число, которое содержит в себе десятичную часть
//const pow = 10e3 // Валидное число. 10 возводим в 3 Степень - добавляю ещй 000 кароче 


//console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // Эим в Освновном пользуюсь

//console.log('Math.pow 53', Math.pow ( 2, 53) - 1) // Math - Глобальный Обьект - при помощи, которого я могу подробно расписать и понять, как в случае Number.MAX_SAFE_INTEGER я получаю максимально число. Просто подробно расписываю. 

//pow - Функция при помощи которой возвожу число в Степень. x - Основание;  y:53 - Степень в котрорую Возвожу - и вычитаю единицу: (- 1). В итоге получил тоже самое, что и в console.log(Number.MAX_SAFE_INTEGER)!

//console.log ('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//console.log('MAX_VALUE', Number.MAX_VALUE)
//console.log('MIN_VALUE', Number.MIN_VALUE)

const num = 42
const float = 42.42
const pow = 10e3


console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) 
console.log('Math.pow(2, 53) - 1)', Math.pow(2, 53) - 1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)

// Number - Есть Поизитивная бесконечность, а есть Негативная. Бесконечнось 

console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) // В консоли Отрицательное Число

console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) // В консоли Положительное Число

console.log('2 / 0', 2/ 0) // Будет 2 / 0 Infinity в Косоли. Делить на 0 - не ошибка. Всё, что делим на 0 - это Бесконечность

console.log(Number.NaN) // Ключевое слово. Переводится, как Not A Number -  Не является числом, но в Кносли отображается, как число  

console.log(typeof NaN)
const age = 2 / undefined
//console.log(2 / undefined)
const weird = 2 / undefined
console.log(isNaN (weird))


















