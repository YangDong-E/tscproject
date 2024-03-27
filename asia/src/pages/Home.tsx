import React from "react";
import Carousel from "../component/home/carousel/Carousel";
// import ItemsCard from "../component/home/ItemsCard/ItemsCard";
// import { ItemCardList } from "../component/ItemCardList/ItemCardListStyle";
import ItemCardList from "../component/ItemCardList/ItemCardList";

const Home = () => {
  return (
    <main>
      <Carousel />
      <ItemCardList />
    </main>
  );
};

export default Home;
