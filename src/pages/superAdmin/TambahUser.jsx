import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TambahUser = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(import.meta.env.VITE_API_CREATE_USER);
    axios
      .post(import.meta.env.VITE_API_CREATE_USER, {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        confPassword: data.password,
        role: "apoteker",
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
        navigate("/admin/kelola");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-medium md:text-4xl">Tambah Akun</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          type="text"
          {...register("name", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          {...register("email", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          {...register("password", { required: true })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="No Hp"
          type="number"
          {...register("id", { required: true })}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TambahUser;
