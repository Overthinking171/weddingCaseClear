import React from "react";
import Jumbotron from "./components/Jumbotron";
import Akad from "./components/Akad";
import LoveStory from "./components/LoveStory";
import ProkesGift from "./components/ProkesGift";
import RSVPFooter from "./components/RSVPFooter";
import Album from "./components/Album";

const Home = () => {
  return (
    <div className="wrapper">
      <Jumbotron />
      <Akad />
      <LoveStory />
      <Album />
      <ProkesGift />
      <RSVPFooter />
    </div>
  );
};

export default Home;
