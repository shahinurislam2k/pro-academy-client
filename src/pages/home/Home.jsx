import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import Features from "./features/Features";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pro Academy - Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      
    </div>
  );
};

export default Home;
