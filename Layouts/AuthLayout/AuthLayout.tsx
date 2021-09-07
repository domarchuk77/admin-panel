import React from "react";
import router from "next/router";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";

import GoogleIcon from "../../common/icons/Google.svg";
import LoadingPage from "../../components/Unknown/LoadingPage";
import { Context } from "../../components/Unknown/Context";

interface AuthLayoutProps {
  img: string;
  greetings: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  img,
  greetings,
}) => {
  const { signIn, user } = React.useContext(Context);

  if (user) {
    router.push("/");
    return <LoadingPage />;
  }
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Hidden mdDown>
        <Paper
          sx={{
            maxWidth: { xs: 400, lg: 464 },
            display: "grid",
            alignItems: "center",
            height: "calc(100vh - 40px)",
            margin: 2.5,
            width: 1,
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ margin: 5 }}>
              {greetings}
            </Typography>
            <img src={img} alt="" />
          </Box>
        </Paper>
      </Hidden>
      <Container>
        <Stack sx={{ height: 1 }} justifyContent="center" alignItems="center">
          <Box sx={{ maxWidth: 480, width: 1 }}>
            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              onClick={signIn}
            >
              <GoogleIcon />
            </Button>

            <Divider>
              <Typography
                variant="body2"
                color="grey.600"
                sx={{ px: 1.5, my: 3 }}
              >
                OR
              </Typography>
            </Divider>
            {children}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AuthLayout;
