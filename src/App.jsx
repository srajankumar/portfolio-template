import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import TopStories from "./components/TopStories";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <Body />
      <TopStories />
      <About />
      <Footer />
    </>
  );
}

export default App;
