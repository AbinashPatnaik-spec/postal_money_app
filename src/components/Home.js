import React from "react";
import slide01 from "./01.png";
import slide02 from "./02.png";
import slide03 from "./03.png";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide01} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={slide02} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <img src={slide03} className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card border-danger" style={{ width: "30rem" }}>
              <div className="card-header text-bg-danger">
                <h5>
                  <i className="bi bi-bank2"></i> Most Accessible Bank
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">- Banking at your fingertips</p>
                <p className="card-text">- Go digital with IPPB</p>
                <p className="card-text">- Doorstep Banking</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-danger" style={{ width: "30rem" }}>
              <div className="card-header text-bg-danger">
                <h5>
                  <i className="bi bi-link-45deg"></i> Link to POSA
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">- Link POSA-IPPB Account</p>
                <p className="card-text">- Seamless Sweep-In / Out</p>
                <p className="card-text">- Easy Account Management</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <div className="card border-danger" style={{ width: "30rem" }}>
              <div className="card-header text-bg-danger">
                <h5>
                  <i className="bi bi-qr-code"></i> Advance Payment Modes
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">- QR Card based payments</p>
                <p className="card-text">- Authorize, Transact, Show Balance</p>
                <p className="card-text">- Hassle Free Payments</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-danger" style={{ width: "30rem" }}>
              <div className="card-header text-bg-danger">
                <h5>
                  <i className="bi bi-person-fill"></i> Ease of Banking
                </h5>
              </div>
              <div className="card-body">
                <p className="card-text">- Self Onboarding</p>
                <p className="card-text">- Paperless Banking</p>
                <p className="card-text">- Zero initial Deposit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card border-danger">
              <h4 className="card-header text-bg-danger text-center">
                Reach Us
              </h4>
              <div className="card-body">
                <h5 className="card-title">
                  To Open a new account or know more about our Product and
                  Services:
                </h5>
                <p className="card-text">
                  <i className="bi bi-telephone"></i> Call us
                  155299/033-22029000
                </p>
                <p className="card-text">
                  <i class="bi bi-envelope-at"></i> Email to us at
                  contact@ippbonline.in
                </p>
                <p className="card-text">
                  <i class="bi bi-buildings"></i> Visit your nearest Branch /
                  Access Point
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}
