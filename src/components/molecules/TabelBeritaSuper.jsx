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
  { id: "judul", label: "Judul", minWidth: 10 },
  {
    id: "gambar",
    label: "Gambar",
    minWidth: 10,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "title",
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

function createData(no, judul, gambar, title, action) {
  return { no, judul, gambar, title, action };
}

export default function TabelBeritaSuper() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [berita, setBerita] = React.useState([]);
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
      .get("http://vijayasena.marsanix.com/api/berita")
      .then((res) => {
        console.info(res.data);
        setBerita(res.data);
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
      text: `Kamu akan menghapus ${item.judul}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://vijayasena.marsanix.com/api/berita/${item.uuid}`)
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
  function truncateText(text, limit) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }
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
            {berita
              .map((item, index) =>
                createData(
                  index + 1,
                  item.judul,
                  <img
                    src={`../${item.gambar}`}
                    alt={item.gambar}
                    className="w-52"
                  />,
                  truncateText(item.title, 50),
                  <div className="flex items-center justify-center gap-5">
                    <Link to={`/admin/tambahblog/${item.uuid}`}>
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
                          {column.id === "judul"
                            ? truncateText(value, 20)
                            : column.format && typeof value === "number"
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
        count={berita.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
