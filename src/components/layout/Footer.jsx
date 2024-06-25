import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              Made with ❤️ by{" "}
              <a
                href="https://lookme.vercel.app"
                className="text-decoration-underline text-dark fs-5"
                target="_blank"
                rel="noreferrer"
              >
                LK
              </a>
            </p>
            <p>© 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
