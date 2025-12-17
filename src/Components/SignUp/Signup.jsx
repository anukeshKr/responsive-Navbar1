import React from "react";
import Modal from "../Modal/Modal";

const Signup = () => {
  return (
    <div className="mt-5 border border-gray-500 p-4">
      <form action="" className="text-2xl space-y-3">
        <div className="flex gap-2 flex-col">
          <label htmlFor="Email">Email:</label>
          <input type="text" name="Email" />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="password">Password:</label>
          <input type="password" />
        </div>
        <div className="flex justify-center">
           <button className="bg-emerald-600 text-white border-none">Sumbit</button>
        </div>
      </form>
      <p className="mt-10 flex items-center justify-center">
        Aleady have a account?{" "}
        <a href="" className="underline text-blue-400 ml-2">
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
