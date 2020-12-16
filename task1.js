'use strict';

/* Задача 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить
    на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например,
    для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть
    пустой объект. */

const digit = {
    number: +prompt('Введите число от 0 до 999'),
    единицы: 0,
    десятки: 0,
    сотни: 0,

    foo() {
        if (digit.number <= 9) {
            digit.единицы = digit.number;
        } else if (digit.number <= 999) {
            digit.единицы = Math.floor(digit.number % 10);
            digit.десятки = Math.floor(digit.number / 10 % 10);
            digit.сотни = Math.floor(digit.number / 100 % 10);
        } else {
            digit.number = 0;
            console.log('Вы ввели не подхлдящее число, введите число в диапазоном от 0 до 999');
        }
        console.log(digit);
    }
};

digit.foo();
