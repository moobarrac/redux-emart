import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg-3.jpg" className="card-img" alt="Home" height="860px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center text-center bg-dark bg-opacity-50">
          <div className="container">
            <h5 className="display-3 fw-bolder mb-0">NEW SEASONS ARRIVAL<i className="fa fa-arrow-down text-black me-1"></i></h5>
            <p className="lead fs-2 text-black fw-bolder display-2">
              Check out all trends
            </p>
          </div>
        </div>
      </div>
    </div>
    <Products/>
    </>
  );
};

export default Home;
