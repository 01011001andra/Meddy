import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TambahObatSuper = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("jenis", data.jenis);
    formData.append("efek", data.efek);
    formData.append("kegunaan", data.kegunaan);
    formData.append("komposisi", data.komposisi);
    formData.append("gambar", data.gambar[0]); // Ambil file gambar pertama dari array
    formData.append("deskripsi", data.deskripsi);

    axios
      .post("http://localhost:5000/obat", formData, {
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
        navigate("/admin/tambahobat");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-medium md:text-4xl">Tambah Data Obat</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          type="text"
          {...register("name", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Jenis"
          type="text"
          {...register("jenis", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Efek"
          type="text"
          {...register("efek", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Kegunaan"
          type="text"
          {...register("kegunaan", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Komposisi"
          type="text"
          {...register("komposisi", { required: true })}
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TambahObatSuper;
