import React, { useState } from "react";

function BeeWalker(props) {
  const [queenCount, setQueenCount] = useState(0);
  const [workerCount, setWorkerCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [unknownCount, setUnknownCount] = useState(0);

  return (
    <>
      <h1 data-testid="greeting-text">{props.species}</h1>
      <dl>
        <CasteCount casteType="queen" count={queenCount} />
        <CasteCount casteType="worker" count={workerCount} />
        <CasteCount casteType="male" count={maleCount} />
        <CasteCount casteType="unknown" count={unknownCount} />
      </dl>
      <button onClick={() => setQueenCount(queenCount + 1)}>Count queen</button>
      <button onClick={() => setWorkerCount(workerCount + 1)}>
        Count worker
      </button>
      <button onClick={() => setMaleCount(maleCount + 1)}>Count male</button>
      <button onClick={() => setUnknownCount(unknownCount + 1)}>
        Count unknown
      </button>
    </>
  );
}

const CasteCount = ({casteType, count}) => (
  <>
  <dt>{casteType}</dt>
  <dd data-testid={casteType + "-counter"}>{count}</dd>
  </>
)

export default BeeWalker;
