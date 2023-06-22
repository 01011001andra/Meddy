import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem, Button, InputLabel } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const getData = () => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.info(res.data);
        // Mengisi nilai default input field menggunakan setValue
        setValue("name", res.data.name);
        setValue("email", res.data.email);
        setValue("password", res.data.password);
        setValue("role", res.data.role);
        setValue("id", res.data.id);
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
      .patch(`http://localhost:5000/users/${id}`, {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        confPassword: data.password,
        role: data.role,
      })
      .then((res) => {
        console.info(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data Berhasil Di Update",
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
      <h1 className="mb-8 text-3xl font-medium md:text-4xl">Update Akun</h1>
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
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField
          id="email"
          type="email"
          {...register("email", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="password">Password</InputLabel>
        <TextField
          id="password"
          type="password"
          {...register("password", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <InputLabel htmlFor="name">Role</InputLabel>
        <TextField
          id="role"
          type="text"
          {...register("role", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
          disabled
        />
        <InputLabel htmlFor="id">No Hp</InputLabel>
        <TextField
          id="id"
          type="text"
          {...register("id", { required: true })}
          fullWidth
          margin="normal"
          defaultValue=""
        />
        <div className="flex gap-8">
          <Button
            component={Link}
            to="/admin/kelola"
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

export default UpdateUser;
