'use strict';

// Задание 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

//      Создаем массив от 1 до 100
var arr = [];
var end = 1;
while (end < 100) {
    end++;
    arr.push(end);
}
//      Удаляем все четные цифры
var a = 2;
var b = 2;
while (a <= 100) {
    a += b;
    arr.splice(arr.indexOf(a), 1);
}
//      Удаляет все цифры которые деляться на нечетные до 10
a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr);


// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var basket_price = 0;
// а)
var Basket = [{ name: 'Монитор', price: 7320 }, { name: 'Клавиатора', price: 1420 }];
Basket.push({ name: 'Наушники', price: 3500 });
// б)
function countBasketPrice(x) {
    for (var i = 0; i < Basket.length; i++) {
        basket_price = basket_price + Basket[i].price;
    }
    return basket_price;
}
console.log(countBasketPrice(Basket));


// Задание 3.  Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
// for(…){// здесь пусто}


for (var j = 0; j <= 9; j++) {
    console.log(j);
}



// Задание 4.  Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть
// 20 рядов, а не 5

var arr = [];
var end = 0;
while (end < 20) {
    end++;
    arr.push('x');
    console.log(arr);
}
