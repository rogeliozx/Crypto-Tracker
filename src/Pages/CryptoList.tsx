import React, { useCallback, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import { CryptoProvider } from "../stores/Crypto";
import CircularIndeterminate from "../components/Progress";
import {
  Container,
  InputContainer,
  InputCustom,
  Subtitle,
} from "../components/styled";
import { useLocation, useNavigate } from "react-router-dom";
import { Coins } from "../Types/Coins";
import { savedToFavorites } from "../Utils/saveCache";
import { searchCrypto } from "../Services/searchCrypto";

export default function CryptoList() {
  const data = React.useContext(CryptoProvider);
  const [coins, setCoins] = useState(data)
  const { state } = useLocation();
  const navigate = useNavigate();
  const getDetails = useCallback(
    (coin: Coins) => {
      navigate("/details", { state: { coin } });
    },
    [navigate]
  );
  const addFavorites = useCallback(
    (coin: Coins) => {
      savedToFavorites(state.user, coin);
    },
    [state]
  );

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      try {
        const element = e.currentTarget as HTMLInputElement;
        const value = element.value.toUpperCase();
        const coin = await searchCrypto(value);
       const newCoins=[coin,...coins]
       setCoins(()=>newCoins)
      } catch (error) {}
    }
  };
  return (
    <Container>
      <InputContainer>
        <Subtitle className="typewriter-secundary">Busca tu Moneda</Subtitle>
        <InputCustom type="text" onKeyDown={handleKeyDown} />
      </InputContainer>
      {coins.length > 0 ? (
        coins.map((coin: Coins, index: number) => (
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
