import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import StreetImg from "../common/icons/Street.jpg";
import AvatarIcon from "./Avatar.jpg";
import Stack from "@material-ui/core/Stack";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BGAvatar from "./BGAvatar.svg";
import { width } from "@material-ui/system";
import ChatIcon from "./Chat.svg";
import ShareIcon from "./Share.svg";
import EyeIcon from "./Eye.svg";

export default function Blog() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Blog
      </Typography>

      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => (
          <Grid item md={i < 3 ? 4 : 3} sm={6} xs={12} key={i}>
            <Card>
              <Box
                component="img"
                alt=""
                src={StreetImg.src}
                width={1}
                height={1}
              />

              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                maxWidth={93}
              >
                <Avatar
                  src={AvatarIcon.src}
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
                  10 September 2020
                </Typography>
                <Typography variant="subtitle2" sx={{ height: 44, mb: 1 }}>
                  Fresh Prince
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
                      28.29k
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <EyeIcon />
                    <Typography variant="caption" sx={{ ml: 0.5, mr: 1.5 }}>
                      28.29k
                    </Typography>
                  </Stack>

                  <Stack direction="row">
                    <ShareIcon />
                    <Typography variant="caption" sx={{ ml: 0.5, mr: 1.5 }}>
                      28.29k
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Blog.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);

/*     <Box sx={{ position: "relative", pt: "100%" }}>
              <Box
                component="img"
                alt=""
                src={WalkIcon.src}
                width={1}
                sx={{ objectFit: "cover" }}
                position="absolute"
                top={0}
                height={1}
              />
              <Box
                bgcolor="rgba(22, 28, 36, 0.72)"
                position="absolute"
                top={0}
                height={1}
                width={1}
              />
              <Avatar
                src={AvatarIcon.src}
                sx={{ position: "absolute", left: 24, top: 24 }}
              />
              <Box position="absolute" bottom={0} width={1}>
                <Typography variant="caption" color="#919EAB" mb={1}>
                  01 March 2021
                </Typography>
                <Typography variant="subtitle2" color="fff">
                  Tesla Cybertruck-inspired camper trailer for Tesla fans who
                  can’t just wait for the truck!
                </Typography>
                <Stack justifyContent="flex-end">asd</Stack>
              </Box>
            </Box> */
