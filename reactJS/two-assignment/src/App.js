import React from "react";
import Navbar from "./Navbar";
import Masthead from "./Masthead";
import "./styles.css";
import Portfoliosection from "./Portfoliosection";
import About from "./About";
import Contactsection from "./Contactsection";
import Footer from "./Footer";
import Copyright from "./Copyright";
import Scrollbar from "./Scrollbar";
import Portfoliomodels from "./Portfoliomodels";

const App = () => (
  <div>
    <Navbar />
    <Masthead />
    <Portfoliosection />
    <About />
    <Contactsection />
    <Footer />
    <Copyright />
    <Scrollbar />
    <Portfoliomodels />
  </div>
);

export default App;
