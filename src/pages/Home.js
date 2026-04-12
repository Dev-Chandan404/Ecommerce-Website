import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const movielist = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    rate: "$ 109.95",
    url: img1,
    category: "Men's Clothing",
    count: "3.9",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    rate: "$ 22.3",
    url: img2,
    category: "Men's Clothing",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    rate: "$ 55.99",
    url: img3,
    category: "Men's Clothing",
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    rate: "$ 15.99",
    url: img4,
    category: "Men's Clothing",

    description:
      "The color could be slightly different between on the screen and in practice. / Please note...",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    rate: "$ 695",
    url: img5,
    category: "Jewelery",

    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that prote...",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    rate: "$ 168",
    url: img6,
    category: "Jewelery",

    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by ...",
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    rate: "$ 9.99",
    url: img7,
    category: "Jewelery",

    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil ...",
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    rate: "$ 10.99",
    url: img8,
    category: "Jewelery",

    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel...",
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    rate: "$ 64",
    url: img9,
    category: "Electronics",

    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    rate: "$ 109",
    url: img10,
    category: "Electronics",

    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5...",
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    rate: "$ 109",
    url: img11,
    category: "Electronics",

    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that ...",
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    rate: "$ 114",
    url: img12,
    category: "Electronics",

    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with hi...",
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    rate: "$ 599",
    url: img13,
    category: "Electronics",

    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology....",
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    rate: "$ 999.99",
    url: img14,
    category: "Electronics",

    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side Q...",
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    rate: "$ 56.99",
    url: img15,
    category: "Women's Clothing",
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100%...",
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    rate: "$ 29.95",
    url: img16,
    category: "Women's Clothing",
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux l...",
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    rate: "$ 39.99",
    url: img17,
    category: "Women's Clothing",
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstrin...",
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    rate: "$ 9.85",
    url: img18,
    category: "Women's Clothing",
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with grea...",
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    rate: "$ 7.95",
    url: img19,
    category: "Women's Clothing",
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...",
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    rate: "$ 12.99",
    url: img20,
    category: "Women's Clothing",
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The...",
  },
];

const Home = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredItems =
    filter === "All"
      ? movielist
      : movielist.filter((item) => item.category === filter);

  const handleBuyNow = (item) => {
    navigate("/buy", { state: { item } });
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`Added to cart`, {
      className: "my-toast", // outer toast container
      bodyClassName: "my-toast-body", // text inside
      progressClassName: "my-toast-progress",
      position: "top-center",
      autoClose: 2000,
      pauseOnHover: false,
    });
  };

  return (
    <>
      <div className="imgbox">
        <div className="imgtxt">
          <div className="t">New Season Arrivals</div>
          <div className="t2">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </div>
        </div>
      </div>
      <div style={{ margin: "0" }} className="container-fluid">
        Latest Products
      </div>
      <hr style={{ width: "90%", margin: "auto" }}></hr>
      <div className="box2">
        <input
          type="button"
          value="All"
          onClick={() => setFilter("All")}
                className="btn btn-outline-dark mx-2  d-flex justify-content-center align-items-center gap-2 w-auto"
        />
        <input
          type="button"
          value="Men's Clothing"
          onClick={() => setFilter("Men's Clothing")}
                          className="btn btn-outline-dark mx-2  d-flex justify-content-center align-items-center gap-2 w-auto"

        />
        <input
          type="button"
          value="Women's Clothing"
          onClick={() => setFilter("Women's Clothing")}
                          className="btn btn-outline-dark mx-2  d-flex justify-content-center align-items-center gap-2 w-auto"

        />
        <input
          type="button"
          value="Jewelery"
          onClick={() => setFilter("Jewelery")}
                          className="btn btn-outline-dark mx-2  d-flex justify-content-center align-items-center gap-2 w-auto"

        />
        <input
          type="button"
          value="Electronics"
          onClick={() => setFilter("Electronics")}
                          className="btn btn-outline-dark mx-2  d-flex justify-content-center align-items-center gap-2 w-auto"

        />
      </div>

      <div className="card-container">
        <div className="product-list"></div>
        {filteredItems.map((item) => (
          <div className="card" key={item.id}>
            <img
              style={{ margin: "10px auto" }}
              src={item.url}
              className="iiiii"
            />
            <div className="t3">
              {item.title.split(" ").slice(0, 2).join(" ")}...
            </div>
            <div className="description">{item.description.split(" ").slice(0, 18).join(" ")}...</div>
            <div className="price">{item.rate}</div>
            <div className="btndiv">
              <button className="btn4" onClick={() => handleBuyNow(item)}>
                Buy Now
              </button>

              <button className="btn4" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
