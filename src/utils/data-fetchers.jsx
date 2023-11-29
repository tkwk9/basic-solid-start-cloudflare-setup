import { useServerContext } from "solid-start";
import { createResource, onMount } from "solid-js";
import { isServer } from "solid-js/web";

const fetchKvData__dev = async (key) => {
  if (isServer) return null;

  const response = await fetch(`/kv?key=${key}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const useKvData__dev = (key) => {
  // TODO: handle null key
  let [data, { refetch }] = createResource(() => fetchKvData__dev(key));

  onMount(() => {
    refetch();
  });

  return [data];
};

// TODO: This still needs to handle SSR error better
const fetchKvData__prod = async (key) => {
  if (isServer) {
    const { env } = useServerContext();
    const val = await env?.KV_TEST?.get(key);
    
    if (val) return { shouldRefetch: true };
    return JSON.parse(val);
  }

  const link = `/kv?key=${key}`;
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const useKvData__prod = (key) => {
  // TODO: handle null key
  let [response, { refetch }] = createResource(() => fetchKvData__prod(key));

  onMount(() => {
    if (response()?.shouldRefetch) refetch();
  });

  return [response];
};

const useKvData =
  process.env.NODE_ENV === "development" ? useKvData__dev : useKvData__prod;

export { useKvData };
