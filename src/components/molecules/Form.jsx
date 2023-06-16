import React from "react";
import { Button, Input } from "../atoms";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await dispatch(login(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-3"
      autoComplete="off"
    >
      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        register={register}
      />
      <Input
        label="Password"
        type="password"
        id="password"
        name="password"
        register={register}
      />
      <div className="flex flex-col w-full gap-2">
        <Button
          type="submit"
          style="bg-primary hover:bg-primary/60 text-white"
          content="Login"
        />
        <div className="flex items-center justify-between">
          <span className="flex-1 h-1">
            <hr className="bg-primary h-[3px]" />
          </span>
          <span className="px-2">or</span>
          <span className="flex-1 h-1">
            <hr className="bg-primary h-[3px]" />
          </span>
        </div>
        <Button
          type="button"
          style="bg-primary flex gap-2 items-center justify-center  bg-transparent border hover:bg-primary border-primary text-black hover:text-white"
          content={
            <>
              <img src="./loginGoogle.png" alt="google" />
              Masuk dengan google
            </>
          }
        />

        <Link className="flex justify-center w-full gap-2">
          Ingin menjadi mitra apoteker?{" "}
          <span className="text-primary hover:underline">Daftar</span>
        </Link>
      </div>
    </form>
  );
};

export default Form;
