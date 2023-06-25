import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem, Button, InputLabel } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateBeritaSuper = () => {
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = () => {
    axios
      .get(`http://localhost:5000/berita/${id}`)
      .then((res) => {
        console.info(res.data);
        // Mengisi nilai default input field menggunakan setValue
        setValue("judul", res.data.judul);
        setValue("title", res.data.title);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .patch(`http://localhost:5000/berita/${id}`, data)
      .then((res) => {
        console.info(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data Berhasil Di Update",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/tambahblog");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className="mb-8 text-3xl font-medium md:text-4xl">Update Obat</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="judul">Name</InputLabel>
        <TextField
          id="judul"
          type="text"
          {...register("judul", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="title">Deskripsi</InputLabel>
        <TextField
          id="title"
          variant="outlined"
          multiline
          minRows={3}
          size="small"
          type="text"
          {...register("title", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <div className="flex gap-8">
          <Button
            component={Link}
            to="/admin/tambahblog"
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBeritaSuper;
