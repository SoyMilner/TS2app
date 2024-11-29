import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Artículos</p>
          <p>Título</p>
          <p>Precio</p>
          <p>Cantidad</p>
          <p>Total</p>
          <p>Eliminar</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.food_image} alt={item.food_name} />
                  <p>{item.food_name}</p>
                  <p>${item.food_price}</p>
                  <div>{cartItems[item.food_id]}</div>
                  <p>${item.food_price * cartItems[item.food_id]}</p>
                  <p
                    className='cart-items-remove-icon'
                    onClick={() => removeFromCart(item.food_id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Totales del Carrito</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Envío</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>IR A PAGAR</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si tienes un código promocional, introdúcelo aquí</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Código promocional' />
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;