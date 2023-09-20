import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import pay from "../assets/images/pay/pay.png";
// import { ShopContext } from "../components/shopcontext";

const checkout = () => {
  return (
    <>
      <section className="checkout p-5">
        <div className="container-sm ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 p-2">
              <h1 className=" mt-3 mb-3 fs-3">
                Fill the following details for shipping.
              </h1>
              <form className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="fName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fName"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lName"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Contact No.
                  </label>
                  <input
                    type="phone"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputState"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    required
                  />
                </div>
                <div className="col-12 mt-5">
                  <Link
                    to="/payments"
                    className="btn btn-primary"
                    id="button-link"
                  >
                    Proceed to Pay
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default checkout;
