import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";


const Confirm = ({setShow}) => {
  const { cart } = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const handleConfirm = useCallback(() => {
    setShow(false);
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
  }, [handleConfirm]);
  return (
    <div className="confirm">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
          fill="#1EA575"
        />
        <path
          d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
          fill="#1EA575"
        />
      </svg>
      <h1 className="heading--1--confirm">Order Confirmed</h1>
      <h4 className="heading--4--confirm">We hope you enjoy your food!</h4>
      {cart.map((item, index) => {
        return (
          <div className="confirm__item" key={index}>
            <div className="confirm__text">
              <img
                className="confirm__img"
                src={item.thumbnail}
                alt={item.name}
              />
              <div className="confirm__outer">
                <h3 className="heading--3">{item.name}</h3>
                <div className="confirm__inner">
                  <h4 className="heading--4--bold heading--4--color">
                    {cart[index].quantity}x
                  </h4>
                  <h4 className="heading--4">@ ${item.price}</h4>
                </div>
              </div>
            </div>
            <h4 className="heading--4--bold">
              @ ${item.price * cart[index].quantity}
            </h4>
          </div>
        );
      })}
      <div className="product__order confirm__order">
        <h4 className="heading--4">Order Total </h4>
        <h3 className="heading--3-font">20</h3>
      </div>
      <button className="product__button" onClick={handleConfirm}>
        Start New Order
      </button>
    </div>
  );
};

export default Confirm;
