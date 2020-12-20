'use strict';
const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование товара</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество товара</b>: ${good.quantity}</div>
                    <div><b>Стоимость товара</b>: ${good.quantity * good.price}</div>
                </div>`;
    }
}

const Basket = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
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

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.render();
    },

    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(а) стоимостью ${this.countBasketPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    countBasketPrice() {
        return this.goods.reduce((price, good) => price += good.price * good.quantity, 0);
    },

    clearCart() {
        this.goods = [];
        this.render();
    },
};

Basket.init();




