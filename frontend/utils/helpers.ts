import { Network } from "@aptos-labs/ts-sdk";
import { NetworkInfo, isAptosNetwork } from "@aptos-labs/wallet-adapter-react";

export const isValidNetworkName = (network: NetworkInfo | null) => {
  if (isAptosNetwork(network)) {
    return Object.values<string | undefined>(Network).includes(network?.name);
  }
  // If the configured network is not an Aptos network, i.e is a custom network
  // we resolve it as a valid network name
  return true;
};

export const APT_DECIMALS = 8;

export const convertAmountFromHumanReadableToOnChain = (value: number, decimal: number) => {
  return value * Math.pow(10, decimal);
};

export const convertAmountFromOnChainToHumanReadable = (value: number, decimal: number) => {
  return value / Math.pow(10, decimal);
};

