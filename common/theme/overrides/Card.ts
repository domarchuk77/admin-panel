import { createTheme } from "@material-ui/core";
import { ITheme } from ".";

export default function Card(theme: ITheme) {
  return createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: theme.customShadows.z16,
            borderRadius: theme.shape.borderRadiusMd,
            position: "relative",
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: { variant: "h6" },
          subheaderTypographyProps: { variant: "body2" },
        },
        styleOverrides: {
          root: {
            padding: theme.spacing(3, 3, 0),
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: theme.spacing(3),
          },
        },
      },
    },
  });
}
