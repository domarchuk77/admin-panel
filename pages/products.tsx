import { ReactNode } from "react";
import Head from "next/head";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import EventCard from "../components/Unknown/EventCard";
import { products } from "../assets/mocks/data/products";

export default function Product() {
  return (
    <Box>
      <Head>
        <title>Products</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Grid container spacing={3}>
        {products.map(({ name, price, sale, img, colors, event }, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper sx={{ overflow: "hidden", position: "relative" }}>
              {event && (
                <Box position="absolute" top={16} right={16}>
                  <EventCard text={event} />
                </Box>
              )}
              <Box component="img" src={img} alt={name} />
              <Box p={3}>
                <Typography variant="subtitle2">{name}</Typography>
                <Stack direction="row" justifyContent="space-between" mt={2}>
                  <Stack direction="row" alignItems="center">
                    {colors.slice(0, 3).map((bgcolor, i) => (
                      <Box
                        key={i}
                        borderRadius="50%"
                        width={16}
                        height={16}
                        bgcolor={bgcolor}
                        boxShadow="inset -1px 1px 2px rgb(0 0 0 / 24%)"
                        border="solid 2px #fff"
                        ml={i === 0 ? -0.25 : -0.5}
                      />
                    ))}
                    {colors.length > 3 && (
                      <Typography variant="subtitle2">
                        {`+${colors.length - 3}`}
                      </Typography>
                    )}
                  </Stack>
                  {sale ? (
                    <Stack direction="row">
                      <Typography
                        variant="body1"
                        sx={{ textDecoration: "line-through" }}
                        color="grey.500"
                      >
                        ${price}
                      </Typography>
                      <Typography variant="subtitle1">&nbsp;${sale}</Typography>
                    </Stack>
                  ) : (
                    <Typography variant="subtitle1">${price}</Typography>
                  )}
                </Stack>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Product.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
