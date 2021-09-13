import { ChangeEvent, ReactNode, useMemo, useState } from "react";
import Head from "next/head";

import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/system/Box";
import styled from "@material-ui/system/styled";
import LoupeIcon from "@material-ui/icons/Search";
import TablePagination from "@material-ui/core/TablePagination";

import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import { ITheme } from "../common/theme/overrides";
import UsersTable from "../components/Users/UsersTable";

import { users } from "../assets/mocks/data/users";

const SearchStyle = styled(OutlinedInput)(({ theme }) => {
  const iTheme = theme as ITheme;
  return {
    width: 240,
    margin: iTheme.spacing(3, 0),
    transition: iTheme.transitions.create(["box-shadow", "width"], {
      easing: iTheme.transitions.easing.easeInOut,
      duration: iTheme.transitions.duration.shorter,
    }),
    "&.Mui-focused": { width: 320, boxShadow: iTheme.customShadows.z8 },
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  };
});

export default function Users() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const filterUserList = useMemo(
    () =>
      users.filter(({ name }) =>
        name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue]
  );
  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <Box>
      <Head>
        <title>Users</title>
      </Head>

      <Paper>
        <Stack direction="row" px={3}>
          <SearchStyle
            placeholder="Search user..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            startAdornment={
              <InputAdornment position="start" sx={{ color: "text.disabled" }}>
                <LoupeIcon />
              </InputAdornment>
            }
          />
        </Stack>
        <UsersTable
          userList={filterUserList}
          rowsPerPage={rowsPerPage}
          page={page}
        />
        {filterUserList.length === 0 && (
          <Stack
            alignItems="center"
            justifyContent="center"
            px={2}
            py={3}
            spacing={1}
            width={1}
            borderBottom="1px solid rgb(241, 243, 244)"
          >
            <Typography variant="subtitle1">Not found</Typography>
            <Typography variant="body2">
              No results found for <strong>&quot;{inputValue}&quot;</strong>.
              Try checking for typos or using complete words.
            </Typography>
          </Stack>
        )}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filterUserList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

Users.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout title="Users">{page}</AuthenticatedLayout>
);
