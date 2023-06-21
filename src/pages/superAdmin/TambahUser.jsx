import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem, Button } from "@mui/material";

const TambahUser = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Select
        {...register("role", { required: true })}
        fullWidth
        margin="normal"
        displayEmpty
      >
        <MenuItem value="">Select Role</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="apoteker">Apoteker</MenuItem>
      </Select>
      <TextField
        label="+62"
        type="text"
        {...register("id", { required: true })}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default TambahUser;
