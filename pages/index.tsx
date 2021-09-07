import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";
import React from "react";

import AndroidIcon from "./Android.svg";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import InfoCard from "../components/Unknown/InfoCard/InfoCard";
import palette from "../common/theme/palette";
import dynamic from "next/dynamic";
import { merge } from "lodash";
import { theme } from "../common/theme/overrides";
import BaseOptionChart from "../components/Unknown/BaseOptionChart";
import {
  Avatar,
  CardContent,
  CardHeader,
  styled,
  Typography,
} from "@material-ui/core";
import CurrentSubject from "../components/Dashboard/CurrentSubject";
import ConversionRates from "../components/Dashboard/ConversionRates";
import CurrentVisits from "../components/Dashboard/CurrentVisits";
import Card from "@material-ui/core/Card";
import Stack from "@material-ui/core/Stack";
import Hidden from "@material-ui/core/Hidden";
import NewsUpdate from "../components/Dashboard/NewsUpdate";
import OrderTimeline from "../components/Dashboard/OrderTimeline";

const WebsiteVisits = dynamic(
  () => import("../components/Dashboard/WebsiteVisits"),
  {
    ssr: false,
  }
);

const data = [
  {
    icon: [
      "M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4c-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8c-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6c-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z",
    ],
    iconColor: "rgb(0, 123, 85)",
    bgColor: "rgb(200, 250, 205)",
    value: "714K",
    description: "Weekly Sales",
    textColor: "rgb(0, 82, 73)",
    iconBgColor:
      "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
  },
  {
    icon: [
      "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5c-34.9-50-87.7-77.5-157.3-82.8c-65.9-5.2-138 38.4-164.4 38.4c-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8c23.8 68.2 109.6 235.3 199.1 232.6c46.8-1.1 79.9-33.2 140.8-33.2c59.1 0 89.7 33.2 141.9 33.2c90.3-1.3 167.9-153.2 190.5-221.6c-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7c-44.8 2.6-96.6 30.5-126.1 64.8c-32.5 36.8-51.6 82.3-47.5 133.6c48.4 3.7 92.6-21.2 129-63.7z",
    ],
    iconColor: "rgb(12, 83, 183)",
    bgColor: "rgb(208, 242, 255)",
    value: "1.35m",
    description: "New Users",
    textColor: "rgb(4, 41, 122)",
    iconBgColor:
      "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)",
  },
  {
    icon: [
      "M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z",
    ],
    iconColor: "rgb(183, 129, 3)",
    bgColor: "rgb(255, 247, 205)",
    value: "1.72m",
    description: "Item Orders",
    textColor: "rgb(122, 79, 1)",
    iconBgColor:
      "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)",
  },
  {
    icon: [
      "M940 512H792V412c76.8 0 139-62.2 139-139c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8c0 34.8-28.2 63-63 63H232c-34.8 0-63-28.2-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8c0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8c0-44.2 23.9-82.9 59.6-103.7c6 17.2 13.6 33.6 22.7 49c24.3 41.5 59 76.2 100.5 100.5c28.9 16.9 61 28.8 95.3 34.5c4.4 0 8-3.6 8-8V484c0-4.4 3.6-8 8-8h60c4.4 0 8 3.6 8 8v464.2c0 4.4 3.6 8 8 8c34.3-5.7 66.4-17.6 95.3-34.5c41.5-24.3 76.2-59 100.5-100.5c9.1-15.5 16.7-31.9 22.7-49C812.1 793.1 836 831.8 836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8c0-79.3-48.1-147.4-116.7-176.7c.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z",
      "M304 280h416c4.4 0 8-3.6 8-8c0-40-8.8-76.7-25.9-108.1c-17.2-31.5-42.5-56.8-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9c-31.5 17.2-56.8 42.5-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z",
    ],
    iconColor: "rgb(183, 33, 54)",
    bgColor: "rgb(255, 231, 217)",
    value: "234",
    description: "Bug Reports",
    textColor: "rgb(122, 12, 46)",
    iconBgColor:
      "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)",
  },
];

export default function Dashboard() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae neque ex. Consectetur harum ex, necessitatibus saepe hic quisquam sequi accusantium a quibusdam esse quidem culpa sed? Expedita, repellat illo!";
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back
      </Typography>

      <Grid container spacing={3}>
        {data.map((data, i) => (
          <Grid key={i} item xs={12} sm={6} md={3}>
            <InfoCard {...data} />
          </Grid>
        ))}

        <Grid item xs={12} md={6} lg={8}>
          <WebsiteVisits />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentSubject />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <ConversionRates />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentVisits />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <NewsUpdate />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <OrderTimeline />
        </Grid>
      </Grid>
    </Box>
  );
}

Dashboard.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
