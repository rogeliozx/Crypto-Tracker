import axios from "axios";
import Url from "../constants/Urls";

interface MarketTypes {
  dates: Array<Date>;
  prices: Array<number>;
}

export const getMarketChart = async (
  id: string
): Promise<MarketTypes> => {
    const dates: Array<Date> = [];
    const prices: Array<number> = [];
    const { data } = await axios.get(
      Url.coinGecko + `coins/${id}/market_chart?vs_currency=usd&days=1`
    );
    data.prices.forEach((data: Array<number>) => {
      const [timestamp, price] = data;
      dates.push(new Date(timestamp));
      prices.push(price);
    });
    return {
      dates,
      prices,
    };
 
};
