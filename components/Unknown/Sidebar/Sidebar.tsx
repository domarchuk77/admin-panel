import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemButton from "@material-ui/core/ListItemButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { ITheme } from "../../../common/theme/overrides";

import DashboardIcon from "./Dashboard.svg";
import UserIcon from "./User.svg";
import ProductIcon from "./Product.svg";
import BlogIcon from "./Blog.svg";

import Stack from "@material-ui/core/Stack";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Context } from "../Context";
import NotFoundIcon from "./NotFound.svg";
import firebase from "firebase";
import { alpha, useTheme } from "@material-ui/system";

const sections = [
  { icon: <DashboardIcon />, name: "Dashboard", href: "/" },
  { icon: <UserIcon />, name: "Users", href: "/users" },
  { icon: <ProductIcon />, name: "Products", href: "/products" },
  { icon: <BlogIcon />, name: "Blog", href: "/blog" },
  { icon: <NotFoundIcon />, name: "Not Found", href: "/404" },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const isDesktop = useMediaQuery(({ breakpoints }: ITheme) =>
    breakpoints.up("lg")
  );
  const { user } = useContext(Context);
  const router = useRouter();
  const theme = useTheme();

  return (
    <Drawer
      open={isOpen}
      variant={isDesktop ? "permanent" : "temporary"}
      onClose={() => setIsOpen(false)}
      sx={{ width: 280, height: "100vh" }}
      PaperProps={{ sx: { width: 280, height: "100vh" } }}
    >
      <Stack
        direction="row"
        alignItems="center"
        bgcolor="grey.200"
        px={2.5}
        py={2}
        borderRadius="12px"
        mx={2.5}
        my={5}
      >
        <Avatar src={user?.photoURL || ""} />
        <Box ml={2}>
          <Typography variant="subtitle2">{user?.displayName}</Typography>
          <Button
            disableRipple
            variant="text"
            onClick={() => firebase.auth().signOut()}
          >
            Sign Out
          </Button>
        </Box>
      </Stack>
      <List>
        {sections.map(({ icon, name, href }, i) => {
          const isActive = href === router.pathname;
          return (
            <Link href={href} key={i}>
              <ListItemButton
                sx={{
                  px: 5,
                  py: 1.75,
                  borderRightStyle: "solid",
                  borderRightWidth: isActive ? 3 : 0,
                  color: isActive ? "primary.main" : "grey.600",
                  bgcolor: isActive
                    ? alpha(theme.palette.primary.main, 0.08)
                    : "unset",
                }}
                onClick={() => setIsOpen(false)}
              >
                {icon}
                <Typography
                  variant="body2"
                  sx={{ ml: 1.75, fontWeight: isActive ? 600 : 400 }}
                >
                  {name}
                </Typography>
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
}
