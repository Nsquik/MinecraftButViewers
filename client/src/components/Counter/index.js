import React, { useContext } from "react";
import { counterContext } from "../../context/CounterContext";
import { get } from "mongoose";

const Total = () => {
  const { count } = useContext(counterContext);

  return (
    <>
      <div className="quantity">szt.</div>
      <div className="total">{count}</div>
    </>
  );
};

////////////////////////////////////////

const Reset = () => {
  const { reset } = useContext(counterContext);

  return (
    <button className="reset" onClick={() => reset()}>
      RESET
    </button>
  );
};

////////////////////////////////////////
const Decrement = () => {
  const { getDecrementerProps } = useContext(counterContext);

  return (
    <svg
      {...getDecrementerProps()}
      className="counter__decrement"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
      viewBox="0 0 24 24"
      fill="white"
      width="18px"
      height="18px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </svg>
  );
};

////////////////////////////////////////

const Increment = () => {
  const { getIncrementerProps } = useContext(counterContext);

  return (
    <svg
      {...getIncrementerProps()}
      className="counter__increment"
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="18px"
      height="18px"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
  );
};

////////////////////////////////////////

const Counter = ({ children }) => {
  return <>{children}</>;
};

Counter.Total = Total;
Counter.Reset = Reset;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
