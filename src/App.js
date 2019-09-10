import React from "react";
import BeeCounter from "./BeeCounter";

function App() {
  return (
    <>
      <BeeCounter species="bombus terrestris" />
      <BeeCounter species="bombus lucorum" />
      <BeeCounter species="bombus pratorum" />
    </>
  );
}

export default App;
