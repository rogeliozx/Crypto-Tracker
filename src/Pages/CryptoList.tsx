import React, { useCallback } from "react";
import CryptoCard from "../components/CryptoCard";
import { CryptoProvider } from "../stores/Crypto";
import CircularIndeterminate from "../components/Progress";
import { Container } from "../components/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Coins } from "../Types/Coins";
import { savedToFavorites } from "../Utils/saveCache";

export default function CryptoList() {
  const data = React.useContext(CryptoProvider);
  const { state } = useLocation();
  const navigate = useNavigate();
  const getDetails = useCallback(
    (coin: Coins) => {
      navigate("/details", { state: { coin } });
    },
    [navigate]
  );
  const addFavorites = useCallback((coin: Coins) => {
    savedToFavorites(state.user,coin)
  }, [state]);
  return (
    <Container>
      {data.length > 0 ? (
        data.map((coin: Coins, index: number) => (
          <>
            <CryptoCard
              coin={coin}
              key={coin.coin_id + index}
              addFavorites={() => addFavorites(coin)}
              goToDetails={() => getDetails(coin)}
            />
          </>
        ))
      ) : (
        <CircularIndeterminate />
      )}
    </Container>
  );
}
