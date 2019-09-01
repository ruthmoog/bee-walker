import React, { useState } from "react";

function BeeWalker(props) {
  const [queenCount, setQueenCount] = useState(0);
  const [workerCount, setWorkerCount] = useState(0);

  return (
    <>
      <h1 data-testid="greeting-text">{props.species}</h1>
      <dl>
        <dt>Queens</dt>
        <dd data-testid="queen-counter">{queenCount}</dd>
        <dt>Workers</dt>
        <dd data-testid="worker-counter">{workerCount}</dd>
      </dl>
      <button onClick={() => setQueenCount(queenCount + 1)}>Count queen</button>
      <button onClick={() => setWorkerCount(workerCount + 1)}>
        Count worker
      </button>
    </>
  );
}

export default BeeWalker;
