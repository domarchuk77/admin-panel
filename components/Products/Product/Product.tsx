import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import EventCard from "../../Unknown/EventCard";

interface ProductProps {
  img: string;
  name: string;
  price: string;
  sale: string;
  event: string;
  colors: string[];
}

export default function Product({
  img,
  name,
  price,
  sale,
  event,
  colors,
}: ProductProps) {
  return (
    <Box>
      <Paper sx={{ overflow: "hidden", position: "relative" }}>
        {event && (
          <Box position="absolute" top={16} right={16}>
            <EventCard text={event} />
          </Box>
        )}
        <Box component="img" src={img} alt={name} />
        <Box p={3}>
          <Typography variant="subtitle2">{name}</Typography>
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Stack direction="row" alignItems="center">
              {colors.slice(0, 3).map((bgcolor, i) => (
                <Box
                  key={i}
                  borderRadius="50%"
                  width={16}
                  height={16}
                  bgcolor={bgcolor}
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
                  color="grey.500"
                >
                  ${price}
                </Typography>
                <Typography variant="subtitle1">&nbsp;${sale}</Typography>
              </Stack>
            ) : (
              <Typography variant="subtitle1">${price}</Typography>
            )}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
