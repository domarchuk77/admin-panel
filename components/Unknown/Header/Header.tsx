import { Dispatch, SetStateAction, useRef, useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemButton from "@material-ui/core/ListItemButton";
import Avatar from "@material-ui/core/Avatar";
import Stack from "@material-ui/core/Stack";
import { alpha, useTheme } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Popover from "@material-ui/core/Popover";

import { ITheme } from "../../../common/theme/overrides";

import MailIcon from "./Mail.svg";
import BoxIcon from "./Box.svg";
import ClockIcon from "./Clock.svg";
import MenuIcon from "./Menu.svg";
import Bell from "./Bell.svg";

const DESKTOP_HEADER = 92;
const LAPTOP_HEADER = 64;

interface HeaderProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const notifications = [
  {
    title: "Your order is placed",
    description: "waiting for shipping",
    hours: 4,
    icon: <BoxIcon />,
  },
  {
    title: "You have unread messages",
    description: "5 unread messages",
    hours: 8,
    icon: <MailIcon />,
  },
];

export default function Header({ setIsOpen }: HeaderProps) {
  const [isOpenPopover, setIsOpenPopover] = useState(false);
  const anchorRef = useRef(null);
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
      <Button
        variant="contained"
        size="small"
        onClick={() => setIsOpenPopover((prev) => !prev)}
        ref={anchorRef}
      >
        Notifications
        <Badge
          badgeContent={notifications.length}
          sx={{ pl: 0.5 }}
          color="error"
        >
          <Bell />
        </Badge>
      </Button>
      <Popover
        anchorEl={anchorRef.current}
        open={isOpenPopover}
        onClose={() => setIsOpenPopover(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1,
            pb: 2,
            overflow: "inherit",
            boxShadow: theme.customShadows.z20,
            border: `solid 1px ${theme.palette.grey[500_8]}`,
            width: 360,
            borderRadius: "16px",
          },
        }}
      >
        <Box p={2}>
          <Typography variant="subtitle1">Notifications</Typography>
          <Typography variant="body2" sx={{ color: "grey.600", mb: 1 }}>
            You have {notifications.length} unread messages
          </Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List sx={{ p: 0 }}>
          {notifications.map(({ title, description, hours, icon }, i) => (
            <ListItemButton sx={{ py: 1.5, pl: 2.5 }} key={i}>
              <Avatar sx={{ bgcolor: "grey.200", mr: 2 }}>{icon}</Avatar>

              <Box>
                <Typography variant="subtitle2">
                  {title}{" "}
                  <Typography
                    variant="body2"
                    color="grey.600"
                    sx={{
                      display: "inline",
                    }}
                  >
                    {description}
                  </Typography>
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  color="grey.500"
                  mt={0.5}
                >
                  <ClockIcon />
                  <Typography sx={{ ml: 0.5 }} variant="caption">
                    about {hours} hours
                  </Typography>
                </Stack>
              </Box>
            </ListItemButton>
          ))}
        </List>
        <Box
          sx={{
            top: -7,
            zIndex: 1,
            width: 12,
            right: 20,
            height: 12,
            content: "''",
            position: "absolute",
            borderRadius: "0 0 4px 0",
            transform: "rotate(-135deg)",
            background: theme.palette.background.paper,
            borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
            borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
          }}
        ></Box>
      </Popover>
    </Box>
  );
}
