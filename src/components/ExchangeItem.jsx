import React from "react";
import "../styles/ExchangeItem.css";
import millify from "millify";
import { ReactSVG } from "react-svg";

const ExchangeItem = (props) => {
  const rowStyle = {
    borderRadius: "3px",
    border: "0.5px solid black",
    // borderBottom: "0px",
    marginTop: "10px",
    boxShadow: "-2px 3px 17px -7px rgba(0,0,0,0.75)",
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="row text-center data-display" style={rowStyle}>
        <div className="col">{props.name}</div>
        <div className="col">{millify(props.volume)}</div>
        <div className="col">{millify(props.numberOfMarkets)}</div>
        <div className="col">{millify(props.marketShare)}</div>
      </div>
    </div>
  );
};

export default ExchangeItem;
