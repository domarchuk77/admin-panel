import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import React from "react";

const list = [
  {
    bgcolor: "#00AB55",
    name: "Departed country of origin",
    date: "29 Apr 2021 22:52",
  },
  {
    bgcolor: "rgb(84, 214, 44)",
    name: " Accepted for linehaul transportation",
    date: "22 Apr 2021 22:52",
  },
  {
    bgcolor: "rgb(24, 144, 255)",
    name: "Dispatched from sorting center",
    date: "19 Apr 2021 22:52",
  },
  {
    bgcolor: "rgb(255, 193, 7)",
    name: "Arrived at sorting center",
    date: "15 Apr 2021 22:52",
  },
  {
    bgcolor: "rgb(255, 72, 66)",
    name: "Parcel dispatched",
    date: "10 Apr 2021 22:52",
  },
];

export default function OrderTimeline() {
  return (
    <Card>
      <CardHeader title="Order Timeline" />
      <CardContent>
        {list.map(({ bgcolor, date, name }, i, arr) => {
          const isLast = i === arr.length - 1;
          return (
            <Stack direction="row">
              <Stack alignItems="center">
                <Box
                  display="inline-block"
                  bgcolor={bgcolor}
                  width={12}
                  height={12}
                  borderRadius="50%"
                  my={1.5}
                  boxShadow="0px 2px 1px -1px rgb(145 158 171 / 20%), 0px 1px 1px 0px rgb(145 158 171 / 14%), 0px 1px 3px 0px rgb(145 158 171 / 12%)"
                />

                {!isLast && (
                  <Box
                    bgcolor="#C4CDD5"
                    width={2}
                    height={35}
                    display="inline-block"
                  />
                )}
              </Stack>
              <Box mx={2} my={0.75}>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography variant="caption" color="#637381">
                  {date}
                </Typography>
              </Box>
            </Stack>
          );
        })}
      </CardContent>
    </Card>
  );
}
