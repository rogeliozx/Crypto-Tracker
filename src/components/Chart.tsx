import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { Typography } from "@mui/material";
import { calculatePercentages } from "../Utils/calculatePercentages";

interface ChartBarProps {
  prices: Array<number>;
  dates: Array<Date>;
}

export default function ChartBar(props: ChartBarProps) {
  
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
    </Stack>
  );
}
