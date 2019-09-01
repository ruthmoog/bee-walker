import React from "react";
import BeeWalker from "./BeeWalker";

function App() {
  return (
    <>
      <BeeWalker species="bombus terrestris" />
      <BeeWalker species="bombus lucorum" />
      <BeeWalker species="bombus pratorum" />
    </>
  );
}

export default App;
