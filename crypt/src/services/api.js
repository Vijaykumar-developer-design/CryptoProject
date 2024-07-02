const serverUrl = "http://localhost:5000/api";
export const fetchCryptocurrencies = async () => {
  const response = await fetch(`${serverUrl}/cryptocurrencies`);
  const data = await response.json();
  return data.data.map((crypto) => ({
    id: crypto.id,
    name: crypto.name,
    symbol: crypto.symbol,
    price: parseFloat(crypto.quote.USD.price),
    change24h: parseFloat(crypto.quote.USD.percent_change_24h),
    change7d: parseFloat(crypto.quote.USD.percent_change_7d),
    logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`,
  }));
};
