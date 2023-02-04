import React, { useEffect, useState } from "react";
import NewsCard from "../newscard/NewsCard";
import "./Home.scss";
import axios from "../axiosClient/axiosClient";

function Home() {
  const apiKey = "ce1e6693338d4eb0a089fe2ca839eeda";

  const [myData, setmyData] = useState([]);
  const [searchQ, setsearchQ] = useState("");

  async function fetchData(key) {
    try {
      const data = await axios.get(`/top-headlines?country=in&apiKey=${key}`);
      setmyData(data.data.articles);
    } catch (error) {
      console.log(error);
    }
  }
  async function searchDataFetch(key, search) {
    try {
      const data = await axios.get(`/everything?q=${search}&apiKey=${key}`);
      setmyData(data.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(apiKey);
  }, []);

  return (
    <div className="Home ">
      <div className="container ">
        <nav className="flex">
          <div className="heading flex">
            <h1 className="title">Newsz.</h1>
            <ul className=" list flex">
              <li
                onClick={() => {
                  searchDataFetch(apiKey, "sports");
                }}
              >
                Sports
              </li>
              <li
                onClick={() => {
                  searchDataFetch(apiKey, "movies");
                }}
              >
                Movies
              </li>
              <li
                onClick={() => {
                  searchDataFetch(apiKey, "business");
                }}
              >
                Business
              </li>
            </ul>
          </div>
          <div className="search-box flex">
            <input
              type="text"
              placeholder="Search News"
              onChange={(e) => {
                setsearchQ(e.target.value);
              }}
            />

            <button
              onClick={() => {
                searchDataFetch(apiKey, searchQ);
              }}
            >
              Search
            </button>
          </div>
        </nav>
        <div className="news-feed flex">
          {myData.map((item) => {
            return (
              <NewsCard
                title={item.title}
                urlToImage={item.urlToImage}
                url={item.url}
                description={item.description}
                publishedAt={item.publishedAt}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
