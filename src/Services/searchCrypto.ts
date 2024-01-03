import axios from "axios";
import Url from "../constants/Urls";
import { Coins } from "../Types/Coins";

export const searchCrypto = async (crypto: string): Promise<Coins> => {
  const { data } = await axios.get(
    Url.coinGecko + `coins/${crypto.toLocaleLowerCase()}`
  );
  const dataPrice = await axios.get(
    Url.coinGecko + `simple/price?ids=${crypto}&vs_currencies=usd%2Cbtc`
  );

  const price = dataPrice.data[crypto.toLocaleLowerCase()];
  return {
    id: data.id,
    coin_id: data.id,
    name: data.name,
    large: data.image.large,
    symbol: data.symbol,
    price_btc: price.btc,
    price_usd: price.usd,
  };
};
