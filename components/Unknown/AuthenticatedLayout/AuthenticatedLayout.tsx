import { ReactNode, useContext, useState } from "react";
import { useRouter } from "next/router";

import { Context } from "../Context";
import LoadingPage from "../LoadingPage";
import Sidebar from "../Sidebar";
import Header from "../Header";

import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

interface AuthenticatedLayoutProps {
  title?: string;
  children?: ReactNode;
}

export default function AuthenticatedLayout({
  children,
  title,
}: AuthenticatedLayoutProps) {
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
          <Container maxWidth="xl">
            {title && (
              <Typography variant="h4" sx={{ mb: 5 }}>
                {title}
              </Typography>
            )}
            {children}
          </Container>
        </Box>
      </Box>
    </Stack>
  );
}
