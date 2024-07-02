import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CryptoList from "./components/CryptoList";
import CryptoItem from "./components/CryptoItem"; // Assuming correct path to CryptoItem
import { act } from "react";

// Mock the fetchCryptocurrencies function

describe("CryptoList Component", () => {
  test("renders loading state", () => {
    act(() => {
      render(<CryptoList />);
    });

    expect(screen.getByText(/Loading data.../i)).toBeInTheDocument();
  });
});

describe("CryptoItem Component", () => {
  test("renders Bitcoin", async () => {
    const crypto = {
      name: "Bitcoin",
      symbol: "BTC",
      price: 35000,
      change24h: -1.5,
      change7d: 3.2,
    };

    render(<CryptoItem crypto={crypto} />);

    await waitFor(() =>
      expect(screen.getByText(/Bitcoin \(BTC\)/i)).toBeInTheDocument()
    );
    expect(screen.getByText("Current Price: $35000.00")).toBeInTheDocument();
    expect(screen.getByText("24h: -1.50%")).toBeInTheDocument();
    expect(screen.getByText("7d: 3.20%")).toBeInTheDocument();
  });
});
