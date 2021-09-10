import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";

import AndroidIcon from "../common/icons/Android.svg";
import AppleIcon from "../common/icons/Apple.svg";
import MicrosoftIcon from "../common/icons/Microsoft.svg";
import BugIcon from "../common/icons/Bug.svg";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import InfoCard from "../components/Unknown/InfoCard/InfoCard";
import dynamic from "next/dynamic";

import CurrentSubject from "../components/Dashboard/CurrentSubject";
import ConversionRates from "../components/Dashboard/ConversionRates";
import CurrentVisits from "../components/Dashboard/CurrentVisits";

import NewsUpdate from "../components/Dashboard/NewsUpdate";
import OrderTimeline from "../components/Dashboard/OrderTimeline";
import Typography from "@material-ui/core/Typography";

const WebsiteVisits = dynamic(
  () => import("../components/Dashboard/WebsiteVisits"),
  {
    ssr: false,
  }
);

const data = [
  {
    Icon: AndroidIcon,
    iconColor: "rgb(0, 123, 85)",
    bgColor: "rgb(200, 250, 205)",
    value: "714k",
    description: "Weekly Sales",
    textColor: "rgb(0, 82, 73)",
    iconBgColor:
      "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%, rgba(0, 123, 85, 0.24) 100%)",
  },
  {
    Icon: AppleIcon,
    iconColor: "rgb(12, 83, 183)",
    bgColor: "rgb(208, 242, 255)",
    value: "1.35m",
    description: "New Users",
    textColor: "rgb(4, 41, 122)",
    iconBgColor:
      "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)",
  },
  {
    Icon: MicrosoftIcon,
    iconColor: "rgb(183, 129, 3)",
    bgColor: "rgb(255, 247, 205)",
    value: "1.72m",
    description: "Item Orders",
    textColor: "rgb(122, 79, 1)",
    iconBgColor:
      "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)",
  },
  {
    Icon: BugIcon,
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
