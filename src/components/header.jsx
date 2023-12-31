import React, { useContext, useState } from "react";
import { ShopContext } from "../components/shopcontext";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/supermart.png";
import { useAuth0 } from "@auth0/auth0-react";

const header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartProducts } = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <header className="navbar-top p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between d-none d-md-flex">
              <div className="col-md-8 me-auto">
                <p>The trending outfits at 100% off</p>
              </div>
              <div className="col-md-2">
                <a href="tel:+254708118414">Call us at +91 (951) 766-8449</a>
              </div>
              <div className="col-md">
                <Link className="links fs-4">
                  <CiMail />
                </Link>
                <Link className="links fs-4">
                  <BiPhoneCall />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center  justify-content-between d-md-none">
              <div className="col-md-6 me-auto">
                <p>Save Upto 100%</p>
              </div>
              <div className="col-md-2 m-auto">
                <a href="tel:+254708118414">Call us</a>
              </div>
              <div className="col-md-2 m-auto">
                <Link className="links fs-4">
                  <CiMail />
                </Link>
                <Link className="links fs-4">
                  <BiPhoneCall />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="navbar-middle sticky-top p-2 p-md-2 p-lg-2">
        <div className="container-xxl">
          <div className="row align-items-center m-0">
            <div className="col-md-2 d-flex justify-content-center">
              <button type="button" onClick={toggleMenu}>
                <span className="navbar-toggler-icon d-md-none">
                  {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </button>

              <Link to="/">
                <img src={logo} alt="logo" className="img-fluid logo" />
              </Link>

              <button className="cart-span fs-3 d-md-none">
                <Link
                  to="cart"
                  className={
                    location.pathname === "/cart" ? "active" : "not-active"
                  }
                >
                  <CgShoppingCart />
                  <b>
                    <span>{totalProducts}</span>
                  </b>
                </Link>
              </button>
            </div>

            <div className="col-md-10 row col-lg-10">
              <div className="col-md-6 m-auto">
                <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/"
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : "not-active"
                      }`}
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/shop"
                      className={`nav-link ${
                        location.pathname === "/shop" ? "active" : "not-active"
                      }`}
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/blog"
                      className={`nav-link ${
                        location.pathname === "/blog" ? "active" : "not-active"
                      }`}
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/about"
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : "not-active"
                      }`}
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  {isAuthenticated && (
                    <div className="ms-auto gap-2 d-flex align-items-center">
                      <div className="ms-3">
                        <img
                          src={user.picture}
                          alt={user.name}
                          className="rounded-circle"
                          style={{ width: "30px", height: "30px" }}
                        />
                      </div>
                      <div className="ms-2">
                        <h3 style={{ fontSize: "16px" }}>{user.name}</h3>
                      </div>
                    </div>
                  )}
                  {isAuthenticated ? (
                    <div className="ms-2">
                      <button
                        className="btn btn-danger btn-sm"
                        style={{ width: "80px", height: "35px" }}
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <div className="ms-auto gap-3">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => loginWithRedirect()}
                      >
                        Log In
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
                    <div
                      className={`nav-link ${
                        location.pathname === "cart" ? "active" : "not-active"
                      }`}
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/cart"
                        className="d-flex align-items-center color-nav me-3 cart-span-one"
                      >
                        <CgShoppingCart className="me-1 fs-2" />
                        <div>
                          <p>
                            <b>
                              <span>{totalProducts}</span>
                            </b>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="menu-links mt-2">
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      to="/"
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      to="/shop"
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      to="/blog"
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      to="/about"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                </div>
                {isAuthenticated && (
                  <div className="ms-auto gap-3 d-flex align-items-center">
                    <div className="ms-2">
                      <h3 style={{ fontSize: "16px" }}>{user.name}</h3>
                    </div>
                  </div>
                )}
                {isAuthenticated ? (
                  <div className="ms-auto gap-3">
                    <button
                      className="btn btn-danger btn-sm"
                      style={{
                        width: "60px",
                        height: "25px",
                        fontSize: "12px",
                      }}
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="ms-auto gap-3">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => loginWithRedirect()}
                    >
                      Log In
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
