import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

import BGAvatar from "../../../assets/icons/BGAvatar.svg";
import ChatIcon from "../../../assets/icons/Chat.svg";
import ShareIcon from "../../../assets/icons/Share.svg";
import EyeIcon from "../../../assets/icons/Eye.svg";

interface BlogItemProps {
  title: string;
  date: string;
  comments: string;
  views: string;
  shared: string;
  img: string;
  avatar: string;
}

export default function BlogItem({
  title,
  date,
  comments,
  views,
  shared,
  img,
  avatar,
}: BlogItemProps) {
  return (
    <Card>
      <Box component="img" alt={title} src={img} width={1} height={1} />

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
        <Typography variant="caption" sx={{ mb: 1 }} color="grey.500">
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
          color="grey.500"
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
  );
}
