import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginAdmin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        return alert("All fields are required");
      }

      await axios.post("/buybooks/admin/login", {
        email,
        password,
      });

      localStorage.setItem("admin", "true");
      history.push("/");

      return toast.success("Admin Login Success!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error.message);
      return toast.error("Invalid Credentials!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        className="flex justify-center items-center font-nunito text-xl font-semibold mt-40"
      >
        <div className="flex flex-col gap-10 overflow-hidden">
          <input
            type="email"
            name="email"
            placeholder="admin@admin"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-2 py-1 rounded-lg shadow-md bg-gray-100 border-2 border-black outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-2 py-1 rounded-lg shadow-md bg-gray-100 border-2 border-black outline-none"
          />

          <button
            type="submit"
            onClick={loginAdmin}
            className="px-2 py-1 rounded-lg shadow-md bg-green-700 text-white text-2xl"
          >
            LOGIN
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
