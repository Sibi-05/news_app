import React, { useEffect, useState } from "react";
import { fetchNews } from "./api";
import { NavLink } from "react-router-dom";
import TimeAgo from "./TimeAgo";

const Home = () => {
  const [newsSources, setNewsSources] = useState([]);
  const category = "general";

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews(category);
        setNewsSources(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, []);

  const renderNews = () => {
    if (
      !newsSources ||
      !newsSources.articles ||
      newsSources.articles.length === 0
    ) {
      return <p>No news available</p>;
    }

    return newsSources.articles.map((cur, index) => (
      <div key={index} className="col-xl-4 col-md-6 mb-3">
        <div className="card h-100 text-light bg-dark rounded shadow-lg">
          <img
            src={
              cur.urlToImage ||
              "https://e7.pngegg.com/pngimages/817/265/png-clipart-headline-newspaper-nigeria-breaking-news-others-miscellaneous-text.png"
            }
            alt=" "
            className="card-img-top  p-1"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">{cur.title || "Author"}</h5>
            <p className="card-text">{cur.description || "No news"}</p>
          </div>
          <NavLink
            to={cur.url}
            className="btn btn-outline-success rounded-bottom w-50 d-flex justify-content-center mx-auto mb-2"
          >
            Read More
          </NavLink>
          <div>
            <TimeAgo prop={cur.publishedAt} />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container-lg ">
      <h1 className="my-4">NEWS</h1>
      <div className="row">{renderNews()}</div>
    </div>
  );
};

export default Home;
