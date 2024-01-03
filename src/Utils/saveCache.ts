import { Coins } from "../Types/Coins";

export const getUser = (user: string): Array<Coins> => {
  if (user in localStorage) {
    const data = localStorage.getItem(user) as string;
    const coins = JSON.parse(data);
    return coins;
  }
  return [];
};
const checkWasAdded = (coins: Coins[], coin: Coins) => {
  return coins.filter((element: Coins) => element.coin_id === coin.coin_id).length > 0;
};

export const savedToFavorites = (user: string, coin: Coins):void => {
  const coins = getUser(user);
  if (checkWasAdded(coins, coin)) return;
   coins.push(coin);
  localStorage.setItem(user, JSON.stringify(coins));
};
