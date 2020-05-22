import React from "react";
import ListContainer from "../List";
import { EFFECT } from "../Item/types";

const Mobs = () => {
  return (
    <>
      <ListContainer>
        <ListContainer.Item type={EFFECT} item="blindness" price={5} max_count={5} />
        <ListContainer.Item type={EFFECT} item="slowness" price={5} />
        <ListContainer.Item type={EFFECT} item="weakness" price={5} />
        <ListContainer.Item type={EFFECT} item="hunger" price={5} />
      </ListContainer>
    </>
  );
};

export default Mobs;
