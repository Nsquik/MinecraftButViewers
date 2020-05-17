import React, { createContext } from "react";
import useCounterState, { INTERNAL_REDUCER, types } from "../hooks/useCounterState";

export const counterContext = createContext();

const { Provider } = counterContext;

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

const CounterContext = ({ children }) => {
  const { counterState, getDecrementerProps, getIncrementerProps, reset } = useCounterState(initialState, reducer);
  const { count } = counterState;

  return <Provider value={{ count, getDecrementerProps, getIncrementerProps, reset }}>{children}</Provider>;
};

export default CounterContext;
