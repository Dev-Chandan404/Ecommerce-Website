import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const movielist = [
  {
    id: 1,
    title: "Fjallraven -...",
    rate: "$ 109.95",
    url: "./1.jpg",
    category: "Men's Clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  },
  {
    id: 2,
    title: "Mens Casual ...",
    rate: "$ 22.3",
    url: "./2.jpg",
    category: "Men's Clothing",

    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable...",
  },
  {
    id: 3,
    title: "Mens Cotton ...",
    rate: "$ 55.99",
    url: "./3.jpg",
    category: "Men's Clothing",

    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping...",
  },
  {
    id: 4,
    title: "Mens Casual ...",
    rate: "$ 15.99",
    url: "./4.jpg",
    category: "Men's Clothing",

    description:
      "The color could be slightly different between on the screen and in practice. / Please note...",
  },
  {
    id: 5,
    title: "John Hardy W...",
    rate: "$ 695",
    url: "./5.jpg",
    category: "Jewelery",

    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that prote...",
  },
  {
    id: 6,
    title: "Solid Gold P...",
    rate: "$ 168",
    url: "./6.jpg",
    category: "Jewelery",

    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by ...",
  },
  {
    id: 7,
    title: "White Gold P...",
    rate: "$ 9.99",
    url: "./7.jpg",
    category: "Jewelery",

    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil ...",
  },
  {
    id: 8,
    title: "Pierced Owl ...",
    rate: "$ 10.99",
    url: "./8.jpg",
    category: "Jewelery",

    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel...",
  },
  {
    id: 9,
    title: "WD 2TB Eleme...",
    rate: "$ 64",
    url: "./9.jpg",
    category: "Electronics",

    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
  },
  {
    id: 10,
    title: "SanDisk SSD ...",
    rate: "$ 109",
    url: "./10.jpg",
    category: "Electronics",

    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5...",
  },
  {
    id: 11,
    title: "Silicon Powe...",
    rate: "$ 109",
    url: "./11.jpg",
    category: "Electronics",

    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that ...",
  },
  {
    id: 12,
    title: "WD 4TB Gamin...",
    rate: "$ 114",
    url: "./12.jpg",
    category: "Electronics",

    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with hi...",
  },
  {
    id: 13,
    title: "Acer SB220Q ...",
    rate: "$ 599",
    url: "./13.jpg",
    category: "Electronics",

    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology....",
  },
  {
    id: 14,
    title: "Samsung 49-I...",
    rate: "$ 999.99",
    url: "./14.jpg",
    category: "Electronics",

    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side Q...",
  },
  {
    id: 15,
    title: "BIYLACLESEN ...",
    rate: "$ 56.99",
    url: "./15.jpg",
    category: "Women's Clothing",

    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100%...",
  },
  {
    id: 16,
    title: "Lock and Lov...",
    rate: "$ 29.95",
    url: "./16.jpg",
    category: "Women's Clothing",

    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux l...",
  },
  {
    id: 17,
    title: "Rain Jacket ...",
    rate: "$ 39.99",
    url: "./17.jpg",
    category: "Women's Clothing",

    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstrin...",
  },
  {
    id: 18,
    title: "MBJ Women's ...",
    rate: "$ 9.85",
    url: "./18.jpg",
    category: "Women's Clothing",

    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with grea...",
  },
  {
    id: 19,
    title: "Opna Women's...",
    rate: "$ 7.95",
    url: "./19.jpg",
    category: "Women's Clothing",

    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...",
  },
  {
    id: 20,
    title: "DANVOUY Wome...",
    rate: "$ 12.99",
    url: "./20.jpg",
    category: "Women's Clothing",

    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The...",
  },
];

const Products = () => {
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
      <div className="container-fluid">Latest Products</div>
      <hr style={{ width: "90%", margin: "auto" }}></hr>
      <div className="box2">
        <input
          type="button"
          value="All"
          onClick={() => setFilter("All")}
          className="b1"
        />
        <input
          type="button"
          value="Men's Clothing"
          onClick={() => setFilter("Men's Clothing")}
          className="b1"
        />
        <input
          type="button"
          value="Women's Clothing"
          onClick={() => setFilter("Women's Clothing")}
          className="b1"
        />
        <input
          type="button"
          value="Jewelery"
          onClick={() => setFilter("Jewelery")}
          className="b1"
        />
        <input
          type="button"
          value="Electronics"
          onClick={() => setFilter("Electronics")}
          className="b1"
        />
      </div>
      <div className="card-container">
        {filteredItems.map((item) => (
          <div className="card" key={item.id}>
            <img
              style={{ margin: "10px auto" }}
              className="iiiii"
              src={item.url}
              alt={item.description}
            />
            <div className="t3">{item.title}</div>
            <div className="description">{item.description}</div>
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

export default Products;
