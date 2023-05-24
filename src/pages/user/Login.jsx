import * as React from "react";
import { Form } from "../../components";

const Login = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full min-h-screen bg-secondary">
      <div className="flex flex-col w-full gap-6 px-4 md:w-1/2 ">
        <div className="w-full max-w-lg mx-auto 2xl:max-w-xl">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-lg font-bold lg:text-xl text-primary">
              Welcome Admin,
            </h1>
            <p className="text-lg font-thin lg:text-xl">
              Let's login to your dashboard
            </p>
          </div>
          <div className="w-full">
            <Form />
          </div>
        </div>
      </div>
      <div
        className="flex-col items-center justify-center hidden w-full min-h-screen gap-6 px-4 bg-cover md:flex md:w-1/2"
        style={{ backgroundImage: "url('./loginBackground.png')" }}
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
