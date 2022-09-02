import React from 'react';

function Cart(props) {

    const renderObj = () => {
        let out = []; // теги, используя возможности jsx будем класть в массив
        for (let key in props.cartVal) { // перебираем переданный props, но в props только артикул и количество
            let goods = getGoodsFromArr(key); // поэтому мы создаем дополнительный метод, который позволяет вытянуть из массива товаров - описание одного товара, и здесь его получаем по артикулу.потом добавляем нужные данные в out и возвращаем его
            out.push(
                <tr key={key}>
                    <td>{goods['title']}</td>
                    <td>{props.cartVal[key]}</td>
                    <td>{props.cartVal[key] * goods['cost']}</td>
                </tr>
            );
        }
        return out;
    }
    let sum = 0;
    const renderObjSummary = () => {

        for (let key in props.cartVal) { // перебираем переданный props, но в props только артикул и количество
            let some = getGoodsFromArr(key);
            sum += +props.cartVal[key] * +some['cost'];
        }
        return (sum);
    }

    const getGoodsFromArr = (art) => {
        for (let i = 0; i < props.goods.length; i++) {
            if (art === props.goods[i]['articul']) {
                return props.goods[i];
            }
        }
    }


    return (
        <div className="cart-field">
            <h1>Корзина</h1>
            <table>
                <tbody>
                    <tr><th>Articul</th><th>Count</th><th>Cost</th></tr>
                    {renderObj()}
                    <tr><th>---------</th><th>--------</th><th>-----</th></tr>
                    <tr><th>Total </th><th></th><th>{renderObjSummary()}</th></tr>

                </tbody>
            </table>
        </div>
    );

}

export default Cart;