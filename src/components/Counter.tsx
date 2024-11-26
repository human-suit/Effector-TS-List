import { useUnit } from "effector-react";
import { $counter, increment, decrement } from "../stores/counter";

const Counter = () => {
  const count: number = useUnit($counter);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Counter;
