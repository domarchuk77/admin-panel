import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { upperCase } from "lodash";
import React from "react";

interface EventCardProps {
  bgcolor: string;
  color: string;
  text: string;
  uppercase?: boolean;
}

export default function EventCard({
  bgcolor,
  color,
  text,
  uppercase,
}: EventCardProps) {
  return (
    <Box
      px={1}
      py={0.25}
      bgcolor={bgcolor}
      borderRadius="8px"
      color={color}
      fontSize={12}
      fontWeight={700}
      sx={{ textTransform: uppercase ? "uppercase" : "none" }}
      display='inline-block'
    >
      {text}
    </Box>
  );
}
