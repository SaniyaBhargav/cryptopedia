import React from "react";
import { useGetCryptosQuery } from "../services/normalApi";
import Spinner from "./Spinner";

import "../styles/CryptoPrices.css";
import CryptoItem from "./CryptoItem";

const CryptoPrices = () => {
  const { data, isFetching } = useGetCryptosQuery(50);

  if (isFetching) return <Spinner />;

  console.log(data);

  const myStyle = {
    display: "flex",
  };

  return (
    <div>
      <h2 className="text-center">Latest Crypto Prices</h2>
      <div className="crypto-cards" style={myStyle}>
        {data?.data?.coins.map((coin) => (
          <CryptoItem
            name={coin.name}
            slug={coin.slug}
            price={coin.price}
            change={coin.change}
            iconUrl={coin.iconUrl}
            marketCap={coin.marketCap}
            numberOfExchanges={coin.numberOfExchanges}
            numberOfMarkets={coin.numberOfMarkets}
          />
        ))}
      </div>
    </div>
  );
};

export default CryptoPrices;
