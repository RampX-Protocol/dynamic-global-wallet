import type { DataURIImage } from "@dynamic-labs/global-wallet-client";

type Config = {
  walletName: string;
  walletIcon: DataURIImage;
  walletUrl: string;
  environmentId: string;
  eip6963: {
    rdns: string;
  };
};

export const config: Config = {
  // Wallet name will be seen as the Wallet name
  walletName: "Duffle",
  // Wallet icon will be seen as the Wallet icon
  walletIcon: "https://qswap-rosy.vercel.app/assets/icons/duffle-icon.svg",
  // URL of your wallet domain (e.g. https://dynamic.example.com)
  walletUrl: "https://duffle.exchange",
  // Environment ID of your wallet (e.g. 1234567890)
  environmentId: "5743bd99-7996-455b-8cd6-b19b3e205c8d",
  // EIP6963 configuration
  eip6963: {
    // RDNS of your wallet (e.g. com.example.wallet)
    rdns: "com.duffle.exchange",
  },
};
