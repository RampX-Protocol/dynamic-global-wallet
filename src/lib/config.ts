

type Config = {
  walletName: string;
  walletIcon: string;
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
  walletUrl: "https://www.duffle.money",
  // Environment ID of your wallet (e.g. 1234567890)
  environmentId: "03187531-51a6-4187-997d-b4c08f727284",
  // EIP6963 configuration
  eip6963: {
    // RDNS of your wallet (e.g. com.example.wallet)
    rdns: "com.duffle.money",
  },
};
