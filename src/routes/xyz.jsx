import { Title } from "solid-start";
import { Show } from "solid-js";
import { useKvData } from "~/utils/data-fetchers";

const Xyz = () => {
  // const [response] = createResource(() => fetchKvData("key"));
  const [response] = useKvData("key");
  return (
    <main>
      <Title>SolidStart - XYZ</Title>
      <Show when={response()}>
        <h1 class="text-center text-5xl p-1 text-blue-800 mt-10">
          {response().data}
        </h1>
      </Show>
    </main>
  );
};

export default Xyz;
