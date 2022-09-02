import React, { useState } from 'react';
import goodsArr from './goods.json'
import Goods from './Goods';
import Cart from './Cart';

import './App.css';

function App() {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  const addToCart = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('add-to-cart')) return false; // если кликнули не на кнопке с нужным нам классом, то выходим из метода.

    let cartTemp = cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1; // проверяем, если артикула товара нет в объекте корзине - то делаем запись в формате атикул: 1, т.е.один товар, а если товар уже есть - то увеличиваем количество на единицу.

    let ccc = count; // вспомогательный, отвечает за количество товаров в корзине
    ccc++;
    setCount(ccc);
  }


  let showCart
  if (count !== 0) {
    showCart = <Cart cartVal={cart} goods={goodsArr} />;
  }
  else {
    showCart = 'Empty';
  }

  return (
    <>
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={addToCart}>
          {goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />)}
        </div>
        {showCart}
      </div>
    </>
  );
}

export default App;
