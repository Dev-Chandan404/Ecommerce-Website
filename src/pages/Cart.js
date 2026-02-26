import { useSelector, useDispatch } from "react-redux";
import { incrementQty, decrementQty } from "../redux/cartSlice";
import { Link, Outlet } from "react-router-dom";
import "./Cart";

const Cart = () => {
  // Try multiple common locations for cart items so this works with any store shape
  const rawItems = useSelector(
    (state) =>
      state?.cart?.cartItems ??
      state?.handleCart?.cartItems ??
      state?.handleCart ??
      []
  );
  const cartItems = Array.isArray(rawItems) ? rawItems : [];

  const dispatch = useDispatch();

  // --- Helpers: super-safe numeric parsing ---
  const toNumber = (val) => {
    if (val == null) return 0;
    if (typeof val === "number" && !Number.isNaN(val)) return val;

    const str = String(val).trim();
    if (str === "") return 0;

    // Keep digits, dot, comma, minus
    let s = str.replace(/[^\d.,-]/g, "");

    // If both dot and comma exist, treat comma as thousands separator
    if (s.includes(".") && s.includes(",")) {
      s = s.replace(/,/g, "");
    } else if (s.includes(",") && !s.includes(".")) {
      // If only comma exists, treat comma as decimal
      s = s.replace(",", ".");
    }

    // Remove any remaining thousands commas
    s = s.replace(/,/g, "");

    const n = parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
  };

  // Extract qty from many possible keys
  const getQty = (item) => {
    const keys = ["qty", "quantity", "count", "qtyCount", "num", "amount"];
    for (const k of keys) {
      if (item?.[k] != null) return toNumber(item[k]);
    }
    return 0;
  };

  // Extract unit price from many possible keys
  const getUnitPrice = (item) => {
    const keys = [
      "price",
      "rate",
      "unitPrice",
      "sellingPrice",
      "salePrice",
      "mrp",
      "cost",
    ];
    for (const k of keys) {
      if (item?.[k] != null) return toNumber(item[k]);
    }
    return 0;
  };

  // ---- Totals (fully safe) ----
  const { totalQty, subtotal } = cartItems.reduce(
    (acc, item) => {
      const q = getQty(item);
      const p = getUnitPrice(item);
      acc.totalQty += q;
      acc.subtotal += q * p;
      return acc;
    },
    { totalQty: 0, subtotal: 0 }
  );

  const shipping = totalQty > 0 ? 30 : 0; // keep 30; free when cart is empty
  const totalAmount = subtotal + shipping;

  // Uncomment for quick debugging in console:
  // console.table(cartItems);
  // console.log({ totalQty, subtotal, shipping, totalAmount });

  if (cartItems.length === 0) {
    return (
      <>
        <div
          style={{ fontWeight: "500", fontSize: "40px" }}
          className="container-fluid"
        >
          Cart
        </div>
        <hr style={{ width: "90%", margin: "auto" }} />
        <div>
          <div className="cart-div">
            <div className="carttext">Your Cart is Empty</div>
            <div className="shop">
              <Link style={{ textDecoration: "none" }} to="/">
                <div
                  style={{ width: "180px", height: "40px" }}
                  className="btn3"
                >
                  <span style={{ marginRight: "5px" }}>🡸</span>Continue shopping
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          marginBottom: "0",
          fontWeight: "500",
          fontSize: "40px",
          lineHeight: "48px",
        }}
        className="container-fluid"
      >
        Cart
      </div>
      <hr style={{ width: "90%", margin: "auto" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "100%",
          width: "100%",
        }}
        className="container"
      >
        {/* ---------- ITEM LIST ---------- */}
        <div style={{ width: "65%" }} className="item-list">
          <div style={{ borderBottom: "1px solid #D2D2D2" }} className="il">
            Item List
          </div>

          {cartItems.map((item) => {
            const q = getQty(item);
            const price = getUnitPrice(item);
            return (
              <div
                style={{ borderBottom: "none", borderTop: "none" }}
                className="produt-container"
                key={item.id ?? `${item.title}-${Math.random()}`}
              >
                <div style={{ height: "auto" }} className="product-list">
                  <div className="show-product">
                    <div className="sp1">
                      <img
                        className="product-img"
                        src={item.url}
                        alt="Product"
                      />
                    </div>

                    <div className="sp2">
                      <h3 className="sp2t">{item.title}</h3>
                    </div>

                    <div className="sp3">
                      <div className="qwerty">
                        <button
                          className="btn-outline-secondary btn-sm"
                          style={{
                            border: "none",
                            fontSize: "20px",
                            fontWeight: "bold",
                            backgroundColor: "white",
                            float: "left",
                          }}
                          onClick={() => dispatch(decrementQty(item.id))}
                        >
                          −
                        </button>
                        <span style={{ margin: "0 10px", color: "black" }}>
                          {q}
                        </span>
                        <button
                          className="btn-outline-secondary btn-sm"
                          style={{
                            border: "none",
                            fontSize: "20px",
                            fontWeight: "bold",
                            backgroundColor: "white",
                            float: "right",
                          }}
                          onClick={() => dispatch(incrementQty(item.id))}
                        >
                          +
                        </button>
                      </div>

                      <p className="text-start text-md-center mt-2">
                        <strong style={{ color: "black" }}>
                          {q} x ₹{price.toFixed(2)}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <hr style={{ width: "90%", margin: "auto", color: "gray" }} />
              </div>
            );
          })}
        </div>

        {/* ---------- ORDER SUMMARY ---------- */}
        <div style={{ borderRadius: "8px 8px" }} className="order-summery">
          <div
            style={{
              width: "90%",
              borderBottom: "1px solid #D2D2D2",
              height: "280px",
              marginLeft: "20px",
            }}
            className="item-list"
          >
            <div style={{ borderBottom: "1px solid #D2D2D2" }} className="il">
              Order Summary
            </div>

            <div style={{ marginTop: "10px" }} className="os">
              <div
                className="os1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margintop: "20px",
                }}
              >
                <span style={{ color: "black", marginLeft: "10px" }}>
                  Products ({totalQty})
                </span>
                <span style={{ color: "black", marginRight: "10px" }}>
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              <div
                className="os1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{ color: "black", marginLeft: "10px" }}>
                  Shipping:
                </span>
                <span style={{ color: "black", marginRight: "10px" }}>
                  ₹{shipping.toFixed(2)}
                </span>
              </div>

              <hr style={{ color: "#D2D2D2", width: "90%" }} />
            </div>

            <div className="os">
              <div
                className="os1"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "black", marginLeft: "10px" }}>
                  Total Amount:
                </span>
                <span style={{ color: "black", marginRight: "10px" }}>
                  ₹{totalAmount.toFixed(2)}
                </span>
              </div>

              <div
                className="os2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "20px",
                }}
              >
                <Link
                  className="os2"
                  to="/"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    textAlign: "center",
                    alignContent: "center",
                    display: "flex",
                    margin: "10px auto",
                  }}
                >
                  Go To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Cart;
