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
  { id: "jenis", label: "Jenis", minWidth: 10 },
  { id: "efek", label: "Efek", minWidth: 10 },
  {
    id: "kegunaan",
    label: "Kegunaan",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "komposisi",
    label: "Komposisi",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "gambar",
    label: "Gambar",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "deskripsi",
    label: "Deskripsi",
    minWidth: 10,
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

function createData(
  no,
  name,
  jenis,
  efek,
  kegunaan,
  komposisi,
  deskripsi,
  gambar,
  action
) {
  return {
    no,
    name,
    jenis,
    efek,
    kegunaan,
    komposisi,
    deskripsi,
    gambar,
    action,
  };
}

export default function TabelObatSuper() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [obat, setObat] = React.useState([]);
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
      .get("http://localhost:5000/obat")
      .then((res) => {
        console.info(res.data);
        setObat(res.data);
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
          .delete(`http://localhost:5000/obat/${item.uuid}`)
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
            {obat
              .map((item, index) =>
                createData(
                  index + 1,
                  item.name,
                  item.jenis,
                  item.efek,
                  item.kegunaan,
                  item.komposisi,
                  item.deskripsi,
                  <img
                    src={`../${item.gambar}`}
                    alt={item.gambar}
                    className="w-52"
                  />,
                  <div className="flex items-center justify-center gap-5">
                    <Link to={`/admin/tambahobat/${item.uuid}`}>
                      <EditIcon />
                    </Link>{" "}
                    <DeleteIcon
                      className="cursor-pointer"
                      onClick={() => {
                        return handleDelete(item);
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
        count={obat.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
