export async function onRequest(context) {
  try {
    const { env, request } = context;
    const { searchParams } = new URL(request.url);

    const key = searchParams.get("key");

    if (!key) return new Response("Key not provided", { status: 400 });
    const value = await env.KV_TEST.get(key);
    if (value === null) return new Response("Key not found", { status: 404 });
    return new Response(value, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error fetching data", { status: 500 });
  }
}
