import React, { useState } from "react";

function BeeWalker(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <p data-testid="greeting-text">{props.species}</p>
      <button onClick={() => setCount(count + 1)}>Count queen</button>
      <p data-testid="queen-counter">queens: {count}</p>
    </>
  );
}

export default BeeWalker;
