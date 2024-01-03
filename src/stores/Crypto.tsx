import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import Url from "../constants/Urls";
import { Coins } from "../Types/Coins";
interface CryptoProps {
  children: ReactNode;
}
export const CryptoProvider = createContext<Array<Coins>>([]);
function Crypto({ children }: CryptoProps) {
  const [data, setData] = useState<Coins[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const [res, btcRes] = await Promise.all([
          axios.get(Url.coinGecko + "/search/trending"),
          axios.get(
            Url.coinGecko + "/simple/price?ids=bitcoin&vs_currencies=usd"
          ),
        ]);
        const btcPrice = btcRes.data.bitcoin.usd;
        const coinsData: Coins[] = res.data.coins.map(
          ({ item }: { item: Coins }) => ({
            id: item.id,
            coin_id: item.coin_id,
            name: item.name,
            symbol: item.symbol,
            large: item.large,
            price_btc: (item.price_btc ).toFixed(10),
            price_usd: (item.price_btc * btcPrice).toFixed(10),
          })
        );
        setData(coinsData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <CryptoProvider.Provider value={data}>{children}</CryptoProvider.Provider>
  );
}
export default Crypto;
