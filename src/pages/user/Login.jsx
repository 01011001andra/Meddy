import * as React from "react";
import { Form, Switches } from "../../components";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full min-h-screen bg-secondary dark:bg-slate-900">
      <div className="hidden">
        <Switches />
      </div>
      <div className="flex flex-col w-full gap-6 px-4 md:w-1/2 ">
        <div className="w-full max-w-lg mx-auto rounded-md 2xl:max-w-xl">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex justify-center w-full gap-1 text-lg font-bold lg:text-xl text-primary">
              Selamat Datang
              <TypeAnimation
                sequence={["Apoteker", 2000, "Super Admin", 4000]}
                cursor={true}
                repeat={Infinity}
                className="text-lg font-bold lg:text-xl text-primary"
              />
            </div>
            <p className="text-lg font-thin">
              Silahkan login untuk masuk ke dashboard
            </p>
          </div>
          <div className="w-full">
            <Form />
            <Link to="/login" className="max-w-xs mt-4 text-sm underline">
              Login Form
            </Link>
            <Link to="/apoteker" className="max-w-xs mt-4 text-sm underline">
              Login Apoteker
            </Link>
            <Link to="/superadmin" className="max-w-xs mt-4 text-sm underline">
              Login SuperAdmin
            </Link>
          </div>
        </div>
      </div>
      <div
        className="flex-col items-center justify-center hidden w-full min-h-screen gap-6 px-4 bg-cover bg-primary dark:bg-slate-800 md:flex md:w-1/2"
        style={{ backgroundImage: "url('./loginPattern.png')" }}
      >
        <img
          src="./loginContent.png"
          alt="login"
          className="h-72 xl:h-96 2xl:h-[450px]"
        />
      </div>
    </div>
  );
};

export default Login;
