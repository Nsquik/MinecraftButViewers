import { useReducer, useRef, useCallback } from "react";
import usePreviousState from "./usePreviousState";

export const types = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  SET: "SET",
};

const INTERNAL_INITIAL_STATE = {
  count: 0,
  isPressed: false,
};

export const INTERNAL_REDUCER = ({ count }, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return {
        count: count + 1,
        isPressed: true,
      };
    case types.DECREMENT:
      return {
        count: count - 1,
        isPressed: true,
      };
    case types.SET: {
      return { count: payload, isPressed: true };
    }
    case types.RESET:
      return payload;
    default:
      break;
  }
};

const callFnsInSequence = (...fns) => (...args) => {
  fns.forEach((fn) => fn && fn(...args));
};

const useCounterState = (initialState = INTERNAL_INITIAL_STATE, reducer = INTERNAL_REDUCER) => {
  const userInitialState = useRef(initialState);
  const [counterState, dispatch] = useReducer(reducer, initialState);

  const { count, isPressed } = counterState;

  const prevCount = usePreviousState(count);

  ///////////////////
  ///// ACTIONS /////
  ///////////////////

  const reset = useCallback(() => {
    if (count !== prevCount) {
      dispatch({ type: types.RESET, payload: userInitialState.current });
    }
  }, [prevCount, count, dispatch]);

  const incrementCounter = useCallback(() => {
    dispatch({ type: types.INCREMENT });
  }, [dispatch]);

  const decrementCounter = useCallback(() => {
    dispatch({ type: types.DECREMENT });
  }, [dispatch]);

  const setCounter = useCallback(
    (value) => {
      dispatch({ type: types.SET, payload: value });
    },
    [dispatch]
  );

  //////////////////////////////////
  /////////PROP GETTERS////////////
  //////////////////////////////////

  const getIncrementerProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(incrementCounter, onClick),
    "aria-pressed": isPressed,
    ...otherProps,
  });

  const getDecrementerProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(decrementCounter, onClick),
    "aria-pressed": isPressed,
    ...otherProps,
  });

  const getCounterProps = ({ ...otherProps }) => ({
    count,
    "aria-valuenow": count,
    ...otherProps,
  });

  return { counterState, reset, getIncrementerProps, getDecrementerProps, getCounterProps, setCounter };
};

export default useCounterState;
