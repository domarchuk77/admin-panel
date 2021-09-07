import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { merge } from "lodash";
import dynamic from "next/dynamic";
import React from "react";
import BaseOptionChart from "../../Unknown/BaseOptionChart";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ConversionRates() {
  const percent = "+43";
  const series = [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Bucket Slope",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
  ];
  const options = merge(BaseOptionChart(), {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },

    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: { enabled: true },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  });
  return (
    <Card>
      <CardHeader
        title="Conversion Rates"
        subheader={`(${percent}%) than last year`}
      />
      <Box px={3}>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </Box>
    </Card>
  );
}
