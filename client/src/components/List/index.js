import React from "react";
import Item from "../Item/ItemContainer";
import "./List.scss";

const ListContainer = ({ children }) => {
  return (
    <div className="list__container">
      <ul className="list">{children}</ul>
    </div>
  );
};

ListContainer.Item = Item;

export default ListContainer;
