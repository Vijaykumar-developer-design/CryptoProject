const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT;
const API_KEY = process.env.REACT_APP_API_URL;

app.use(
  cors({
    origin: "https://crypto-devbytes-project.vercel.app/",
    credentials: true,
  })
);
app.get("/api/cryptocurrencies", async (req, res) => {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "deflate, gzip",
          "X-CMC_PRO_API_KEY": API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
