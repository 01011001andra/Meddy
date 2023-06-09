import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useGetUsersQuery } from "../../features/users/usersSlice";
import { getMe } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const columns = [
  { id: "no", label: "No", minWidth: 10 },
  { id: "name", label: "Name", minWidth: 10 },
  {
    id: "email",
    label: "Email",
    minWidth: 10,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "role",
    label: "Role",
    minWidth: 10,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(no, name, email, role, action) {
  return { no, name, email, role, action };
}

export default function TableAkunSuper() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [users, setUsers] = React.useState([]);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  React.useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const getData = () => {
    axios
      .get("http://vijayasena.marsanix.com/api/users")
      .then((res) => {
        console.info(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  React.useEffect(() => {
    getData();
  }, []);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Kamu yakin?",
      text: `Kamu akan menghapus ${item.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://vijayasena.marsanix.com/api/users/${item.uuid}`)
          .then((res) => {
            console.info(res.data);
            getData();
          })
          .catch((err) => {
            console.error(err);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .map((item, index) =>
                createData(
                  index + 1,
                  item.name,
                  item.email,
                  item.role,
                  <div className="flex items-center justify-center gap-5">
                    <Link to={`/admin/${item.uuid}`}>
                      <EditIcon />
                    </Link>{" "}
                    <DeleteIcon
                      className="cursor-pointer"
                      onClick={() => {
                        handleDelete(item);
                      }}
                    />
                  </div>
                )
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
