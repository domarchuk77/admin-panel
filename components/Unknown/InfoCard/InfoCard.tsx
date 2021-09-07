import ButtonBase from "@material-ui/core/ButtonBase";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Stack from "@material-ui/core/Stack";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";

interface InfoCardProps {
  icon: string[];
  iconColor: string;
  bgColor: string;
  value: string;
  description: string;
  textColor: string;
  iconBgColor: string;
}

export default function InfoCard({
  icon,
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
        width: 1,
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
            backgroundImage: iconBgColor,
          }}
        >
          <SvgIcon
            aria-hidden="true"
            role="img"
            width={24}
            height={24}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            {icon.map((e, i) => (
              <path key={i} d={e} fill={iconColor} />
            ))}
          </SvgIcon>
        </Stack>
        <Stack justifyContent="center">
          <Typography variant="h3" align="center">
            {value}
          </Typography>
          <Typography variant="subtitle2" align="center">{description}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
