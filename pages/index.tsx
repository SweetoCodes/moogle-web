import type { NextPage } from "next";
import Moogle from "../components/organisms/moogle";
import SEO from "../components/molecules/SEO";

const Home: NextPage = () => {
  return (
    <div className="">
      <SEO
        title="Moogle"
        description="An accessible search engine for discovering cow based content"
        keywords="Moogle Translation Cow Search-Engine"
        imagePreview="/assets/moogle-logo.png"
      />
      <Moogle />
    </div>
  );
};

export default Home;
