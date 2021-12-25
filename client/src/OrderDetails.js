import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
  const location = useLocation();
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const [paymentState, setPaymentState] = useState("");
  const [orderStatusState, setOrderStatusState] = useState("");

  useEffect(() => {
    setUser(location.state.userDetails);
    setUserDetails(location.state.userDetails.myOrders);
  }, []);

  return (
    <div className="mt-40 pc:container mx-auto flex flex-wrap gap-10 pb-20 font-nunito">
      {userDetails.map((curElem, id) => {
        return (
          <div
            key={id}
            className="mx-auto overflow-hidden bg-white rounded-lg shadow-xl border w-80"
          >
            <img
              className="object-cover w-full h-48 mt-1"
              src={curElem.book_image}
              alt="books"
            />

            <div className="px-4 py-2">
              <div className="bg-gray-50">
                <h1 className="text-3xl font-bold text-gray-800 uppercase">
                  {curElem.title}
                </h1>
                <h1 className="text-lg font-bold py-2">
                  Author: {curElem.author}
                </h1>
                <h1 className="text-lg font-bold py-2">${curElem.price}</h1>

                <button
                  onClick={async () => {
                    try {
                      await axios.post("/update/order/data", {
                        email: user.email,
                        id: curElem._id,
                        paymentToken: paymentState,
                        orderStatus: orderStatusState,
                      });
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  className="w-full bg-yellow-700 text-white p-2 rounded-md mb-2 uppercase font-semibold"
                >
                  Update Data
                </button>
              </div>

              <select
                value={paymentState}
                onChange={(e) => setPaymentState(e.target.value)}
                className="py-1 px-1 w-full bg-indigo-100 text-black rounded-lg border border-gray-400 font-medium my-4"
              >
                <option value={curElem.paymentToken}>
                  {curElem.paymentToken}
                </option>
                {curElem.paymentToken === "cod" ? (
                  <option value="DONE">DONE</option>
                ) : (
                  ""
                )}
              </select>

              <select
                value={orderStatusState}
                onChange={(e) => setOrderStatusState(e.target.value)}
                className="py-1 px-1 w-full bg-indigo-100 text-black rounded-lg border border-gray-400 font-medium mb-2"
              >
                <option value={curElem.orderStatus}>
                  {curElem.orderStatus}
                </option>
                {curElem.orderStatus === "delivered" ? (
                  ""
                ) : (
                  <option value="delivered">delivered</option>
                )}
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetails;
