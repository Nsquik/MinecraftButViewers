import React from "react";
import ListContainer from "../List";
import { SOUND } from "../Item/types";

const Mobs = () => {
  return (
    <>
      <ListContainer>
        <ListContainer.Item type={SOUND} item="creeper" price={5} max_count={5} />
        <ListContainer.Item type={SOUND} item="end" price={5} />
        <ListContainer.Item type={SOUND} item="ghast" price={5} />
      </ListContainer>
    </>
  );
};

export default Mobs;
