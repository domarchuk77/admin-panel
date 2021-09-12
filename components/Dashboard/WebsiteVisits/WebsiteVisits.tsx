import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import BaseOptionChart from "../../Unknown/BaseOptionChart";

interface WebsiteVisitsProps {
  dates: string[];
  mobile: number[];
  desktop: number[];
  laptop: number[];
  comparison: string;
}

export default function WebsiteVisits({
  dates,
  mobile,
  desktop,
  laptop,
  comparison,
}: WebsiteVisitsProps) {
  const series = [
    {
      name: "Mobile",
      type: "column",
      data: mobile,
    },

    {
      name: "Laptop",
      type: "area",
      data: laptop,
    },
    {
      name: "Desktop",
      type: "line",
      data: desktop,
    },
  ];

  const options = merge(BaseOptionChart(), {
    legend: {
      position: "top",
      horizontalAlign: "right",
    },

    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["solid", "gradient", "solid"] },
    labels: dates,
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y?: number) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader
        title="Website Visits"
        subheader={`(${comparison}%) than last year`}
      />

      <Box mx={3} mt={3}>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={370}
        />
      </Box>
    </Card>
  );
}
