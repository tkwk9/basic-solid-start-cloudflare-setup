import { createSignal } from "solid-js";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button class={styles.increment} onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
};

export default Counter;
