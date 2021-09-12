import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import Stack from "@material-ui/core/Stack";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import BGAvatar from "../assets/icons/BGAvatar.svg";
import ChatIcon from "../assets/icons/Chat.svg";
import ShareIcon from "../assets/icons/Share.svg";
import EyeIcon from "../assets/icons/Eye.svg";
import React, { ReactNode } from "react";
import { blog } from "../assets/mocks/data/blog";
import Head from "next/head";

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
        {blog.map(
          ({ title, date, shared, views, comments, avatar, img }, i) => (
            <Grid item md={i < 3 ? 4 : 3} sm={6} xs={12} key={i}>
              <Card>
                <Box component="img" alt="" src={img} width={1} height={1} />

                <Box
                  position="relative"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  maxWidth={93}
                >
                  <Avatar
                    src={avatar}
                    sx={{
                      position: "absolute",
                      width: 32,
                      height: 32,
                      zIndex: 2,
                    }}
                  />
                  <Box position="absolute" top={-23}>
                    <BGAvatar />
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant="caption"
                    sx={{ mb: 1 }}
                    color="rgb(145, 158, 171)"
                  >
                    {date}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      height: 44,
                      mb: 2,
                      WebkitLineClamp: 2,
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {title}
                  </Typography>
                  <Stack
                    justifyContent="flex-end"
                    color="rgb(145, 158, 171)"
                    direction="row"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Stack direction="row">
                      <ChatIcon />
                      <Typography variant="caption" sx={{ ml: 0.5, mr: 1.5 }}>
                        {comments}
                      </Typography>
                    </Stack>
                    <Stack direction="row">
                      <EyeIcon />
                      <Typography variant="caption" sx={{ ml: 0.5, mr: 1.5 }}>
                        {views}
                      </Typography>
                    </Stack>

                    <Stack direction="row">
                      <ShareIcon />
                      <Typography variant="caption" sx={{ ml: 0.5, mr: 1.5 }}>
                        {shared}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}

Blog.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
