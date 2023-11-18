import { Title } from "solid-start";
import { createResource, Show } from "solid-js";
import styles from "./xyz.module.scss";

const fetchKVData = async () => {
  const link = typeof window !== 'undefined'
    ? "/kv_example"
    : "https://basic-solid-start-cloudflare-setup.pages.dev/kv_example";
  const response = await fetch(
    link
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const Home = () => {
  const [response] = createResource(fetchKVData);
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
