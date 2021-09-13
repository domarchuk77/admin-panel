import { Dispatch, SetStateAction } from "react";

import Box from "@material-ui/core/Box";

import ButtonBase from "@material-ui/core/ButtonBase";
import Hidden from "@material-ui/core/Hidden";

import { alpha, useTheme } from "@material-ui/core/styles";

import { ITheme } from "../../../common/theme/overrides";

import MenuIcon from "./Menu.svg";
import Notifications from "./Notifications";

const DESKTOP_HEADER = 92;
const LAPTOP_HEADER = 64;

interface HeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setIsOpen }: HeaderProps) {
  const theme = useTheme() as ITheme;
  return (
    <Box
      component="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      minHeight={{ xs: LAPTOP_HEADER, lg: DESKTOP_HEADER }}
      width={1}
      bgcolor={alpha(theme.palette.common.white, 0.72)}
      position="fixed"
      maxWidth={{ xs: 1, lg: "calc(100vw - 280px)" }}
      zIndex={9}
      px={{ xs: 2, sm: 3, lg: 5 }}
      sx={{ backdropFilter: "blur(6px)" }}
    >
      <Box>
        <Hidden lgUp>
          <ButtonBase
            sx={{ fontSize: 24, p: 1.5 }}
            disableRipple
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <MenuIcon />
          </ButtonBase>
        </Hidden>
      </Box>
      <Notifications />
    </Box>
  );
}
