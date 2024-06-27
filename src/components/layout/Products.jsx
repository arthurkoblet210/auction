import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import Dropdown from "react-bootstrap/Dropdown";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./index.css";

let componentMounted = true;

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(24 * 60 * 60);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        clearInterval(interval);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [seconds]);

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
      const responseData = await response.json();
      setData(responseData);
      setFilter(responseData);
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
        <div className="col-12 col-md-3 col-sm-12 col-xl-2 text-center py-5 d-flex flex-column">
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>
        <div className="col-12 col-md-9 col-sm-12 col-xl-10 py-5">
          <div className="row">
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
            </div>
            <div className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4">
              <Skeleton height={280} />
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

  const CategoryView = () => {
    return (
      <div className="view col-12 col-md-3 col-sm-12 col-xl-2 text-center py-5 d-flex flex-column">
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

  const CategoryViewCustomize = () => {
    return (
      <Dropdown as={ButtonGroup} className="viewCustomize">
        <Button variant="success">Category</Button>

        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setFilter(data)}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("jewelery")}>
            Jewelery
          </Dropdown.Item>
          <Dropdown.Item onClick={() => filterProduct("electronics")}>
            Electronics
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <CategoryView />
        <div className="col-12 col-md-9 col-sm-12 col-xl-10 py-5">
          <div className="row">
            {filter.map((product) => {
              return (
                <div
                  id={product.id}
                  key={product.id}
                  className="col-6 col-md-4 col-sm-6 col-xl-3 mb-4"
                >
                  <div className="card text-center h-auto" key={product.id}>
                    <Link
                      className="card-title text-nowrap overflow-hidden my-3 px-3"
                      to={`/product/${product.id}`}
                    >
                      {product.title}
                    </Link>
                    <img
                      className="card-img-top p-3 object-fit-contain border rounded"
                      src={product.image}
                      alt="Card"
                      height={150}
                    />
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item lead">
                        <div className="row fs-6 d-flex justify-content-center">
                          Current bid - $ {product.price}{" "}
                        </div>
                        <div className="row fs-6 d-flex justify-content-center">
                          Time left -{" "}
                          {seconds === 0 ? "ended" : `(${formatTime(seconds)})`}
                        </div>
                      </li>
                    </ul>
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
        <div className="row gx-5 gy-2">
          <div className="col-12">
            <h2 className="text-center">Auction Products</h2>
          </div>
          <div className="col-12 text-center">
            <CategoryViewCustomize />
            <hr />
          </div>
        </div>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default Products;
