import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const history = useHistory();

  const Logout = async () => {
    try {
      await axios.get("/buybooks/admin/logout");
      localStorage.removeItem("admin");

      history.push("/");
      toast.success("Logout Success!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav
        className="bg-zinc-800 text-white font-nunito shadow-md h-20 fixed top-0 w-full
         flex justify-between items-center px-20 mobile:px-4 tablet:px-10"
      >
        <Link
          to="/"
          className="text-2xl font-semibold mobile:text-base tablet:text-xl"
        >
          BuyBooks AdminPanel
        </Link>

        <div className="flex justify-center items-center">
          <div className="flex gap-4 justify-center items-center uppercase font-medium mobile:hidden">
            <Link to="/users" className="px-2 py-1 mx-2 mt-2">
              Users
            </Link>

            <Link to="/books" className="px-2 py-1 mx-2 mt-2">
              Books
            </Link>

            <Link to="/payments" className="px-2 py-1 mx-2 mt-2">
              Payments
            </Link>
          </div>

          <div className="mobile:fixed right-20">
            {localStorage.getItem("admin") ? (
              <button
                onClick={Logout}
                className="mx-2 text-md font-medium text-white bg-rose-700 px-2 py-1 rounded-lg"
              >
                LOGOUT
              </button>
            ) : (
              <button className="mx-2 text-md font-medium text-white bg-emerald-600 px-2 py-1 rounded-lg">
                <Link to="/login">LOGIN</Link>
              </button>
            )}
          </div>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className="fixed right-5 p-2 text-white bg-gray-900 rounded-md pc:hidden tablet:hidden laptop:hidden"
        >
          menu
        </button>

        <div className="pc:hidden tablet:hidden laptop:hidden">
          {menu === true ? (
            <div
              className="flex flex-col gap-4 justify-center items-center uppercase cursor-pointer py-1 px-1
                bg-indigo-100 text-black rounded-lg absolute top-16 right-5 border border-gray-400 font-medium"
            >
              <Link to="/users" className="px-2 py-1 mx-2 mt-2">
                Users
              </Link>

              <Link to="/books" className="px-2 py-1 mx-2 mt-2">
                Books
              </Link>

              <Link to="/payments" className="px-2 py-1 mx-2 mt-2">
                Payments
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
