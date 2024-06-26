import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

let componentMounted = true;

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(24 * 60 * 60);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds((prev) => prev - 1), 1000);
  //   } else {
  //     setSeconds(0);
  //   }
  // }, [seconds]);

  const formatTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds %= 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products/");
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    }
    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-2 col-sm-12 col-xs-2 text-center py-5 d-flex flex-column">
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>
        <div className="col-md-10 col-sm-12 col-xs-10">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-4 mb-4">
              <Skeleton height={592} />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-4 mb-4">
              <Skeleton height={592} />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-4 mb-4">
              <Skeleton height={592} />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-4 mb-4">
              <Skeleton height={592} />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-4 mb-4">
              <Skeleton height={592} />
            </div>
            <div className="col-md-4 col-sm-6 col-xs-4 mb-4">
              <Skeleton height={592} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const CatergoryView = () => {
    return (
      <div className="col-md-4 col-sm-12 col-xl-2 text-center py-5 d-flex flex-column">
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark btn-sm m-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <CatergoryView />
        <div className="col-md-8 col-sm-12 col-xl-10 py-5">
          <div className="row">
            {filter.map((product) => {
              return (
                <div
                  id={product.id}
                  key={product.id}
                  className="col-md-6 col-sm-6 col-xl-3 mb-4"
                >
                  <div className="card text-center h-100" key={product.id}>
                    <img
                      className="card-img-top p-3 object-fit-contain border rounded"
                      src={product.image}
                      alt="Card"
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.title.substring(0, 12)}...
                      </h5>
                      <p className="card-text">
                        {product.description.substring(0, 90)}...
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item lead">
                        <p>
                          $ {product.price}{" "}
                          {seconds === 0 ? seconds : `(${formatTime(seconds)})`}
                        </p>
                      </li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                    </ul>
                    <div className="card-body">
                      <Link
                        to={"/product/" + product.id}
                        className="btn btn-dark m-1"
                      >
                        Bid (Simulate When user login)
                      </Link>
                      <button
                        className="btn btn-dark m-1"
                        onClick={() => addProduct(product)}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row gx-5">
          <div className="col-12">
            <h2 className="text-center">Auction Products</h2>
            <hr />
          </div>
        </div>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default Products;
