import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css";

const CartPage = ({ items, onRemoveOne, onAddOne }) => {
  let total = 0;
  if(items.length === 0)
    return (
        <div className='Cart-empty'>
            <p>Your cart is empty</p>
            <p>Want to add some expensive products to it?</p>
        </div>
    );
  else 
    return (
        <ul className="CartPage-items">
        {items.map(item => {
            total = total + item.price * item.count;
            return (
            <li key={item.id} className="CartPage-item">
                <Item item={item}>
                <div className="CartItem-controls">
                    <button className="CartItem-removeOne" onClick={() => onRemoveOne(item)}>
                    &ndash;</button>
                    <span className="CartItem-count">{item.count}</span>
                    <button className="CartItem-addOne" onClick={() => onAddOne(item)}>
                    +</button>
                </div>
                </Item>
            </li>
            );
        })}
        <span className="Cart-total">Total: ${total}</span>
        </ul>
  );
};

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
