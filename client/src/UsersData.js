import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import UserImg from "./assets/user.jpg";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const history = useHistory();

  const getData = async () => {
    try {
      const res = await axios.get("/buybooks/users");
      setUsers(res.data);
    } catch (error) {
      history.push("/");
      return toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  const sendId = async (id) => {
    try {
      const fetchingUserDetails = await axios.post("/buybooks/user/details", {
        id: id.id,
      });

      setUserDetails(fetchingUserDetails.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="font-nunito flex justify-center items-center pt-32 mb-10 mx-auto w-full mobile:mx-0 tablet:mx-0">
      <div className="flex flex-wrap gap-10 justify-center items-center mx-auto w-full">
        {users.map((val) => {
          return (
            <div
              key={val?._id}
              onClick={() => {
                sendId({ id: val?._id });
              }}
              style={{ width: "330px" }}
              className="flex flex-wrap justify-center items-center gap-5 p-4 border rounded-lg 
                lowercase font-semibold cursor-pointer mobile:mx-auto mobile:gap-0"
            >
              {/* {val?.photo ? (
              <img src={val?.photo} alt="user" />
            ) : (
              <img src="./user.jpg" alt="user" />
            )} */}

              <img src={UserImg} alt="user" />

              <div className="flex flex-col gap-4">
                <div className="text-gray-700">
                  <p>name: {val?.name}</p>
                  <p>{val?.email}</p>
                  <p>
                    role: <span className="uppercase">{val?.role}</span>
                  </p>
                </div>

                <button
                  className="bg-teal-700 text-lg text-white rounded-md shadow-xl p-1"
                  onClick={() =>
                    history.push({
                      pathname: "/user/orders",
                      state: { userDetails: userDetails },
                    })
                  }
                >
                  see details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersData;
