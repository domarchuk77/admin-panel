import { createTheme, Theme } from "@material-ui/core/styles";
import { ITheme } from ".";

export default function Paper(theme: ITheme) {
  return createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          rounded: { borderRadius: "16px" },
          elevation1: {
            boxShadow:
              "rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px",
          },
        },
      },
    },
  });
}
