import React from "react";

const Total = ({ passprops }) => {
  return (
    <>
      <div className="quantity">szt.</div>
      <div className="total">{passprops}</div>{" "}
    </>
  );
};

const Reset = ({ passprops }) => {
  return (
    <button className="reset" onClick={() => passprops()}>
      RESET
    </button>
  );
};

const Decrement = ({ passprops }) => {
  return (
    <svg
      {...passprops}
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

const Increment = ({ passprops }) => {
  return (
    <svg
      {...passprops}
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

const Counter = ({ children }) => {
  return <>{children}</>;
};

Counter.Total = Total;
Counter.Reset = Reset;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;
