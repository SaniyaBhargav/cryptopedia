import React from "react";
import millify from "millify";
import "../styles/CryptoItem.css";

const CryptoItem = ({
  name,
  price,
  change,
  slug,
  iconUrl,
  numberOfExchanges,
  numberOfMarkets,
  marketCap,
}) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="name-container">
            <img src={iconUrl} className="coinlogo" alt="" />
            <h5 className="card-title">{name}</h5>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">{slug}</h6>
          {/* <p className="card-text">
              {HTMLReactParser(coin.description || "")}
            </p> */}
          <div className="price-container">
            <button className="btn btn-dark" style={{ marginRight: "10px" }}>
              Price: $ {millify(price)}
            </button>

            <h6>
              Change:{" "}
              <span style={{ color: change < 0 ? "red" : "green" }}>
                {change} %
              </span>
            </h6>
          </div>

          <div className="other-info-container">
            <div className="markets-exchange">
              <div className="row">
                <div className="col">
                  <h6>Markets: </h6>
                </div>
                <div className="col">
                  {" "}
                  <strong>{numberOfMarkets}</strong>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6>Exchanges: </h6>
                </div>
                <div className="col">
                  {" "}
                  <strong>{numberOfExchanges}</strong>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6>Market Cap: </h6>
                </div>
                <div className="col">
                  {" "}
                  <strong>{millify(marketCap)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoItem;
