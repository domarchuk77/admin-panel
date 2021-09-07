import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import React from "react";
import StreetImg from "../../../common/icons/Street.jpg";

const list = [
  {
    title: "Ducimus dignissimos doloremque",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt nemo aliquam obcaecati repellat laboriosam, ipsa eligendi dolores ipsam blanditiis nobis. Ducimus dignissimos doloremque repellat laborum impedit autem earum placeat.",
    hours: "6",
    img: StreetImg,
  },
  {
    title: "Ducimus dignissimos doloremque",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt nemo aliquam obcaecati repellat laboriosam, ipsa eligendi dolores ipsam blanditiis nobis. Ducimus dignissimos doloremque repellat laborum impedit autem earum placeat.",
    hours: "8",
    img: StreetImg,
  },
  {
    title: "Ducimus dignissimos doloremque",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt nemo aliquam obcaecati repellat laboriosam, ipsa eligendi dolores ipsam blanditiis nobis. Ducimus dignissimos doloremque repellat laborum impedit autem earum placeat.",
    hours: "12",
    img: StreetImg,
  },
  {
    title: "Ducimus dignissimos doloremque",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt nemo aliquam obcaecati repellat laboriosam, ipsa eligendi dolores ipsam blanditiis nobis. Ducimus dignissimos doloremque repellat laborum impedit autem earum placeat.",
    hours: "19",
    img: StreetImg,
  },
  {
    title: "Ducimus dignissimos doloremque",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt nemo aliquam obcaecati repellat laboriosam, ipsa eligendi dolores ipsam blanditiis nobis. Ducimus dignissimos doloremque repellat laborum impedit autem earum placeat.",
    hours: "23",
    img: StreetImg,
  },
];

export default function NewsUpdate() {
  return (
    <Card>
      <CardHeader sx={{ mb: 3 }} title="News Update"></CardHeader>

      {list.map(({ title, text, hours, img }, i) => (
        <Box mb={3} mx={3} display="flex" alignItems="center" key={i}>
          <Avatar
            sx={{ borderRadius: "12px", width: 48, height: 48, mr: 2 }}
            src={img.src}
          />
          <Stack direction="column" overflow="hidden">
            <Typography variant="subtitle2">{title}</Typography>

            <Typography
              variant="body2"
              color="#637381"
              noWrap
              sx={{ maxWidth: { lg: 700, xl: 900 } }}
            >
              {text}
            </Typography>
          </Stack>
          <Typography
            variant="caption"
            color="rgb(99, 115, 129)"
            sx={{ flexShrink: 0, ml: 2.5 }}
          >{`about ${hours} hours`}</Typography>
        </Box>
      ))}
    </Card>
  );
}
