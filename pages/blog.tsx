import { ReactNode } from "react";
import Head from "next/head";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import Grid from "@material-ui/core/Grid";

import { blog } from "../assets/mocks/data/blog";
import BlogItem from "../components/Blog/BlogItem";

export default function Blog() {
  return (
    <Box>
      <Head>
        <title>Blog</title>
      </Head>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Blog
      </Typography>

      <Grid container spacing={3}>
        {blog.map((data, i) => (
          <Grid item md={i < 3 ? 4 : 3} sm={6} xs={12} key={i}>
            <BlogItem {...data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Blog.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
