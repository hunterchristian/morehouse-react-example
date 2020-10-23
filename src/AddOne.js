import React, { useState } from "react";

function AddOne() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add one</button>
      <span>{counter > 5 ? counter : "counter not high enough yet"}</span>
    </div>
  );
}

export default AddOne;
