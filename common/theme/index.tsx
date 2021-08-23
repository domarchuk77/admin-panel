import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./overrides";
import GlobalStyles from "./globalStyles";

interface ThemeConfigProps {
  children: React.ReactNode;
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
