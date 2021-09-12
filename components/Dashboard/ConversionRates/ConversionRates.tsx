import { merge } from "lodash";
import dynamic from "next/dynamic";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import BaseOptionChart from "../../Unknown/BaseOptionChart";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ConversionRatesProps {
  facebook: number[];
  instagram: number[];
  twitter: number[];
  linkedin: number[];
  comparison: string;
}

export default function ConversionRates({
  facebook,
  instagram,
  twitter,
  linkedin,
  comparison,
}: ConversionRatesProps) {
  const series = [
    {
      name: "Facebook",
      data: facebook,
    },
    {
      name: "Instagram",
      data: instagram,
    },
    {
      name: "Twitter",
      data: twitter,
    },
    {
      name: "Linkedin",
      data: linkedin,
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
        subheader={`(${comparison}%) than last year`}
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
