import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// const capitalize = (strings) => {
//   return strings.charAt(0).toUpperCase() + strings.slice(1);
// };

const News = ({ country, catg }) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  // const [pagesize, setpagesize] = useState(5);
  const pagesize = 5;
  const [totalpage, settotalpage] = useState(0);

  useEffect(() => {
    const fetcharticles = async () => {
      try {
        const apiKey = "1ecd3f1d5ea34f5eaeb8ba5cbb053dc7"; // Replace 'YOUR_API_KEY' with your actual API key
        setloading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${catg}&apiKey=${apiKey}&page=${page}&pagesize=${pagesize}`
        );
        if (!response.ok) {
          console.log("error");
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setarticles(data.articles);
        setloading(false);
        settotalpage(data.totalResults);
      } catch (error) {}
    };

    fetcharticles();
  }, [page, country, catg]);

  const fetchMoreData = async () => {
    console.log("fetching data");

    const apiKey = "1ecd3f1d5ea34f5eaeb8ba5cbb053dc7";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${catg}&apiKey=${apiKey}&page=${
      page + 1
    }&pagesize=${pagesize}`;
    setpage(page + 1);

    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles(articles.concat(parsedata.articles));
    setloading(false);
    settotalpage(Math.ceil(parsedata.totalResults / pagesize));
  };

  return (
    <div>
      <div className="container my-3">
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={page < totalpage}
          loader={<Spinner />}
        >
          <div className="container my-3 ">
            <h1 className="text-center " style={{ margin: "40px 0" }}>
              NewsMonkey-HeadLines
            </h1>
            <div className="row">
              {!loading &&
                articles.map((Element) => {
                  return (
                    <div className="col-4 my-3" key={Element.url}>
                      <NewsItem
                        title={Element.title ? Element.title.slice(0, 40) : " "}
                        descr={
                          Element.description
                            ? Element.description.slice(0, 70)
                            : " "
                        }
                        img={
                          Element.urlToImage
                            ? Element.urlToImage
                            : "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/04/airport-ATL.jpeg"
                        }
                        newsurl={Element.url}
                        source={Element.source.name}
                        author={Element.author}
                        date={Element.publishedAt}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      {/* <div className="container  d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={prevhandle}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            disabled={
              page >=
              Math.ceil(totalpage / pagesize)
            }
            className="btn btn-dark"
            onClick={nexthandle}
          >
            Next &raquo;
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  catg: "General",
};

News.propTypes = {
  country: PropTypes.string,
  catg: PropTypes.string,
};
export default News;
