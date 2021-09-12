import { ChangeEvent, ReactNode, useMemo, useState } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/system/Box";
import styled from "@material-ui/system/styled";
import LoupeIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

import AuthenticatedLayout from "../components/Unknown/AuthenticatedLayout";
import { users } from "../assets/mocks/data/users";
import { ITheme } from "../common/theme/overrides";
import EventCard from "../components/Unknown/EventCard";
import Head from "next/head";

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

export default function User() {
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
      <Typography variant="h4" sx={{ mb: 5 }}>
        Users
      </Typography>

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
        <Box overflow="auto">
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableCell>
                <Box ml={2}>Name</Box>
              </TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Verified</TableCell>
              <TableCell>Status</TableCell>
            </TableHead>
            <TableBody>
              {filterUserList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({ name, role, company, verified, status, avatar }, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar src={avatar} />
                        <Typography variant="subtitle2">{name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{company}</TableCell>
                    <TableCell>{role}</TableCell>
                    <TableCell>{verified}</TableCell>
                    <TableCell>
                      <EventCard text={status} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
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

User.getLayout = (page: ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
