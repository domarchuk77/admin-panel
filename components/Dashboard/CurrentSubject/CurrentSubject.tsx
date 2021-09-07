import { styled } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { merge } from "lodash";
import dynamic from "next/dynamic";
import React from "react";
import { theme } from "../../../common/theme/overrides";
import BaseOptionChart from "../../Unknown/BaseOptionChart";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const series = [
  { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
  { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
  { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
];
const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  "& .apexcharts-canvas svg": {
    height: CHART_HEIGHT,
  },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `${CHART_HEIGHT - LEGEND_HEIGHT}px !important`,
  },
}));

export default function CurrentSubject() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2 },
    fill: { opacity: 0.48 },
    legend: { floating: true, horizontalAlign: "center" },
    xaxis: {
      categories: [
        "English",
        "History",
        "Physics",
        "Geography",
        "Chinese",
        "Math",
      ],
      labels: {
        style: {
          colors: [theme.palette.text.secondary],
        },
      },
    },
  });
  return (
    <Card>
      <CardHeader title="Current Subject" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="radar"
          series={series}
          options={chartOptions}
          height={340}
        />
      </ChartWrapperStyle>
    </Card>
  );
}
