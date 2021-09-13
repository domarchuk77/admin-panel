import { ReactNode } from "react";

import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./overrides";

import GlobalStyles from "./globalStyles";

interface ThemeConfigProps {
  children: ReactNode;
}

export default function ThemeConfig({ children }: ThemeConfigProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
