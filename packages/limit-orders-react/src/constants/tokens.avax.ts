import { Token } from "@uniswap/sdk-core";

export const WAVAX_AVAX = new Token(
  43114,
  "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  18,
  "WAVAX",
  "Wrapped AVAX"
);

export const USDC_AVAX = new Token(
  43114,
  "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
  6,
  "USDC",
  "USD Coin"
);

export const USDT_AVAX = new Token(
  43114,
  "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
  6,
  "USDT.e",
  "Tether USD"
);

export const SOUL_AVAX = new Token(
  43114,
  "0x11d6DD25c1695764e64F439E32cc7746f3945543",
  18,
  "SOUL",
  "Soul Power"
);

export const AVAX_BASES = [WAVAX_AVAX, USDC_AVAX, USDT_AVAX, SOUL_AVAX];
