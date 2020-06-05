import React from "react";
import "./Me.scss";
import useUserOrders from "../../hooks/useUserOrders";
import ClipLoader from "react-spinners/ClipLoader";

const Me = () => {
  const data = useUserOrders();
  console.log(data);

  const renderList = () => {
    if (data.length > 0) {
      return data.map((item) => {
        return (
          <div className="me__li">
            <div className="me__type">{item.type}</div>
            <div className="me__item">{item.item}</div>
            <div className="me__price">{item.price}zł</div>
          </div>
        );
      });
    } else {
      return <ClipLoader color={"#ffdd31"} />;
    }
  };

  return (
    <>
      <div className="me">
        <ul className="me__list">
          <h1 className="head">Twoje zamówienia</h1>
          {renderList()}
        </ul>
      </div>
    </>
  );
};

export default Me;
