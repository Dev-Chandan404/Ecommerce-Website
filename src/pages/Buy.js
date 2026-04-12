import { useLocation, useNavigate, Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import img11 from "../assets/images/11.jpg";
import img12 from "../assets/images/12.jpg";
import img13 from "../assets/images/13.jpg";
import img14 from "../assets/images/14.jpg";
import img15 from "../assets/images/15.jpg";
import img16 from "../assets/images/16.jpg";
import img17 from "../assets/images/17.jpg";
import img18 from "../assets/images/18.jpg";
import img19 from "../assets/images/19.jpg";
import img20 from "../assets/images/20.jpg";

const filteredItems = [
  // ... (your existing filteredItems array, unchanged)
  {
    id: 1,
    title: "Fjallraven -...",
    rate: "$ 109.95",
    url: img1,
    category: "Men's Clothing",
    count: "3.9",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  },
  // ... all items remain exactly as in your original code
  // (keep the full array to avoid repetition)
];

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = location.state && location.state.item;

  const handleBuyNow = (item) => {
    navigate("/buy", { state: { item } });
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`Added to cart`, {
      className: "my-toast",
      bodyClassName: "my-toast-body",
      progressClassName: "my-toast-progress",
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: false,
    });
  };

  if (!product) {
    return <h2 className="cart-empty">No product data found.</h2>;
  }

  return (
    <>
      {/* Main product container with responsive margin-top */}
      <div className="product-container buy-page-container">
        <div className="product-image">
          <img
            src={product.url}
            alt={product.title}
            className="product-img-responsive"
          />
        </div>

        <div className="product-details">
          <div className="product-title">{product.category}</div>
          <div className="product-category">{product.title}</div>
          <div className="product-rating">
            {product.count}
            <span className="star-icon">★</span>
          </div>
          <div className="product-price">{product.rate}</div>
          <div className="product-info">{product.description}</div>

          {/* Button group - responsive wrapping */}
          <div className="buy-action-buttons">
            <button className="btn5" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <Link to="/cart" className="btn4 go-to-cart-btn">
              Go To Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Related products slider - responsive */}
      <div className="related-products-section">
        <div className="d1">
          <div className="d2">
            <div className="slide-track">
              {filteredItems.map((item) => (
                <div className="slide" key={item.id}>
                  <img src={item.url} alt={item.title} loading="lazy" />
                  <div className="t3">{item.title}</div>
                  <div className="btndiv slider-buttons">
                    <button className="btn4" onClick={() => handleBuyNow(item)}>
                      Buy Now
                    </button>
                    <button
                      className="btn4"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Buy;