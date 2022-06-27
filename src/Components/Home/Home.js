import React from "react";
import Banner from "../Banner/Banner";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Footer from "../Footer/Footer";
import FuteredCatagory from "../FuteredCatagory/FuteredCatagory";
import Header from "../Header/Header";
import LastBanner from "../LastBanner/LastBanner";
import PopularServices from "../PopularServices/PopularServices";
import RequiestServices from "../RequiestServices/RequiestServices";
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
      <LastBanner></LastBanner>
      <RequiestServices></RequiestServices>
      <Footer></Footer>

    </div>
  );
};

export default Home;
