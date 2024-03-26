import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItem, removeItem } from "../utils/CartSlice";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0); // State to hold total price

  const dispatch = useDispatch();

  useEffect(() => {
    // Save cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Calculate total price
    const newTotalPrice = cartItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Pass the item itself as payload
  };

  return (
    <>
      <div className="cart-item">
        <h1 className="cart-heading">Cart</h1>
        <button onClick={handleClearCart} className="cart-btn-remove-all">
          Clear All Items
        </button>
        {cartItems.map((item, index) => (
          <div className="one-cart" key={index}>
            <FoodItem
              {...item}
            />
            <button
              onClick={() => handleRemoveItem(item)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
        <OrderSummary totalPrice={totalPrice} />{" "}
        {/* Pass totalPrice to OrderSummary */}
      </div>
    </>
  );
};

export default Cart;
