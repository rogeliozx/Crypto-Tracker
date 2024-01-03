import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMarketChart } from "../Services/Getmarketchart";
import ChartBar from "../components/Chart";
import CircularIndeterminate from "../components/Progress";

export default function CryptoDetail() {
  const { state } = useLocation();
  const [prices, setPrices] = useState<number[]>([]);
  const [dates, setDates] = useState<Date[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { dates, prices } = await getMarketChart(state.coin.id);
        setDates(dates);
        setPrices(prices);
      } catch (error) {}
    })();
  }, [state.coin.id]);
  return (
    <div>
      {dates.length > 0 && prices.length > 0 ? (
        <ChartBar prices={prices} dates={dates} />
      ) : (
        <CircularIndeterminate />
      )}
    </div>
  );
}
