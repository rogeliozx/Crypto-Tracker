import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { Typography } from "@mui/material";

interface ChartBarProps {
  prices: Array<number>;
  dates: Array<Date>;
}

export default function ChartBar(props: ChartBarProps) {
    const calculatePercentages=()=>{
        const initialPrice=props.prices[0];
        const finalPrice=props.prices[props.prices.length-1]
        if(initialPrice>finalPrice){return("-"+(initialPrice*finalPrice)/100)+"%"}
        if(initialPrice<finalPrice){return(((initialPrice*finalPrice)/100)+"%")}
        if(initialPrice===finalPrice){return("0%")}
    }
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={props.prices}
          height={100}
          showTooltip
          showHighlight
          xAxis={{
            scaleType: "time",
            data: props.dates,
            valueFormatter: (value) => value.toISOString().slice(0, 10),
          }}
        />
      </Box>
      <Typography variant="subtitle1" color="text.secondary" component="div">
      {calculatePercentages()}
      </Typography>
    </Stack>
  );
}
