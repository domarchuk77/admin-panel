import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import React from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import BootsImg from "../common/icons/Boots.jpg";
import EventCard from "../components/Unknown/EventCard";

export default function Product() {
  const list = [
    {
      name: "Adidas Yeezy boost 350 v2",
      price: "$21.88",
      img: BootsImg,
      colors: ["rgb(24, 144, 255)", "#00AB55", "#000000", "rgb(24, 144, 255)"],
      event: {
        text: "new",
        bgcolor: "rgb(24, 144, 255)",
      },
    },
    {
      name: "Adidas Yeezy boost 350 v2",
      price: "$98.23",
      img: BootsImg,
      colors: [
        "#00AB55",
        "#000000",
        "rgb(24, 144, 255)",
        "rgb(24, 144, 255)",
        "rgb(24, 144, 255)",
      ],
      event: {
        text: "new",
        bgcolor: "rgb(24, 144, 255)",
      },
    },
    {
      name: "Adidas Yeezy boost 500",
      price: "$23.86",
      sale: "$72.83",
      img: BootsImg,
      colors: ["#00AB55", "#000000"],
      event: {
        text: "sale",
        bgcolor: "rgb(255, 72, 66)",
      },
    },

    {
      name: "Nike Air Force 1 ",
      price: "$21.88",
      img: BootsImg,
      colors: [
        "#00AB55",
        "#000000",
        "rgb(24, 144, 255)",
        "#000000",
        "#000000",
        "#000000",
      ],
    },
    {
      name: "Nike Air Force 1 NDESTRUKT",
      price: "$21.88",
      img: BootsImg,
      colors: ["#00AB55", "#000000", "rgb(24, 144, 255)"],
      event: {
        text: "new",
        bgcolor: "rgb(24, 144, 255)",
      },
    },
    {
      name: "Nike Air Force 1 NDESTRUKT",
      price: "$21.88",
      sale: "$72.83",
      img: BootsImg,
      colors: ["#000000"],
      event: {
        text: "sale",
        bgcolor: "rgb(255, 72, 66)",
      },
    },
  ];
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Grid container spacing={3}>
        {list.map(({ name, price, sale, img, colors, event }, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper sx={{ overflow: "hidden", position: "relative" }}>
              {event && (
                <Box position="absolute" top={16} right={16}>
                  <EventCard {...event} color="common.white" uppercase />
                </Box>
              )}
              <Box component="img" src={img.src} alt={name} />
              <Box p={3}>
                <Typography variant="subtitle2">{name}</Typography>
                <Stack direction="row" justifyContent="space-between" mt={2}>
                  <Stack direction="row" alignItems="center">
                    {colors.slice(0, 3).map((e, i) => (
                      <Box
                        key={i}
                        borderRadius="50%"
                        width={16}
                        height={16}
                        bgcolor={e}
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
                        color="rgb(145, 158, 171)"
                      >
                        {price}
                      </Typography>
                      <Typography variant="subtitle1">&nbsp;{sale}</Typography>
                    </Stack>
                  ) : (
                    <Typography variant="subtitle1">{price}</Typography>
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

Product.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
