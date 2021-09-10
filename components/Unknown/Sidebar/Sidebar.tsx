import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemButton from "@material-ui/core/ListItemButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { ITheme } from "../../../common/theme/overrides";
import useStyles from "./useStyles";

import DashboardIcon from "./Dashboard.svg";
import UserIcon from "./User.svg";
import ProductIcon from "./Product.svg";
import BlogIcon from "./Blog.svg";
import LogoIcon from "./Logo.png";
import Stack from "@material-ui/core/Stack";
import Avatar from "@material-ui/core/Avatar";
import AvatarImg from "../../../pages/Avatar.jpg";
import Button from "@material-ui/core/Button";
import { Context } from "../Context";
import NotFoundIcon from "./NotFound.svg";

const sections = [
  { icon: <DashboardIcon />, name: "Dashboard", href: "/" },
  { icon: <UserIcon />, name: "User", href: "/user" },
  { icon: <ProductIcon />, name: "Product", href: "/product" },
  { icon: <BlogIcon />, name: "Blog", href: "/blog" },
  { icon: <NotFoundIcon />, name: "Not Found", href: "/404" },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [currentPage, setCurrentPage] = React.useState("");
  const isDesktop = useMediaQuery(({ breakpoints }: ITheme) =>
    breakpoints.up("lg")
  );
  const { signOut, user } = React.useContext(Context);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  return (
    <Drawer
      open={isOpen}
      variant={isDesktop ? "permanent" : "temporary"}
      onClose={() => setIsOpen(false)}
      //
      sx={{ width: 280, height: "100vh" }}
      PaperProps={{ sx: { width: 280, height: "100vh" } }}
    >
      <Stack
        direction="row"
        alignItems="center"
        bgcolor="rgb(244, 246, 248)"
        px={2.5}
        py={2}
        borderRadius="12px"
        mx={2.5}
        my={5}
      >
        <Avatar src={user?.photoURL || ""} />
        <Box ml={2}>
          <Typography variant="subtitle2">{user?.displayName}</Typography>
          <Button disableRipple variant="text" onClick={signOut}>
            Sign Out
          </Button>
        </Box>
      </Stack>
      <List>
        {sections.map(({ icon, name, href }, i) => {
          const isActive = href === currentPage;
          return (
            <Link href={href} key={i}>
              <ListItemButton
                sx={{
                  px: 5,
                  py: 1.75,
                  borderRightStyle: "solid",
                  borderRightWidth: isActive ? 3 : 0,
                  color: isActive ? "primary.main" : "grey.600",
                  bgcolor: isActive ? "primary.main_08" : "unset",
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
