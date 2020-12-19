import React from "react";
import QuantityEditor from "./QuantityEditor";

const Cart = () => {

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="col-4 mx-auto border">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
            <h4>shoes</h4>
            <p>200</p>
            <QuantityEditor/>
          </div>
        </div>
        <div className="col-12 mt-5">
          <div className="col-4 mx-auto border">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/1023937/pexels-photo-1023937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <h4>belt</h4>
            <p>150</p>
            <QuantityEditor/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
