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

const columns = [
  { id: "no", label: "No", minWidth: 10 },
  { id: "code", label: "Gambar", minWidth: 10 },
  {
    id: "nama",
    label: "Nama",
    minWidth: 10,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "detail",
    label: "Detail",
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

function createData(no, code, nama, detail, action) {
  return { no, code, nama, detail, action };
}

const rows = [
  createData(
    1,
    "IN",
    1324171354,
    3287263,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    2,
    "CN",
    1403500365,
    9596961,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    3,
    "IT",
    60483973,
    301340,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    4,
    "US",
    327167434,
    9833520,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    5,
    "CA",
    37602103,
    9984670,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    6,
    "AU",
    25475400,
    7692024,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    7,
    "DE",
    83019200,
    357578,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    8,
    "IE",
    4857000,
    70273,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    9,
    "MX",
    126577691,
    1972550,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
  createData(
    10,
    "JP",
    126317000,
    377973,
    <div className="flex items-center justify-center gap-5">
      <EditIcon /> <DeleteIcon />
    </div>
  ),
];

export default function TableApoteker() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
