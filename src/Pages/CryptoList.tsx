import React, { useCallback } from "react";
import CryptoCard from "../components/CryptoCard";
import { CryptoProvider } from "../stores/Crypto";
import CircularIndeterminate from "../components/Progress";
import { Container } from "../components/styled";
import { useNavigate } from "react-router-dom";
import { Coins } from "../Types/Coins";

export default function CryptoList() {
  const data = React.useContext(CryptoProvider);
  const navigate = useNavigate();
  const getDetails=useCallback((coin:Coins)=>{
navigate("/details",{ state: {coin } })
  },[navigate])

  return (
    <Container>
      {data.length > 0 ? (
        data.map((coin,index) => (
          <>
            <CryptoCard coin={coin}  key={coin.coin_id+index} onClick={()=>getDetails(coin)}/>
          </>
        ))
      ) : (
        <CircularIndeterminate />
      )}
    </Container>
  );
}
