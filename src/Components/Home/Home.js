import React from "react";
import Banner from "../Banner/Banner";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Footer from "../Footer/Footer";
import FuteredCatagory from "../FuteredCatagory/FuteredCatagory";
import Header from "../Header/Header";
import PopularServices from "../PopularServices/PopularServices";
import WorkFlow from "../WorkFlow/WorkFlow";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <FuteredCatagory></FuteredCatagory>
      <FeaturedServices></FeaturedServices>
      <PopularServices></PopularServices>
      <WorkFlow></WorkFlow>

    </div>
  );
};

export default Home;
