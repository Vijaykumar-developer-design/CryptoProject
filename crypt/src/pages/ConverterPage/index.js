import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import CryptoConverter from "../../components/CryptoConverter";
import { fetchCryptocurrencies } from "../../services/api";
import "./index.css";

const ConverterPage = () => {
  const effectRan = useRef(false);
  const [cryptos, setCryptos] = useState([]);

  const getData = useCallback(async () => {
    const data = await fetchCryptocurrencies();
    setCryptos(data);
  }, []);

  useEffect(() => {
    if (!effectRan.current) {
      effectRan.current = true;
    } else {
      getData(); // Fetch data on page change
    }
  }, [getData]);

  return (
    <div className="converter-page">
      <CryptoConverter cryptos={cryptos} />
    </div>
  );
};

export default ConverterPage;
