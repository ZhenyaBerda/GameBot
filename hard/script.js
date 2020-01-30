'use strict';
// Проверка на число
const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },

    // Рандом
    getRandomInRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Проверка
    check = function (number) {

        if (number !== null) {

            // если не число
            if (!isNumber(number)) {
                return 0;
            }

            //если число
            if (isNumber(number)) {

                if (Number(number) >= 1 && Number(number) <= 100) {
                    return 1;
                } else {
                    return 0;
                }
            }
        } else {
            return -1;
        }
    };



function start(guessNumber, attempts) {

    console.log(`Загаданное число ${guessNumber}`);

    function checkNumber(number) {
        console.log(number);
        let inputNewNumb;
        if (attempts !== 0) {
            if (guessNumber > number) {
                inputNewNumb = prompt(`Загаданное число больше. Осталось ${attempts} попыток`);
                if (check(inputNewNumb) === 1) {
                    attempts--;
                    return checkNumber(Number(inputNewNumb));
                } else if (check(inputNewNumb) === 0) {
                    alert('Введите число от 1 до 100');
                    return checkNumber(number);
                } else {
                    alert('Хорошего дня!');
                }
            } else if (guessNumber < number) {
                inputNewNumb = prompt(`Загаданное число меньше. Осталось ${attempts} попыток`);
                if (check(inputNewNumb) === 1) {
                    attempts--;
                    return checkNumber(Number(inputNewNumb));
                } else if (check(inputNewNumb) === 0) {
                    alert('Введите число от 1 до 100');
                    return checkNumber(number);
                } else {
                   alert('Хорошего дня!');
                }
            } else {
                let question = confirm('Вы угадали! Хотите поиграть еще?');
                if (question) {
                    return start(getRandomInRange(1, 100), 10);
                } else {
                    alert('Хорошего дня!');
                }
            }
        } else {
            let question = confirm('Попытки закончились, хотите сыграть еще?');
            if (question) {
                return start(getRandomInRange(1, 100), 10);
            } else {
                alert('Хорошего дня!');
            }
        }
    }

    let inputNumber = prompt('Угадай число от 1 до 100. Введите число');

    if (check(inputNumber) === 1) {
        attempts--;
        return checkNumber(Number(inputNumber));
    } else if (check(inputNumber) === 0) {
        alert('Введите число от 1 до 100');
        return start(guessNumber, 10);
    } else {
        alert('Хорошего дня!');
    }

}

start(getRandomInRange(1, 100), 10);