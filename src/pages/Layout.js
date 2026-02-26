import Footer from "./Footer";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Layout = () => {
  const cartItems = useSelector((state) => {
    const candidates = [
      state?.cart?.cartItems,
      state?.cart?.items,
      state?.handleCart?.cartItems,
      state?.handleCart?.items,
      state?.handleCart,
      state?.cart,
    ];
    const found = candidates.find((v) => Array.isArray(v));
    return Array.isArray(found) ? found : [];
  });

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toNumber = (val) => {
    if (val == null) return 0;
    if (typeof val === "number" && !Number.isNaN(val)) return val;
    let s = String(val).trim();
    if (!s) return 0;
    s = s.replace(/[^\d.,-]/g, "");
    if (s.includes(".") && s.includes(",")) s = s.replace(/,/g, "");
    else if (s.includes(",") && !s.includes(".")) s = s.replace(",", ".");
    s = s.replace(/,/g, "");
    const n = parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
  };

  const getQty = (item) => {
    const keys = ["qty", "quantity", "count", "amount", "qtyCount", "num"];
    for (const k of keys) {
      if (item?.[k] != null) return toNumber(item[k]);
    }
    return 0;
  };

  const totalQty = cartItems.reduce((sum, item) => sum + getQty(item), 0);
  const uniqueCount = cartItems.length;

  const badgeCount = totalQty || uniqueCount;

  const btnStyle = { height: "36px", fontSize: "16px", width: "auto" };

  useEffect(() => {
    const el = document.getElementById("navbarSupportedContent");
    const handleShow = () => setIsNavbarOpen(true);
    const handleHide = () => setIsNavbarOpen(false);
    el?.addEventListener("show.bs.collapse", handleShow);
    el?.addEventListener("hide.bs.collapse", handleHide);
    return () => {
      el?.removeEventListener("show.bs.collapse", handleShow);
      el?.removeEventListener("hide.bs.collapse", handleHide);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 sticky-top">
        <div
          style={{
            height: isNavbarOpen ? "auto" : "66px",
            minHeight: "100%",
            margin: "auto",
            transition: "height 0.3s ease",
          }}
          className="container"
        >
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
            React Ecommerce
          </NavLink>

          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons d-flex flex-lg-row justify-content-center text-align-center">
              <NavLink
                style={btnStyle}
                to="/login"
                className="btn btn-outline-dark mx-2 mb-2 mb-lg-0 d-flex justify-content-center align-items-center gap-2"
              >
                <i
                  style={{ fontSize: "16px" }}
                  className="fa fa-sign-in-alt me-0"
                ></i>
                Login
              </NavLink>

              <NavLink
                style={btnStyle}
                to="/register"
                className="btn btn-outline-dark mx-2 mb-2 mb-lg-0 d-flex justify-content-center align-items-center gap-2"
              >
                <i
                  style={{ fontSize: "14px" }}
                  className="fa fa-user-plus mr-1"
                ></i>
                Register
              </NavLink>

              <NavLink
                style={btnStyle}
                to="/cart"
                className="btn btn-outline-dark mx-1 mb-2 mb-lg-0 d-flex justify-content-center align-items-center gap-2"
              >
                <i
                  style={{ fontSize: "14px" }}
                  className="fa fa-cart-shopping"
                ></i>
                Cart
                <span style={{ color: "black" }}>({badgeCount})</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* If you aren't using styled-jsx, move this CSS to a global CSS file */}
      <style jsx>{`
        .navbar-collapse {
          transition: all 0.3s ease-in-out;
        }
        .navbar-collapse.collapsing {
          transition: height 0.3s ease;
        }
        @media (max-width: 991.98px) {
          .navbar-collapse.show {
            padding-bottom: 1rem;
          }
          .buttons {
            width: auto;
            align-items-start;
            margin-top: 1rem;
          }
        }
      `}</style>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
