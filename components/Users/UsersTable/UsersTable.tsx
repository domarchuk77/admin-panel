import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import EventCard from "../../Unknown/EventCard";

interface UsersTableProps {
  userList: Array<{
    name: string;
    company: string;
    role: string;
    verified: string;
    status: string;
    avatar: string;
  }>;
  page: number;
  rowsPerPage: number;
}

export default function UsersTable({
  userList,
  rowsPerPage,
  page,
}: UsersTableProps) {
  return (
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
          {userList
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
  );
}
