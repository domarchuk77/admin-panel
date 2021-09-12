import { merge } from "lodash";
import dynamic from "next/dynamic";

import { styled } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import { theme } from "../../../common/theme/overrides";
import BaseOptionChart from "../../Unknown/BaseOptionChart";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

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

interface CurrentSubjectProps {
  series1: number[];
  series2: number[];
  series3: number[];
}

export default function CurrentSubject({
  series1,
  series2,
  series3,
}: CurrentSubjectProps) {
  const series = [
    { name: "Series 1", data: series1 },
    { name: "Series 2", data: series2 },
    { name: "Series 3", data: series3 },
  ];
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
