import React from "react";
import Typical from "react-typical";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import illustration from "../../assets/images/illustration.png";
import Button from "../../component/button/Button";
import "./home.css";
const HomePage = () => {
  const history = useHistory();
  return (
    <div className="flex-1 bg-secondary-1 flex  flex-col md:flex-row justify-around box-border items-center overflow-auto">
      <div className="flex flex-col justify-start pt-72  h-full">
        <h1 className="text-4xl md:text-7xl font-bold md:mb-5 text-white">
          {" "}
          Welcome to E-shop
        </h1>
        <h3 className="md:text-5xl text-white mb-3"> where you can easily</h3>
        <p className="md:text-3xl text-white   ">
          <Typical
            steps={[
              " Create your own stores and categories!",
              100,
              " and add products",
              2000,
            ]}
            loop={Infinity}
            wrapper="div"
          />
        </p>

        <div className="flex mt-56">
          <Button
            text="Find Store"
            className="ml-5"
            onClick={() => history.push("/stores")}
          />
          <Button
            text="Find Products"
            className="ml-5"
            onClick={() => history.push("/products")}
          />
        </div>
      </div>
      <div className=" flex items-center  h-fit up-down mt-24 md:mt-0">
        <img src={illustration} alt="" className="h-auto w-110" />
      </div>
    </div>
  );
};

export default HomePage;
