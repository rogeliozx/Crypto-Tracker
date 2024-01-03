export const calculatePercentages = (prices:Array<number>) => {
    const initialPrice = prices[0];
    const finalPrice = prices[prices.length - 1];
    if (initialPrice === finalPrice) {
        return "0%";
    }

    const percentageChange = ((finalPrice - initialPrice) / initialPrice) * 100;
    return `${percentageChange.toFixed(2)}%`;
};
