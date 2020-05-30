import React from "react";
import Portfoliosectiondata from "./Portfoliosectiondata";

const Portfoliosection = () => (
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        Portfolio
      </h2>
      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>
      <div className="row">
        <Portfoliosectiondata
          datatarget="#portfolioModal1"
          imgId="assets/img/portfolio/cabin.png"
        />
        <Portfoliosectiondata
          datatarget="#portfolioModal2"
          imgId="assets/img/portfolio/cake.png"
        />
        <Portfoliosectiondata
          datatarget="#portfolioModal3"
          imgId="assets/img/portfolio/circus.png"
        />
        <Portfoliosectiondata
          datatarget="#portfolioModal4"
          imgId="assets/img/portfolio/game.png"
        />
        <Portfoliosectiondata
          datatarget="#portfolioModal5"
          imgId="assets/img/portfolio/safe.png"
        />
        <Portfoliosectiondata
          datatarget="#portfolioModal6"
          imgId="assets/img/portfolio/submarine.png"
        />
      </div>
    </div>
  </section>
);

export default Portfoliosection;
