import React from "react";
import { useState, useEffect } from "react";
import { fetchNews } from "./api";
import { NavLink } from "react-router-dom";
import TimeAgo from "./TimeAgo";

const Sports = () => {
  const [newsSources, setNewsSources] = useState([]);
  const category = "sports";

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category);
      setNewsSources(data);
    };

    getNews();
  }, []);

  const renderSportsNews = () => {
    if (
      !newsSources ||
      !newsSources.articles ||
      newsSources.articles.length === 0
    ) {
      return "No News Available";
    }

    return newsSources.articles.map((cur, index) => {
      return (
        <div key={index} className="col-xl-4 col-md-6 mb-3">
          <div className="card h-100 bg-dark text-light">
            <img
              src={
                cur.urlToImage ||
                "https://e7.pngegg.com/pngimages/817/265/png-clipart-headline-newspaper-nigeria-breaking-news-others-miscellaneous-text.png"
              }
              alt=" "
              style={{ height: "250px", objectFit: "cover" }}
              className="card-img-top mx-auto text-light bg-dark"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">{cur.title}</h5>
              <p className="card-text">{cur.description}</p>
            </div>
            <NavLink
              to={cur.url}
              className="btn btn-outline-primary rounded-bottom w-50 d-flex justify-content-center mx-auto mb-2"
            >
              Read More
            </NavLink>
            <div>
              <TimeAgo prop={cur.publishedAt} />
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container-lg">
      <h1 className="my-4">Sports NEWS</h1>
      <div className="row"> {renderSportsNews()}</div>
    </div>
  );
};

export default Sports;
