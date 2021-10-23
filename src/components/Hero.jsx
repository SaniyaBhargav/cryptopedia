import React from "react";
import "../styles/Hero.css";
import { useGetCryptosQuery } from "../services/normalApi";
// import { useGetNewsQuery } from "../services/newsApi";
import Spinner from "./Spinner";
import millify from "millify";
// import News from "./News";
import CryptoPrices from "./CryptoPrices";

const Hero = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching) return <Spinner />;
  //   if (isFetching) return <Spinner />;

  console.log(data);
  //   console.log(newsData);

  const cryptoData = data?.data?.stats;

  const quoteStyle = {
    height: "100vh",

    margin: 0,
    padding: 0,
    marginRight: 0,
    display: "flex",
    position: "relative",
  };

  return (
    <div className="home-container" style={{ position: "relative" }}>
      {/* <div className="container text-center " style={quoteStyle}>
        <div className="row">
          <div className="col col-md-12 col-sm-12 col-lg-12 quote-container">
            <h2
              className="quote quote-container"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",

                transform: "translate(-50%,-50%)",
              }}
            >
              <span> " </span>
              It’s money 2.0, a huge, huge, huge deal.
              <span> " </span> <br></br>– Chamath Palihapitiya, venture
              capitalist
            </h2>
          </div>
        </div>
      </div> */}

      <div className="container nutshell-container">
        <div className="row">
          <div className="col">
            <h2
              className="text-center"
              style={{ marginBottom: "30px", marginTop: "30px" }}
            >
              Crypto markets <br></br>in a nutshell
            </h2>
          </div>
        </div>

        <div className="row info-container">
          <div className="col">
            <h3>Total Markets</h3>
            <p>{cryptoData?.totalMarkets}</p>
          </div>
          <div className="col">
            <h3>Total 24 hours volume</h3>
            <p>{millify(cryptoData?.total24hVolume)}</p>
          </div>
          <div className="col">
            <h3>Total Market Cap</h3>
            <p>{millify(cryptoData?.totalMarketCap)}</p>
          </div>
          <div className="col">
            <h3>Total Cryptocurrencies</h3>
            <p>{millify(cryptoData?.total)}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <CryptoPrices />
      </div>

      <div className="container">{/* <News /> */}</div>
    </div>
  );
};

export default Hero;
