import { FunctionComponent, SVGProps } from "react";

import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

interface InfoCardProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconColor: string;
  bgColor: string;
  value: string;
  description: string;
  textColor: string;
  iconBgColor: string;
}

export default function InfoCard({
  iconColor,
  bgColor,
  value,
  description,
  textColor,
  iconBgColor,
  ...props
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
          borderRadius="50%"
          height={64}
          width={64}
          sx={{ background: iconBgColor }}
        >
          <props.icon fill={iconColor} />
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
