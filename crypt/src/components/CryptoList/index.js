import React, { useEffect, useState, useRef, useCallback } from "react";
import { fetchCryptocurrencies } from "../../services/api";
import CryptoItem from "../CryptoItem";
import FadeLoader from "react-spinners/FadeLoader";
import "./index.css";

const CryptoList = () => {
  const effectRan = useRef(false);
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = useCallback(async () => {
    setLoading(true);
    const data = await fetchCryptocurrencies();
    setCryptos(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!effectRan.current) {
      getData();
      effectRan.current = true;
    } else {
      getData(); // Fetch data on page change
    }
  }, [getData]);

  return (
    <div className="crypto-list">
      {loading ? (
        <div className="loading">
          <p>Loading data...</p>
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        cryptos.map((crypto) => <CryptoItem key={crypto.id} crypto={crypto} />)
      )}
    </div>
  );
};

export default CryptoList;
