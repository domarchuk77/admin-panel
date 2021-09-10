import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Stack from "@material-ui/core/Stack";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

interface InfoCardProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  bgColor: string;
  value: string;
  description: string;
  textColor: string;
  iconBgColor: string;
}

export default function InfoCard({
  Icon,
  iconColor,
  bgColor,
  value,
  description,
  textColor,
  iconBgColor,
}: InfoCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: bgColor,
        color: textColor,
        py: 5,
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            borderRadius: "50%",
            width: 64,
            height: 64,
            background: iconBgColor,
          }}
        >
          <Icon fill={iconColor} />
        </Stack>
        <Stack justifyContent="center">
          <Typography variant="h3" align="center">
            {value}
          </Typography>
          <Typography variant="subtitle2" align="center">
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
