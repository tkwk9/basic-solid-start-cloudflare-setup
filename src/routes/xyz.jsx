import { Title } from "solid-start";
import { createResource, Show } from "solid-js";
import styles from "./xyz.module.scss";

const fetchKVData = async () => {
  const response = await fetch("https://basic-solid-start-cloudflare-setup.pages.dev/kv_example");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const Home = () => {
  const [data] = createResource(fetchKVData);

  return (
    <main>
      <Title>SolidStart - XYZ</Title>
      <Show when={data()}>
        <h1 class={styles.header}>{data().data}</h1>
      </Show>
    </main>
  );
};

export default Home;
