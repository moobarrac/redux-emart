import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(data);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    setData(await response.clone().json());
    setFilters(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProduct = (category) => {
    let filtered = data.filter((product) => product.category === category);
    setFilters(filtered);
  };

  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <>
            <div className="col-md-3">
              <Skeleton height={350} />
            </div>
            <div className="col-md-3">
              <Skeleton height={350} />
            </div>
            <div className="col-md-3">
              <Skeleton height={350} />
            </div>
            <div className="col-md-3">
              <Skeleton height={350} />
            </div>
          </>
        ) : (
          <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
              <button
                className="btn btn-outline-dark me-3"
                onClick={() => setFilters(data)}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark me-3"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </button>
              <button
                className="btn btn-outline-dark me-3"
                onClick={() => filterProduct("women's clothing")}
              >
                Women's Clothing
              </button>
              <button
                className="btn btn-outline-dark me-3"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </button>
              <button
                className="btn btn-outline-dark me-3"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </button>
            </div>
            {filters?.map((product) => {
              return (
                <>
                  <div className="col-md-3 mb-4" key={product.id}>
                    <div className="card h-100 p-4 text-center">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        height="250px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          {product.title.substring(0, 12)}...
                        </h5>
                        <p className="card-text lead fw-bold">
                          ${product.price}
                        </p>
                        <Link
                          to={`/products/${product.id}`}
                          className="btn btn-outline-dark"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
