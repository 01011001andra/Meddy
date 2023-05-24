import React from "react";
import { Button, Input } from "../atoms";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="flex flex-col w-full gap-3" autoComplete="off">
      <Input label="Email" type="email" id="email" name="email" />
      <Input label="Password" type="password" id="password" name="password" />
      <div className="flex flex-col w-full gap-2">
        <Button
          type="button"
          style="bg-primary hover:bg-primary/60 "
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
              Login with Google
            </>
          }
        />

        <Link className="flex justify-center w-full gap-2">
          Don't have an account?{" "}
          <span className="text-primary hover:underline">Sign in</span>
        </Link>
      </div>
    </form>
  );
};

export default Form;
