import React from "react";
import adminOne from "./adminOne.png";
import adminTwo from "./adminTwo.png";

const Home = () => {
  return (
    <div className="font-nunito pt-32 flex justify-center items-center mx-auto mobile:mx-2 tablet:mx-0">
      <div className="text-center">
        <h1 className="text-8xl font-bold mobile:text-4xl">BuyBooks</h1>
        <p className="text-xl my-5 text-gray-500 uppercase">
          home page for Admin Panel
        </p>

        <div
          className="flex justify-center items-center w-1/2 mx-auto my-10
            mobile:flex-col mobile:mx-2 mobile:w-full tablet:mx-0 tablet:flex-col tablet:w-full"
        >
          <img
            src={adminOne}
            alt="chart"
            className="w-1/2 mobile:w-full tablet:w-full"
          />
          <img
            src={adminTwo}
            alt="team"
            className="w-1/2 mobile:w-full tablet:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
