import Head from "next/head";
import Link from "next/link";

import Button from "@material-ui/core/Button";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import NotFoundIcon from "../assets/icons/NotFound.svg";

export default function Error() {
  return (
    <Box>
      <Head>
        <title>Not Found</title>
      </Head>
      <Stack
        width="100vw"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" sx={{ mb: 3 }}>
          Sorry, page not found!
        </Typography>
        <Typography
          sx={{ color: "text.secondary", maxWidth: 480, mb: 4 }}
          align="center"
        >
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>
        <NotFoundIcon />

        <Link href="/">
          <Button size="large" variant="contained" sx={{ mt: 4 }}>
            Go to Home
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
