"use client";

import { remove } from "@/Redux/cartSlice";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar/page";
function Cart() {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <>
    <Navbar/>
    <div className="row">
      {cartItems.map((item) => (
        <div className="col-md-6" key={item.id}>
          <div className="card mb-3">
            <img src={item.image} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">${item.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(remove(product))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cart;
