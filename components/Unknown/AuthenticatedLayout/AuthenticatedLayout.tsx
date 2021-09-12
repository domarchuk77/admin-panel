import { FC, useContext, useState } from "react";
import { useRouter } from "next/router";

import { Context } from "../Context";
import LoadingPage from "../LoadingPage";
import Sidebar from "../Sidebar";
import Header from "../Header";

import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import Container from "@material-ui/core/Container";

const AuthenticatedLayout: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { user } = useContext(Context);

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
