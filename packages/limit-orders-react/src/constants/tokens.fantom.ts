import { Token } from "@uniswap/sdk-core";

export const USDC_FANTOM = new Token(
  250,
  "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
  6,
  "USDC",
  "USD Coin"
);
export const DAI_FANTOM = new Token(
  250,
  "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
  18,
  "DAI",
  "Dai Stablecoin"
);
export const fUSDT_FANTOM = new Token(
  250,
  "0x049d68029688eabf473097a2fc38ef61633a3c7a",
  6,
  "USDT",
  "Frapped USDT"
);
export const WETH_FANTOM = new Token(
  250,
  "0x74b23882a30290451A17c44f4F05243b6b58C76d",
  18,
  "WETH",
  "Wrapped ETH"
);
export const SOUL_FANTOM = new Token(
  250,
  "0xe2fb177009FF39F52C0134E8007FA0e4BaAcBd07",
  18,
  "SOUL",
  "SoulPower"
);
export const WBTC_FANTOM = new Token(
  250,
  "0x321162Cd933E2Be498Cd2267a90534A804051b11",
  8,
  "WBTC",
  "Wrapped BTC"
);
export const WBNB_FANTOM = new Token(
  250,
  "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
  18,
  "WBNB",
  "Wrapped Binance"
);
export const WFTM_FANTOM = new Token(
  250,
  "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
  18,
  "WFTM",
  "Wrapped Fantom"
);

export const FANTOM_BASES = [
  USDC_FANTOM,
  DAI_FANTOM,
  fUSDT_FANTOM,
  WETH_FANTOM,
  SOUL_FANTOM,
  WBNB_FANTOM,
  // SPIRIT_FANTOM,
  WBTC_FANTOM,
  WFTM_FANTOM,
];
