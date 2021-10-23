import React from "react";
import { useGetNewsQuery } from "../services/newsApi";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../styles/News.css";

const News = () => {
  const { data, isFetching } = useGetNewsQuery();

  if (isFetching) return <Spinner />;
  console.log("news");
  console.log(data);
  return (
    <>
      <h2 className="text-center" style={{ marginBottom: "50px" }}>
        Top Crypto Headlines
      </h2>
      <div className="news">
        {data?.data?.map((news, index) => (
          <NewsItem
            key={index}
            newsTitle={news.title}
            newsSummary={news.description}
            newsImageUrl={news.image}
            newsUrl={news.url}
          />
        ))}
      </div>
    </>
  );
};

export default News;
