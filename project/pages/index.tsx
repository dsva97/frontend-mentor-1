import { Card, Layout } from "../components";
import { content } from "../data";

const Home = () => {
  return <Layout>{content.map(Card)}</Layout>;
};

export default Home;
