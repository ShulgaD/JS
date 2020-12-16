'use strict';

/* 2.Продолжить работу с интернет-магазином:
    2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    2.2. Реализуйте такие объекты.
    2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу. */


/* 
Вариант прошлого урока!

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
console.log(countBasketPrice(Basket)); */


// Новый вариант!

const Basket = {
    goods: [
        {
            id_product: 1,
            product_name: "Монитор",
            price: 7320,
            quantity: 1
        },
        {
            id_product: 2,
            product_name: "Клавиатора",
            price: 1420,
            quantity: 2
        },
        {
            id_product: 3,
            product_name: "Наушники",
            price: 3500,
            quantity: 3
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price * cartItem.quantity, 0);
    }
};

console.log(Basket.countBasketPrice());
