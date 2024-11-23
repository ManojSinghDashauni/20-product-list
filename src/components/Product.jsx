import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartSlice";
import Confirm from "./Confirm";

const Product = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const { cart } = useSelector((state) => state.name);
  const dispatch = useDispatch();
  return (
    <div className="product">
      {cart.map((item, index) => {
        return (
          <div className="product__item" key={index}>
            <h3 className="heading--3">{item.name}</h3>
            <div className="product__text">
              <div className="product__inner">
                <h4 className="heading--4--bold heading--4--color">
                  {cart[index].quantity}x
                </h4>
                <h4 className="heading--4">@ ${item.price}</h4>
                <h4 className="heading--4--bold">
                  @ ${item.price * cart[index].quantity}
                </h4>
              </div>
              <button
                className="product__btn"
                onClick={() => dispatch(removeItem(item))}
              >
                <svg
                  className="product__svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
      <div className="product__order">
        <h4 className="heading--4">Order Total </h4>
        <h3 className="heading--3-font"></h3>
      </div>
      <div className="product__tree">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <path
            fill="#1EA575"
            d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
          />
          <path
            fill="#1EA575"
            d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
          />
        </svg>
        <h4 className="heading--4">
          this is a <span className="heading--4--bold">carbon-neutral</span>{" "}
          delivery
        </h4>
      </div>
      <button className="product__button" onClick={() => toggle()}>
        Confirm Order
      </button>
      {show ? <Confirm /> : ""}
    </div>
  );
};

export default Product;
