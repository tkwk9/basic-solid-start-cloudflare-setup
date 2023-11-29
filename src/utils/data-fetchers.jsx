import { useServerContext } from "solid-start";
import { createResource, onMount } from 'solid-js';
import { isServer } from "solid-js/web";

const fetchKvData__dev = async (key) => {
  if(isServer) return null;
  const response = await fetch(`/kv?key=${key}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const fetchKvData__prod = async (key) => {
  if (isServer) {
    const { env } = useServerContext();
    const val = await env?.KV_TEST?.get(key);
    // TODO: This probably shouldn't throw an error the way it is right now
    // It should default to client-side fetch if there's an SSR error
    if (!val) throw new Error("Failed to fetch data SSR");
    return JSON.parse(val);
  }

  const link = `/kv?key=${key}`;
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const fetchKvData =
  process.env.NODE_ENV === "development" ? fetchKvData__dev : fetchKvData__prod;


const useKvData = (key) => {
  // TODO: handle null key
  let [data, { refetch }] = createResource(() => fetchKvData(key));

  // TODO: Make this dev-specific + handle SSR error in production
  onMount(() => {
    refetch();
  });

  return [data];
}

export { useKvData };
