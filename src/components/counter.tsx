import React, { useState } from "react";

const Counter: React.FC = (props) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>counter+1</button>
      计数器：{counter}
    </>
  );
};

export default Counter;
