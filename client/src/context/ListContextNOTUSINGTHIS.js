import React, { createContext, useContext } from "react";
export const listContext = createContext();

const { Provider } = listContext;

const ListContext = ({ type, children }) => {
  return <Provider value={type}>{children}</Provider>;
};

export default ListContext;
