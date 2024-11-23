import React from "react";
import data from "../assets/data.json";
import Button from "./Button";

export const Card = () => {
  return (
    <div className="cards">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card__img--box">
              <picture>
                <source media="(max-width:376px)" srcSet={item.mobile} />
                <img
                  className="card__img"
                  src={item.desktop}
                  alt={item.category}
                />
              </picture>
              <div className="card__btn--box">
                <Button item={item} />
              </div>
            </div>
            <div className="card__text">
              <h4 className="heading--4">{item.category}</h4>
              <h3 className="heading--3">{item.name}</h3>
              <h5 className="heading--5">${item.price}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};
