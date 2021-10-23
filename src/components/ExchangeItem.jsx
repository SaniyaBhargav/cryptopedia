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
      {/* <tr>
        <th scope="row">
          <strong>{props.name}</strong>
        </th>
        <td>{props.name}</td>
        <td>{millify(props.volume)}</td>
        <td>{millify(props.numberOfMarkets)}</td>
        <td>{millify(props.marketShare)}</td>
      </tr> */}

      <div className="row text-center data-display" style={rowStyle}>
        <div className="col">{props.name}</div>
        <div className="col">{millify(props.volume)}</div>
        <div className="col">{millify(props.numberOfMarkets)}</div>
        <div className="col">{millify(props.marketShare)}</div>
      </div>
      {/* <div className="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <div className="row abcd">
              <div className="col text-center">
                <div className="name-logo">
                  <ReactSVG src={`${props.imageUrl}`} />
                  
                </div>
              </div>

              <div className="col">{millify(props.volume)}</div>

              <div className="col">{millify(props.numberOfMarkets)}</div>

              <div className="col">{millify(props.marketShare)}</div>
            </div>
          </button>
        </h2>
      </div> */}
    </div>
  );
};

export default ExchangeItem;
