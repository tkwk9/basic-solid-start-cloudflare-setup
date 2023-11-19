import { Title, useServerContext } from "solid-start";
import { createResource, Show } from "solid-js";
import { isServer } from "solid-js/web";
import styles from "./xyz.module.scss";

const fetchKVData__dev = async () => {
  // TODO: Get dev SSR figured out or disable local SSR
  const link = isServer
    ? "https://basic-solid-start-cloudflare-setup.pages.dev/kv_example"
    : "/kv_example";
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

// TODO: Abstract this out, accept a key value
const fetchKVData__prod = async () => {
  // Handle errors and missing values
  if (isServer) {
    const { env } = useServerContext();
    const val = await env.KV_TEST.get("key");
    return JSON.parse(val);
  }

  // Create an API path
  const link = "/kv_example";
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const fetchKVData =
  process.env.NODE_ENV === "development" ? fetchKVData__dev : fetchKVData__prod;

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
