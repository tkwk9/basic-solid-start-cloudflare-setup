import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="bg-blue-200 hover:bg-blue-300 active:bg-blue-400 text-blue-900 rounded-full border-solid border-2 border-blue-200 focus:border-blue-700 py-4 px-8"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
};

export default Counter;
