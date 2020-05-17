import React, { createContext, useState } from "react";
export const context = createContext();

const { Provider } = context;

const ItemContext = ({ type, item, price, children }) => {
  const [state] = useState({ type, item, price });
  return <Provider value={state}>{children}</Provider>;
};

export default ItemContext;
