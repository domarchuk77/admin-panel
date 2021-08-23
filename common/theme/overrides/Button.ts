import { createTheme, Theme } from "@material-ui/core";
import { ITheme } from ".";
import palette from "../palette";
import { customShadows } from "../shadows";

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
              boxShadow: "none",
            },
          },

          containedInherit: {
            color: palette.grey[800],
            boxShadow: customShadows.z8,
            "&:hover": {
              backgroundColor: palette.grey[400],
            },
          },
          containedPrimary: {
            boxShadow: customShadows.primary,
            fontWeight: 700,
          },
          containedSecondary: {
            boxShadow: customShadows.secondary,
          },
          outlinedInherit: {
            border: `1px solid ${palette.grey[500_32]}`,
            "&:hover": {
              backgroundColor: palette.action.hover,
            },
            height: 48,
          },
          textInherit: {
            "&:hover": {
              backgroundColor: palette.action.hover,
            },
          },
        },
      },
    },
  });
}
