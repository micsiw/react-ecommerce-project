import Hero from "../components/Hero";
import Bestsellers from "../components/Bestsellers";
import Info from "../components/Info";
import Featured from "../components/Featured";
import BlogPreview from "../components/Blog-preview";

function Home() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <Info />
      <Featured />
      <BlogPreview />
    </>
  );
}

export default Home;
