import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import CircularIndeterminate from "../components/Progress";
import { Container } from "../components/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../Utils/saveCache";
import { Coins } from "../Types/Coins";
import BackButton from "../components/BackButton";

const Favorite = () => {
  const { state } = useLocation();
  useEffect(() => {
    const coins = getUser(state.user);
    setData(coins);
  }, [state.user]);

  const [data, setData] = useState([] as Coins[]);
  const navigate = useNavigate();
  return (
    <Container>
      <BackButton goBack={() => navigate(-1)} />
      {data.length > 0 ? (
        data.map((coin: Coins, index: number) => (
          <>
            <CryptoCard
              coin={coin}
              key={coin.coin_id + index}
              addFavorites={() => {}}
              goToDetails={() => navigate("/details", { state: { coin } })}
            />
          </>
        ))
      ) : (
        <CircularIndeterminate />
      )}
    </Container>
  );
};

export default Favorite;
