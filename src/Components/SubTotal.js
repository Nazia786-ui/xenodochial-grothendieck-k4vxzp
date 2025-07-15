import React from "react";
import { useSelector } from "react-redux";

const SubTotal = () => {
  const select = useSelector((store) => store.cart.items);
  const total = select.reduce(
    (sum, item) => (sum += item.quantity * item.price),
    0
  );

  return (
    <div>
      {/* {select.map((item) => (sum = sum + item.quantity * item.price))} */}
      <h1>Total is -{total / 100}</h1>
    </div>
  );
};

export default SubTotal;
