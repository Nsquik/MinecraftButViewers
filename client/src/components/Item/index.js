import React, { useContext } from "react";
import { context } from "../../context/ItemContext";
import "./Item.scss";

const Item = ({ children }) => {
  const { type, item } = useContext(context);
  return (
    <div className="list__item">
      <div className="list__title">
        <div className="list__type">{type.pl}:</div>
        <div className="list__desc">{item}</div>
      </div>

      <div className="list__buy">{children}</div>
    </div>
  );
};

export default Item;
