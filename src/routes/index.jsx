import { Title } from "solid-start";
import Counter from "~/components/Counter";

const Home = () => {
  return (
    <main>
      <Title>SolidStart - Cloudflare Pages</Title>
      <h1>Hello world</h1>
      <Counter />
    </main>
  );
};

export default Home;
