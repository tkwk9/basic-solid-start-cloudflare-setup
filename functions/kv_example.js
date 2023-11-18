export async function onRequest(context) {
  const { env, request } = context;

  try {
    const value = await env.KV_TEST.get("key");

    if (value === null) {
      return new Response("Key not found", { status: 404 });
    }

    return new Response(value, {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
    return new Response('Error fetching data', { status: 500 });
  }
}
