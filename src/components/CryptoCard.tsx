
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Coins } from "../Types/Coins";

interface CryptoCardProps {
  coin: Coins;
  onClick:()=>void;
}
export default function CryptoCard({ coin,onClick }: CryptoCardProps) {

  return (
    <Card sx={{ display: "flex", width: "400px", marginBottom:"16px",cursor:"pointer" }} onClick={onClick}>
      <CardMedia
        component="img"
        sx={{ width: 100,objectFit:"scale-down", padding:"5px" }}
        image={coin.large}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {coin.name}
          </Typography>
          <Typography
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
        </CardContent>
      </Box>
    </Card>
  );
}
