import { useServerContext } from "solid-start";
import { isServer } from "solid-js/web";

const fetchKvData__dev = async (key) => {
  // TODO: Get dev SSR figured out or disable local SSR
  const link = isServer
    ? `https://basic-solid-start-cloudflare-setup.pages.dev/kv?key=${key}`
    : `/kv?key=${key}`;
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const fetchKvData__prod = async (key) => {
  // TODO: Handle errors and missing values
  if (isServer) {
    const { env } = useServerContext();
    const val = await env.KV_TEST.get(key);
    return JSON.parse(val);
  }

  // Create an API path
  const link = `/kv?key=${key}`;
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const fetchKvData =
  process.env.NODE_ENV === "development" ? fetchKvData__dev : fetchKvData__prod;

export { fetchKvData };
