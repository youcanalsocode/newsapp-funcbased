import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, descr, img, newsurl, source, author, date } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}.....</h5>
          <p className="card-text">{descr}.........</p>
          <p className="text-muted">
            By {author} on {date}
          </p>
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <a href={newsurl} target="_blank" className="btn btn-dark">
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};
export default NewsItem;
