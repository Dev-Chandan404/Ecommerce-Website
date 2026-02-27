const About = () => {
  return (
    <>
      <div style={{ height: "90px" }}>
        <div
          className="container-fluid"
          style={{
            fontWeight: "500",
            fontSize: "40px",
            lineHeight: "48px",
            height: "115px",
            marginTop: "0",
          }}
        >
          About Us
        </div>
      </div>
      <hr style={{ width: "85%", margin: "auto", maginTop: "20px" }}></hr>

      <div className="ad">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere
        doloremque veritatis odit similique sequi. Odit amet fuga nam
        <br />
        quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
        totam vero quas provident ipsam, veritatis nostrum velit quos
        <br />
        recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
        earum unde eligendi autem praesentium, doloremque distinctio
        <br />
        nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus
        exercitationem tempora molestias. Ad consequuntur veniam
        <br />
        sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam
        corporis est, quo saepe dolorem optio minus sint nemo totam
        <br /> dolorum! Reprehenderit delectus expedita a alias nam recusandae
        illo debitis repellat libero, quasi explicabo molestiae saepe,
        <br /> dolorem tempore itaque eveniet quam dignissimos blanditiis
        excepturi harum numquam vel nihil? Ipsum
      </div>
      <div
        className="container-fluid"
        style={{ fontWeight: "500", fontSize: "32px", margin: "10px auto" }}
      >
        Our Products
      </div>
      <div className="acd">
        <div className="cd">
          <div className="cd1">
            <img src={require("../assets/images/A1.jpeg")} className="img" />
          </div>
          <div className="cd2">Mens's Clothing</div>
        </div>
        <div className="cd">
          <div className="cd1">
            <img src={require("../assets/images/A2.jpeg")} className="img" />
          </div>
          <div className="cd2">Women's Clothing</div>
        </div>
        <div className="cd">
          <div className="cd1">
            <img src={require("../assets/images/A3.webp")} className="img" />
          </div>
          <div className="cd2">Jewelery</div>
        </div>
        <div className="cd">
          <div className="cd1">
            <img src={require("../assets/images/A4.jpeg")} className="img" />
          </div>
          <div className="cd2">Electronics</div>
        </div>
      </div>
    </>
  );
};

export default About;
