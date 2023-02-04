import React from "react";
import "./NewsCard.scss";
import dummyImg from "../download (1).jpeg";

function NewsCard() {
  return (
    <div className="NewsCard center">
      <div className="container">
        <div className="image">
          <img src={dummyImg} alt="" />
        </div>
        <h4>Aman</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit consectetur consequuntur laborum! Id illo magni nemo
          maxime soluta praesentium consequuntur.
        </p>
        <span>
          <button>Read More...</button>
        </span>
      </div>
    </div>
  );
}

export default NewsCard;
