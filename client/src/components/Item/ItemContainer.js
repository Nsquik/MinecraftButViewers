import React from "react";
import Item from "./index";
import ItemContext from "../../context/ItemContext";
import CounterContext from "../../context/CounterContext";
import Counter from "../Counter";
import Buy from "../Buy";

const ItemContainer = ({ type, item, price }) => {
  return (
    <ItemContext type={type} item={item} price={price}>
      <Item>
        <div className="counter">
          <CounterContext>
            <Counter>
              <Counter.Decrement />
              <div className="total__container">
                <Counter.Total />
                <Counter.Reset />
              </div>
              <Counter.Increment />
            </Counter>

            <Buy />
          </CounterContext>
        </div>
      </Item>
    </ItemContext>
  );
};

export default ItemContainer;
