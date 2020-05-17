import React from "react";
import Item from "./index";
import ItemContext from "../../context/ItemContext";
import useCounterState, { types, INTERNAL_REDUCER } from "../../hooks/useCounterState";
import Counter from "../Counter";
import Buy from "../Buy";
const ItemContainer = ({ type, item }) => {
  const MAX_COUNT = 10;
  const MIN_COUNT = 1;

  const initialState = {
    count: 1,
    isPressed: false,
  };

  const reducer = (state, action) => {
    if (action.type === types.DECREMENT && MIN_COUNT === state.count) {
      return state;
    }

    if (action.type === types.INCREMENT && MAX_COUNT === state.count) {
      return state;
    }

    return INTERNAL_REDUCER(state, action);
  };

  const { counterState, getCounterProps, getDecrementerProps, getIncrementerProps, reset } = useCounterState(
    initialState,
    reducer
  );

  const { count } = counterState;

  return (
    <ItemContext type={type} item={item}>
      <Item>
        <div className="counter">
          <Counter>
            {/* <button {...getIncrementerProps()}>ELOELO</button> */}
            <Counter.Decrement passprops={getDecrementerProps()} />
            <div className="total__container">
              <Counter.Total passprops={count} />
              <Counter.Reset passprops={reset} />
            </div>
            <Counter.Increment passprops={getIncrementerProps()} />
          </Counter>

          <Buy />
        </div>
      </Item>
    </ItemContext>
  );
};

export default ItemContainer;
