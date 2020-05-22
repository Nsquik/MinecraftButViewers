import React from "react";
import ListContainer from "../List";
import { SPAWN, EFFECT } from "../Item/types";

const Mobs = () => {
  return (
    <>
      <ListContainer>
        <ListContainer.Item type={SPAWN} item="creeper" price={5} max_count={5} />
        <ListContainer.Item type={SPAWN} item="skeleton" price={5} />
        <ListContainer.Item type={SPAWN} item="zombie" price={5} />
      </ListContainer>
    </>
  );
};

export default Mobs;
