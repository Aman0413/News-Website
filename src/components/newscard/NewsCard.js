import React from "react";
import "./NewsCard.scss";
import moment from "moment";

function NewsCard({ title, urlToImage, url, description, publishedAt, key }) {
  const date = moment(publishedAt).utc().format("DD-MM-YYYY");
  return (
    <div className="NewsCard center">
      <div className="container">
        <div className="image">
          <img src={urlToImage} alt="" />
        </div>
        <h4>{title}</h4>
        <p className="desc">{description}</p>
        <p className="date">Publish at: {date}</p>
        <span>
          <button>
            <a href={url}>Read More...</a>
          </button>
        </span>
      </div>
    </div>
  );
}

export default NewsCard;
