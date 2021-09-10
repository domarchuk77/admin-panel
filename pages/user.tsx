import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Stack from "@material-ui/core/Stack";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/system/Box";
import styled from "@material-ui/system/styled";
import { useFormik } from "formik";
import React, { ChangeEvent, useMemo, useState } from "react";
import { ITheme } from "../common/theme/overrides";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import LoupeIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import AvatarImg from "../common/icons/Avatar.jpg";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import { Divider, TableContainer } from "@material-ui/core";
import EventCard from "../components/Unknown/EventCard";

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

const userList = [
  {
    name: "Ivan Domarchuk",
    company: "E-pam Systems",
    role: "Frontend developer",
    verified: "Yes",
    status: {
      text: "Banned",
      color: "rgb(183, 33, 54)",
      bgcolor: "rgba(255, 72, 66, 0.16)",
    },
  },
  {
    name: "Ivan Domarchuk",
    company: "E-pam Systems",
    role: "Frontend developer",
    verified: "Yes",
    status: {
      text: "Active",
      color: "rgb(34, 154, 22)",
      bgcolor: "rgba(84, 214, 44, 0.16)",
    },
  },
  {
    name: "Ivan Domarchuk",
    company: "E-pam Systems",
    role: "Frontend developer",
    verified: "Yes",
    status: {
      text: "Active",
      color: "rgb(34, 154, 22)",
      bgcolor: "rgba(84, 214, 44, 0.16)",
    },
  },
  {
    name: "Ivan Domarchuk",
    company: "E-pam Systems",
    role: "Frontend developer",
    verified: "Yes",
    status: {
      text: "Active",
      color: "rgb(34, 154, 22)",
      bgcolor: "rgba(84, 214, 44, 0.16)",
    },
  },
  {
    name: "Ivan Domarchuk",
    company: "E-pam Systems",
    role: "Frontend developer",
    verified: "Yes",
    status: {
      text: "Active",
      color: "rgb(34, 154, 22)",
      bgcolor: "rgba(84, 214, 44, 0.16)",
    },
  },
  {
    name: "Ivan Domarchuk",
    company: "E-pam Systems",
    role: "Frontend developer",
    verified: "Yes",
    status: {
      text: "Active",
      color: "rgb(34, 154, 22)",
      bgcolor: "rgba(84, 214, 44, 0.16)",
    },
  },
];

export default function User() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [inputValue, setInputValue] = useState("");
  const currentUserList = useMemo(
    () =>
      userList.filter(({ name }) =>
        name.toLowerCase().includes(inputValue.toLowerCase())
      ),
    [inputValue]
  );

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {},
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <Box>
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
              {currentUserList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({ name, role, company, verified, status }, i, arr) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar src={AvatarImg.src} />
                        <Typography variant="subtitle2">{name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{company}</TableCell>
                    <TableCell>{role}</TableCell>
                    <TableCell>{verified}</TableCell>
                    <TableCell>
                      <EventCard {...status} />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
        {currentUserList.length === 0 && (
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
              No results found for &nbsp;
              <strong>{`"${inputValue}"`}</strong>. Try checking for typos or
              using complete words.
            </Typography>
          </Stack>
        )}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={currentUserList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

User.getLayout = (page: React.ReactNode) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);
{
  /* <Box
color="#229A16"
bgcolor="rgba(84, 214, 44, 0.16)"
borderRadius="8px"
px={1}
py={0.375}
fontSize={12}
fontWeight={700}
>
Active
</Box> */
}
