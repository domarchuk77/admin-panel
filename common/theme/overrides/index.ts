import { createTheme, Theme, ThemeOptions } from "@material-ui/core/styles";
import { merge } from "lodash";
import palette, { IPalette } from "../palette";
import Button from "./Button";
import Input from "./Input";
import Paper from "./Paper";
import Typography from "./Typography";
import typography from "../typography";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import shape from "../shape";
import shadows from "../shadows";
import breakpoints from "../breakpoints";

export interface ITheme extends Theme {
  palette: IPalette;
}

export const overridesTheme = createTheme({
  breakpoints: breakpoints,
  palette: palette,
  shape: shape,
  typography: typography,
}) as ITheme;

export const theme = merge(
  Paper(overridesTheme),
  Button(overridesTheme),
  Typography(overridesTheme),
  Input(overridesTheme),
  overridesTheme
);
