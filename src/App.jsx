import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Portfolio2 from "./components/portfolio2/Portfolio2";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio2 />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
