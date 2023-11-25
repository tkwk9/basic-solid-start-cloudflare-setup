import { Title } from "solid-start";
import Counter from "~/components/Counter";

const Home = () => {
  return (
    <main>
      <Title>SolidStart - Cloudflare Pages</Title>
      <h1 class="text-center text-5xl p-1 text-blue-800" >Hello world</h1>
      <Counter />
    </main>
  );
};

export default Home;
