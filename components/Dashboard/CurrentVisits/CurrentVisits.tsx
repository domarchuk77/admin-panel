import { merge } from "lodash";
import dynamic from "next/dynamic";

import { styled } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import BaseOptionChart from "../../Unknown/BaseOptionChart";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CHART_HEIGHT = 400;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  "& .apexcharts-legend": {
    minHeight: LEGEND_HEIGHT,
    alignContent: "center",
    borderTop: `solid 1px ${theme.palette.divider}`,
  },
}));

interface CurrentVisitsProps {
  series: number[];
}

export default function CurrentVisits({ series }: CurrentVisitsProps) {
  const options = merge(BaseOptionChart(), {
    fill: {
      opacity: 0.7,
    },
    labels: ["Mobile", "Desktop", "Laptop", "Tablet"],
  });
  return (
    <Card>
      <CardHeader title="Current Visits" />
      <Box mt={2.375}>
        <ChartWrapperStyle>
          <ReactApexChart
            options={options}
            series={series}
            height={CHART_HEIGHT}
            type="polarArea"
          />
        </ChartWrapperStyle>
      </Box>
    </Card>
  );
}
