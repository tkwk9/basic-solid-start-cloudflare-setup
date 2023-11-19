import { Title } from "solid-start";
import { createResource, Show } from "solid-js";
import { fetchKvData } from "~/utils/data-fetchers";

import styles from "./xyz.module.scss";

const Home = () => {
  const [response] = createResource(fetchKvData);
  return (
    <main>
      <Title>SolidStart - XYZ</Title>
      <Show when={response()}>
        <h1 class={styles.header}>{response().data}</h1>
      </Show>
    </main>
  );
};

export default Home;
