import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Coins } from "../Types/Coins";
import ActionButtons from "./ActionButtons";

interface CryptoCardProps {
  coin: Coins;
  goToDetails: () => void;
  addFavorites: () => void;
}
export default function CryptoCard({
  coin,
  goToDetails,
  addFavorites,
}: CryptoCardProps) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "400px",
        marginBottom: "16px",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, objectFit: "scale-down", padding: "5px" }}
        image={coin.large}
        alt="Crypto Coin"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            style={{ fontFamily: "Cyber" }}
            component="div"
            variant="h5"
          >
            {coin.name}
          </Typography>
          <Typography
            style={{ fontFamily: "Cyber" }}
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {coin.symbol}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {coin.price_btc} BTC
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {coin.price_usd} USD
          </Typography>
          <ActionButtons addFavorites={addFavorites} coin={coin} goToDetails={goToDetails}/>
        </CardContent>
      </Box>
    </Card>
  );
}
