import { Title } from "solid-start";
import { createResource, Show } from "solid-js";
import { fetchKvData } from "~/utils/data-fetchers";

const Xyz = () => {
  const [response] = createResource(() => fetchKvData("key"));
  return (
    <main>
      <Title>SolidStart - XYZ</Title>
      <Show when={response()}>
        <h1 class="text-center text-5xl p-1 text-blue-800">{response().data}</h1>
      </Show>
    </main>
  );
};

export default Xyz;
