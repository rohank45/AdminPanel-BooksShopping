import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    setUserDetails(location.state.userDetails);
  }, []);

  return (
    <div className="mt-40 pc:container mx-auto flex flex-wrap gap-10 pb-20 font-nunito">
      {userDetails.map((curElem, id) => {
        return (
          <div
            key={id}
            className="mx-auto overflow-hidden bg-white rounded-lg shadow-xl border"
          >
            <img
              className="object-cover w-full h-48 mt-1"
              src={curElem.book_image}
              alt="books"
            />

            <div className="px-4 py-2 h-72">
              <h1 className="text-3xl font-bold text-gray-800 uppercase">
                {curElem.title}
              </h1>
              <h1 className="text-lg font-bold py-2">${curElem.price}</h1>
              <h1 className="text-lg font-bold py-2">
                Author: {curElem.author}
              </h1>

              <div className="mt-1 text-gray-600">
                <p>{curElem.paymentToken}</p>
                <p>DONE</p>
              </div>

              <div className="mt-1 text-gray-600">
                <p>{curElem.orderStatus}</p>
                <p>out for delivery</p>
                <p>delivered</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetails;
