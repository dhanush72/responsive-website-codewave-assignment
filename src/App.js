import React from "react";
import Featured from "./components/Featured/Featured";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import ServiceCard from "./components/ServiceCard/ServiceCard";

const App = () => {
  return (
    <>
      <Menu />
      <Hero />
      <ServiceCard />
      <Featured />
      <Gallery />
    </>
  );
};

export default App;
