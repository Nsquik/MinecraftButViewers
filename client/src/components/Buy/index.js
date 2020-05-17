import React, { useState } from "react";
import "./Buy.scss";
import Modal from "../../modals/modal";

const Buy = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <button className="buy__button" onClick={() => setState(true)}>
        KUP
      </button>
      {state && <Modal showModal={setState} />}
    </>
  );
};

export default Buy;
