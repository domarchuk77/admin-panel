import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Drawer,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DashboardIcon from "./Dashboard.svg";
import UserIcon from "./User.svg";
import ProductIcon from "./Product.svg";
import BlogIcon from "./Blog.svg";
import MenuIcon from "./Menu.svg";
import LogoIcon from "./Logo.png";
import { useRouter } from "next/router";
import Link from "next/link";
import useStyles from "./useStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ITheme } from "../../common/theme/overrides";

const data = [
  { icon: <DashboardIcon />, name: "Dashboard", href: "/" },
  { icon: <UserIcon />, name: "User", href: "/user" },
  { icon: <ProductIcon />, name: "Product", href: "/product" },
  { icon: <BlogIcon />, name: "Blog", href: "/blog" },
];

const DESKTOP_HEADER = 92;
const LAPTOP_HEADER = 64;

export const AuthenticatedLayout: React.FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();
  const isDesktop = useMediaQuery((theme: ITheme) =>
    theme.breakpoints.up("lg")
  );

  useEffect(() => {
    setCurrentPage(pathname);
    console.log(isDesktop);
  }, [pathname]);
  const classes = useStyles();
  return (
    <Stack direction="row">
      <Drawer
        open={isOpen}
        classes={{ paper: classes.paper, root: classes.paper }}
        variant={isDesktop ? "permanent" : "temporary"}
        onClose={() => setIsOpen(false)}
      >
        <Box sx={{ px: 2.5, py: 3 }}>
          <img alt="Logo" src={LogoIcon.src} width={40} />
        </Box>
        <List>
          {data.map(({ icon, name, href }, i) => {
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
                    "&:hover": {
                      bgcolor: isActive ? "primary.main_08" : "unset",
                    },
                  }}
                >
                  {icon}
                  <Typography variant="subtitle2" sx={{ ml: 1.75 }}>
                    {name}
                  </Typography>
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Drawer>
      <Box>
        <Box height={92} component="header">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: 92,
              width: 1,
              bgcolor: "rgba(255, 255, 255, 0.72)",
              position: "fixed",
              backdropFilter: "blur(6px)",
              maxWidth: { xs: 1, lg: "calc(100vw - 280px)" },
            }}
          >
            <Box>
              <Hidden lgUp>
                <ButtonBase
                  sx={{ fontSize: 24, p: 1.5, ml: 3 }}
                  disableRipple
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <MenuIcon />
                </ButtonBase>
              </Hidden>
            </Box>
            <Button variant="contained" size="small">
              Notifications
            </Button>
          </Box>
        </Box>

        <Typography variant="h1"> {children}</Typography>
      </Box>
    </Stack>
  );
};

// import firebase from "firebase";
// import { useFirestore } from "reactfire";

// import { useRouter } from "next/router";

// const firestore = useFirestore();
// const [currentUser, setCurrentUser] =
//   React.useState<Array<{ type: string }>>();
// // const [messages, loading] = useCollectionData<Array<{ type: string }>>(
// //   firebase.firestore().collection("users").where("type", "==", "true")
// // );
// useEffect(() => {
//   const test = async () => {
//     try {
//       console.log("start");
//       // await firebase
//       //   .firestore()
//       //   .collection("users")
//       //   .doc("new-city-id")
//       //   .set({ asd: "asd" });
//       // console.log("stop");
//       // const resultsRef = firestore.collection("users").doc("new-city-id");

//       // const doc = await resultsRef.get();
//       // const resultsObj = doc.data() as Array<{ type: string }>;
//       const test = await firestore.collection("users").get();
//       const test2 = test.docs;
//       console.log(test);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   test();
// }, []);
// const login = async () => {
//   try {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     // const { user } = await firebase.auth().signInWithPopup(provider);
//     // console.log(user);
//   } catch (error) {
//     alert(error.message);
//   }
// };

// const signOut = async () => {
//   const test = await firebase.auth().signOut();
//   console.log("logout:", test);
// };
