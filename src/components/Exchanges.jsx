import React from "react";
import { useGetExchangesQuery } from "../services/normalApi";
import ExchangeItem from "./ExchangeItem";
import Spinner from "./Spinner";

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();

  const headerStyles = {
    borderRadius: "5px",
    border: "1px solid gray",
    alignItems: "center",
    fontWeight: "bold",
    // padding: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: "rgb(236,226,226)",

    marginTop: "10px",
    marginBottom: "10px",
    position: "sticky",
    top: "0",
  };
  if (isFetching) return <Spinner />;
  return (
    <div>
      <div className="container headings">
        <div className="row text-center" style={headerStyles}>
          <div className="col">Exchange</div>
          <div className="col">Volume</div>
          <div className="col">Markets</div>
          <div className="col">
            Market Share <br></br>(in %)
          </div>
        </div>

        <table className="table">
          {/* <thead>
            <tr>
              <th scope="col">
                <strong>Exchange</strong>
              </th>
              <th scope="col">
                <strong>Volume</strong>
              </th>
              <th scope="col">
                <strong>Markets</strong>
              </th>
              <th scope="col">
                <strong>Market Share</strong>
              </th>
            </tr>
          </thead> */}
          <tbody>
            {data?.data?.exchanges.map((exchange, index) => (
              <ExchangeItem
                key={index}
                name={exchange.name}
                description={exchange.description}
                iconUrl={exchange.iconUrl}
                marketShare={exchange.marketShare}
                numberOfMarkets={exchange.numberOfMarkets}
                volume={exchange.volume}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exchanges;
