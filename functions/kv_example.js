export function onRequest(context) {
  return new Response(JSON.stringify({
    data: "wtf"
  }))
}



// export function onRequest(context) {
//   // Destructuring for easy access to necessary objects
//   const { env, request } = context;
//   return new Response(
//     JSON.stringify({
//       data: 1,
//     })
//   );

//   // try {
//   //   // Fetch data from KV store
//   //   const value = await env.MY_KV_NAMESPACE.get("my-key");

//   //   // Check if value exists
//   //   if (value === null) {
//   //     return new Response("Key not found", { status: 404 });
//   //   }

//   //   // Return the value as a response
//   //   return new Response(value, {
//   //     headers: { 'Content-Type': 'application/json' },
//   //   });
//   // } catch (error) {
//   //   // Handle any errors
//   //   return new Response('Error fetching data', { status: 500 });
//   // }
// }
