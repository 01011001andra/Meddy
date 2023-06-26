import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TambahBeritaSuper = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("judul", data.judul);
    formData.append("gambar", data.gambar[0]);
    formData.append("title", data.title);

    axios
      .post("http://vijayasena.marsanix.com/api/berita", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.info("Berhasil dibuat");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data Berhasil Dibuat",
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
      <h1 className="text-3xl font-medium md:text-4xl">Tambah Data Berita</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Judul"
          type="text"
          {...register("judul", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          type="file"
          {...register("gambar", { required: true })}
          fullWidth
          margin="normal"
        />
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

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TambahBeritaSuper;
