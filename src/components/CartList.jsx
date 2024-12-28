import React from "react";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen } from '../features/modal/modalSlice'

const CartList = () => {
  const { total, cartItems, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty!</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">

      <header>
        <h2>Your Bag</h2>
      </header>

      <div>
        {cartItems.map(({ id, title, price, img, amount }) => (
          <Cart key={id} id={id} title={title} price={price} img={img} amount={amount} />
        ))}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>Total: ${total.toFixed(2)}</h4>
          <button className="btn" onClick={() => dispatch(modalOpen())}>
            Clear Cart
          </button>
        </div>
      </footer>
      
    </section>
  );
};

export default CartList;
