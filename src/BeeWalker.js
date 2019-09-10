import React from "react";
import BeeCounter from "./BeeCounter";

function BeeWalker(props) {
  return (
    <>
      <p>Total: { totalCount }</p>
      <BeeCounter species="bombus hortorum" />
    </>
  );
}

export default BeeWalker;
