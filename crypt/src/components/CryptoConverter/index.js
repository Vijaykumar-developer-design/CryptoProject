import React, { useState } from "react";
import "./index.css";

const CryptoConverter = ({ cryptos }) => {
  const [from, setFrom] = useState("BTC");
  const [to, setTo] = useState("ETH");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const fromCrypto = cryptos.find((crypto) => crypto.symbol === from);
    const toCrypto = cryptos.find((crypto) => crypto.symbol === to);
    if (fromCrypto && toCrypto) {
      const conversionRate = fromCrypto.price / toCrypto.price;
      setResult(amount * conversionRate);
    }
  };

  return (
    <div className="crypto-converter">
      <h2>Crypto Converter</h2>
      <input
        className="number-input"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {cryptos.map((crypto) => (
          <option key={crypto.id} value={crypto.symbol}>
            {crypto.symbol}
          </option>
        ))}
      </select>
      <span>to</span>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {cryptos.map((crypto) => (
          <option key={crypto.id} value={crypto.symbol}>
            {crypto.symbol}
          </option>
        ))}
      </select>
      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>

      {result && (
        <p>
          Result : {result.toFixed(6)} {to}
        </p>
      )}
    </div>
  );
};

export default CryptoConverter;
