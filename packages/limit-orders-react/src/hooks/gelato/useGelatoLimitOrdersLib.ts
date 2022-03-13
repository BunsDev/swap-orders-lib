import { useMemo } from "react";
import { ChainId, GelatoLimitOrders } from "soulswap-limit-orders-lib";
import { useWeb3 } from "../../web3";

export default function useGelatoLimitOrdersLib():
  | GelatoLimitOrders
  | undefined {
  const { chainId, library, handler } = useWeb3();

  return useMemo(() => {
    try {
      return chainId && library
        ? new GelatoLimitOrders(
            chainId as ChainId,
            library?.getSigner(),
          )
        : undefined;
    } catch (error: any) {
      console.error(
        `Could not instantiate LimitOrders: ${error.message}`
      );
      return undefined;
    }
  }, [chainId, library, handler]);
}
