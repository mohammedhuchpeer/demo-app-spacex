import React from "react";
import FiltersCard from "../components/FiltersCard";
import ImageCard from "../components/ImageCard";

const Home = (props) => {
  return (
    <div>
      <h1>SpaceX Launch Programs</h1>
      <FiltersCard />
      <ImageCard />
    </div>
  );
};

export default Home;
