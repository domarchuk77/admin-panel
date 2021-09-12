import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React, { ReactNode } from "react";

import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import InfoCard from "../components/Unknown/InfoCard/InfoCard";
import dynamic from "next/dynamic";

import CurrentSubject from "../components/Dashboard/CurrentSubject";
import ConversionRates from "../components/Dashboard/ConversionRates";
import CurrentVisits from "../components/Dashboard/CurrentVisits";

import NewsUpdate from "../components/Dashboard/NewsUpdate";
import OrderTimeline from "../components/Dashboard/OrderTimeline";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import { dashboardData } from "../assets/mocks/data/dashboard";

const WebsiteVisits = dynamic(
  () => import("../components/Dashboard/WebsiteVisits"),
  {
    ssr: false,
  }
);

export default function Dashboard() {
  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back
      </Typography>

      <Grid container spacing={3}>
        {dashboardData.infoCards.map((data, i) => (
          <Grid key={i} item xs={12} sm={6} md={3}>
            <InfoCard {...data} />
          </Grid>
        ))}

        <Grid item xs={12} md={6} lg={8}>
          <WebsiteVisits {...dashboardData.websiteVisits} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentSubject {...dashboardData.currentSubject} />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <ConversionRates {...dashboardData.conversionRates} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CurrentVisits {...dashboardData.currentVisits} />
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

Dashboard.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
