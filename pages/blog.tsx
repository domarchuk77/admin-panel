import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import Stack from "@material-ui/core/Stack";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import BGAvatar from "../common/icons/BGAvatar.svg";
import ChatIcon from "../common/icons/Chat.svg";
import ShareIcon from "../common/icons/Share.svg";
import EyeIcon from "../common/icons/Eye.svg";
import StreetImg from "../common/icons/Street.jpg";
import AvatarImg from "../common/icons/Avatar.jpg";

const news = [
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
  {
    date: "10 September 2020",
    title: "Fresh Prince",
    comments: "26.32k",
    watch: "28.39k",
    share: "22.24k",
  },
];

export default function Blog() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Blog
      </Typography>

      <Grid container spacing={3}>
        {news.map(({ title, date, share, watch, comments }, i) => (
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
                  src={AvatarImg.src}
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
                <Typography variant="subtitle2" sx={{ mb: 6 }}>
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
                      {watch}
                    </Typography>
                  </Stack>

                  <Stack direction="row">
                    <ShareIcon />
                    <Typography variant="caption" sx={{ ml: 0.5, mr: 1.5 }}>
                      {share}
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
