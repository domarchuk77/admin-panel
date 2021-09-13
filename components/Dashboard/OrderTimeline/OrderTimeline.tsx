import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

interface OrderTimelineProps {
  list: Array<{ circleColor: string; date: string; name: string }>;
}

export default function OrderTimeline({ list }: OrderTimelineProps) {
  return (
    <Card>
      <CardHeader title="Order Timeline" />
      <CardContent>
        {list.map(({ circleColor, date, name }, i, arr) => {
          const isLast = i === arr.length - 1;
          return (
            <Stack direction="row" key={i}>
              <Stack alignItems="center">
                <Box
                  display="inline-block"
                  bgcolor={circleColor}
                  width={12}
                  height={12}
                  borderRadius="50%"
                  my={1.5}
                  boxShadow="0px 2px 1px -1px rgb(145 158 171 / 20%), 0px 1px 1px 0px rgb(145 158 171 / 14%), 0px 1px 3px 0px rgb(145 158 171 / 12%)"
                />

                {!isLast && (
                  <Box
                    bgcolor="grey.400"
                    width={2}
                    height={35}
                    display="inline-block"
                  />
                )}
              </Stack>
              <Box mx={2} my={0.75}>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography variant="caption" color="grey.600">
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
