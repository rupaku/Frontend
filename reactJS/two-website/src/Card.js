import React from "react";

const Card = ({ title, buttonText, myImg, para }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={myImg} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{para}</p>
      <a href="/#" className="btn btn-success">
        {buttonText}
      </a>
    </div>
  </div>
);

export default Card;
