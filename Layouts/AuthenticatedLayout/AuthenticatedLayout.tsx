import React from "react";
import { useRouter } from "next/router";

import { Context } from "../../components/Unknown/Context";
import LoadingPage from "../../components/Unknown/LoadingPage";
import Sidebar from "../../components/Unknown/Sidebar";
import Header from "../../components/Unknown/Header";

import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import Container from "@material-ui/core/Container";

const AuthenticatedLayout: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const { user } = React.useContext(Context);

  if (!user) {
    router.push("/login");
    return <LoadingPage />;
  }
  return (
    <Stack direction="row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box width={1}>
        <Header setIsOpen={setIsOpen} />
        <Box sx={{ py: { xs: 11, lg: 14.5 }, px: { xs: 0, lg: 2 } }}>
          <Container maxWidth="xl">{children}</Container>
        </Box>
      </Box>
    </Stack>
  );
};

export default AuthenticatedLayout;
