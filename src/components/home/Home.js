import React from "react";
import NewsCard from "../newscard/NewsCard";
import "./Home.scss";

function Home() {
  return (
    <div className="Home ">
      <div className="container ">
        <nav className="flex">
          <div className="heading flex">
            <h1>News</h1>
            <ul className=" list flex">
              <li>Sports</li>
              <li>Movies</li>
              <li>Business</li>
            </ul>
          </div>
          <div className="search-box flex">
            <input type="text" placeholder="Search News" />

            <button>Search</button>
          </div>
        </nav>
        <div className="news-feed flex">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
