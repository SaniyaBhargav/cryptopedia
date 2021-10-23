import React from "react";
import "../styles/NewsItem.css";

const NewsItem = ({ newsTitle, newsImageUrl, newsSummary, newsUrl }) => {
  return (
    <div>
      <div
        className="card news-card"
        style={{
          width: "18rem",
          maxHeight: "70  rem",

          flexBasis: "33.33%",
        }}
      >
        <img
          src={
            newsImageUrl
              ? newsImageUrl
              : "https://images.hindustantimes.com/img/2021/09/22/550x309/2021-06-21T104914Z_3_LYNXNPEH5K0EG_RTROPTP_3_DIGITAL-CRYPTO-UK-REGULATION_1624275294675_1632280735900.JPG"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{newsTitle}</h5>
          <p className="card-text">{newsSummary}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Read full story
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
