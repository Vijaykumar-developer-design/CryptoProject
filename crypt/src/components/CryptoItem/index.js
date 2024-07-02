import React from "react";
import "./index.css";

const CryptoItem = ({ crypto }) => {
  const { name, symbol, price, change24h, change7d, logo } = crypto;
  return (
    <div className="crypto-item">
      <img src={logo} alt={`${name} logo`} className="crypto-logo" />
      <h2>
        {name} ({symbol})
      </h2>
      <p>Current Price: ${price.toFixed(2)}</p>
      <p style={{ color: change24h > 0 ? "green" : "red" }}>
        24h: {change24h.toFixed(2)}%
      </p>
      <p style={{ color: change7d > 0 ? "green" : "red" }}>
        7d: {change7d.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoItem;
