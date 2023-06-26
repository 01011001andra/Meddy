import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem, Button, InputLabel } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateObatSuper = () => {
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = () => {
    axios
      .get(`http://vijayasena.marsanix.com/api/obat/${id}`)
      .then((res) => {
        console.info(res.data);
        // Mengisi nilai default input field menggunakan setValue
        setValue("name", res.data.name);
        setValue("jenis", res.data.jenis);
        setValue("efek", res.data.efek);
        setValue("kegunaan", res.data.kegunaan);
        setValue("komposisi", res.data.komposisi);
        setValue("deskripsi", res.data.deskripsi);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = (data) => {
    axios
      .patch(`http://vijayasena.marsanix.com/api/obat/${id}`, data)
      .then((res) => {
        console.info(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data Berhasil Di Update",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/tambahobat");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className="mb-8 text-3xl font-medium md:text-4xl">Update Obat</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <TextField
          id="name"
          type="text"
          {...register("name", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="jenis">Jenis</InputLabel>
        <TextField
          id="jenis"
          type="text"
          {...register("jenis", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="efek">Efek</InputLabel>
        <TextField
          id="efek"
          type="text"
          {...register("efek", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="kegunaan">Kegunaan</InputLabel>
        <TextField
          id="kegunaan"
          type="text"
          {...register("kegunaan", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="komposisi">Komposisi</InputLabel>
        <TextField
          id="komposisi"
          type="text"
          {...register("komposisi", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="deskripsi">Deskripsi</InputLabel>
        <TextField
          id="deskripsi"
          variant="outlined"
          multiline
          minRows={3}
          size="small"
          type="text"
          {...register("deskripsi", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <div className="flex gap-8">
          <Button
            component={Link}
            to="/admin/tambahobat"
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

export default UpdateObatSuper;
