import { createTheme } from "@material-ui/core";
import { ITheme } from ".";

export default function Button(theme: ITheme) {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "Public Sans, sans-serif",
            textTransform: "none",
            padding: theme.spacing(1.5),
            "&:hover": {
              boxShadow: "unset",
            },
          },
          text: {
            padding: theme.spacing(0),
            minWidth: 1,
            fontSize: 12,
            "&:hover": {
              backgroundColor: "unset",
            },
          },
          containedInherit: {
            color: theme.palette.grey[800],
            boxShadow: theme.customShadows.z8,
            "&:hover": {
              backgroundColor: theme.palette.grey[400],
            },
          },
          containedPrimary: {
            boxShadow: theme.customShadows.primary,
            fontWeight: 700,
          },
          containedSecondary: {
            boxShadow: theme.customShadows.secondary,
          },
          outlinedInherit: {
            border: `1px solid ${theme.palette.grey[500_32]}`,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
            height: 48,
          },
          textInherit: {
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
      },
    },
  });
}
