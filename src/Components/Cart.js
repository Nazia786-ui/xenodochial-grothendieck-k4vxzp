import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementItems,
  decrementItems,
  removeItems,
} from "./utils/Store/cartSlice";

import SubTotal from "./SubTotal";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const select = useSelector((store) => store.cart.items);
  console.log("select", select);
  const dispatch = useDispatch();
  function handleAdd(id) {
    console.log("add");
    dispatch(incrementItems(id));
    console.log("add");
  }

  return (
    <div>
      {select.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        <div>
          {select.map((a) => (
            <div
              key={a.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{a.name}</span>
              <span>{(a.defaultPrice / 100) * a.quantity}</span>
              <button onClick={() => handleAdd(a)}>+</button>
              {a.quantity}
              <button onClick={() => dispatch(decrementItems(a))}>-</button>
              <button onClick={() => dispatch(removeItems(a))}>🗑</button>
            </div>
          ))}
          <SubTotal />
        </div>
      )}
    </div>
  );
};

export default Cart;
