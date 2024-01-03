import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { getMarketChart } from "../Services/getMarketchart";
import ChartBar from "../components/Chart";
import CircularIndeterminate from "../components/Progress";
import { Container } from "../components/styled";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { calculatePercentages } from "../Utils/calculatePercentages";
import BackButton from "../components/BackButton";

export default function CryptoDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
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
        <Container>
          <Card
            sx={{
              display: "flex",
              width: "300px",
              marginBottom: "16px",
              cursor: "pointer",
              flexDirection:"column"
            }}
          >
            <BackButton goBack={()=>navigate(-1)}/>
            <ChartBar prices={prices} dates={dates} />
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CardMedia
                component="img"
                sx={{
                  width: 70,
                  objectFit: "scale-down",
                  padding: "5px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                image={state.coin.large}
                alt="Crypto Coin"
              />
              <Typography
                style={{ fontFamily: "Cyber" }}
                component="div"
                variant="h5"
              >
                {state.coin.name}
              </Typography>
              <Typography
                style={{ fontFamily: "Cyber" }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {state.coin.symbol}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {state.coin.price_btc} BTC
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {state.coin.price_usd} USD
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
               Porcentaje(24hr): {calculatePercentages(prices)}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      ) : (
        <CircularIndeterminate />
      )}
    </div>
  );
}
