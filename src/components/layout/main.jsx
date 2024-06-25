import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
            style={{ filter: "blur(4px)" }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-bold">
                STORE in the Bangladesh, New Product Sales
              </h5>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p>
                      NO HIDDEN FEES in the shipping price. You only pay for the
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>
                      services you order. Feel free to compare our shipping
                      prices
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>with competitors.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
