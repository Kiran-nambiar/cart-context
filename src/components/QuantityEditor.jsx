import React from "react";

const QuantityEditor = () => {
  const [quantity, setQuantity] = React.useState(1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="d-flex justify-content-center">
      <div onClick={decrement} className="border p-3">
        <h5>-</h5>
      </div>
      <div className="border px-4 py-3">
        <h5>{quantity}</h5>
      </div>
      <div onClick={increment} className="border p-3">
        <h5>+</h5>
      </div>
    </div>
  );
};

export default QuantityEditor;
