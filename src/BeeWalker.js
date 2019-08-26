import React, { useState } from "react";

function BeeWalker() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p data-testid="greeting-text">'BEE'</p>
      <button onClick={() => setCount(count + 1)}>Count bee</button>
      <p data-testid="bee-counter">bees: {count}</p>
    </>
  );
}

export default BeeWalker;
