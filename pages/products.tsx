import { ReactNode } from "react";
import Head from "next/head";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import Product from "../components/Products/Product";

import { products } from "../assets/mocks/data/products";

export default function Products() {
  return (
    <Box>
      <Head>
        <title>Products</title>
      </Head>

      <Grid container spacing={3}>
        {products.map((data, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Product {...data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Products.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout title="Products">{page}</AuthenticatedLayout>
);
