import { createTheme, Theme, ThemeOptions } from "@material-ui/core/styles";
import { merge } from "lodash";

import palette, { IPalette } from "../palette";
import Button from "./Button";
import Input from "./Input";
import Paper from "./Paper";
import typography from "../typography";
import shape, { Shape } from "../shape";
import shadows, { CustomShadows, customShadows } from "../shadows";
import breakpoints from "../breakpoints";
import Card from "./Card";

export interface ITheme extends Theme {
  palette: IPalette;
  customShadows: CustomShadows;
  shape: Shape;
}

export interface IThemeOptions extends ThemeOptions {
  palette: IPalette;
  customShadows: CustomShadows;
}

export const overridesTheme = createTheme({
  breakpoints: breakpoints,
  palette: palette,
  shape: shape,
  typography: typography,
  shadows: shadows,
  customShadows: customShadows,
} as unknown as IThemeOptions) as ITheme;

export const theme = merge(
  Paper(overridesTheme),
  Button(overridesTheme),
  Input(overridesTheme),
  Card(overridesTheme),
  overridesTheme
);
