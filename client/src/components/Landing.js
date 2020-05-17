import React from "react";
import ListContainer from "./List";
import { SPAWN } from "./Item/types";
import "./Landing.scss";
import ItemContext from "../context/ItemContext";

const Landing = () => {
  return (
    <>
      <ListContainer>
        <ListContainer.Item type={SPAWN} item="CREEPER" price={5} />
        <ListContainer.Item type={SPAWN} item="SKELETON" price={5} />
        <ListContainer.Item type={SPAWN} item="ZOMBIE" price={5} />
      </ListContainer>
    </>
  );
};

export default Landing;
