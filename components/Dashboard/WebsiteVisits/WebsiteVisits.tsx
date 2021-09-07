import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { merge } from "lodash";
import React from "react";
import ReactApexChart from "react-apexcharts";
import BaseOptionChart from "../../Unknown/BaseOptionChart";

export default function WebsiteVisits() {
  const percent = "+43";
  const series = [
    {
      name: "Team A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Team B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "Team C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
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
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
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
        subheader={`(${percent}%) than last year`}
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
