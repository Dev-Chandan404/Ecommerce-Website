const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        Contact Us
      </div>
      <hr style={{ width: "90%", margin: "auto" }}></hr>
      <div className="cp">
        <label>Name</label><br></br>
        <input type="text" placeholder="Enter your name" className="ip" />
        <label>Email</label>
        <input type="text" placeholder="Enter your email" className="ip" />
        <lable>Message</lable>
        <textarea placeholder="Enter your message" className="ip" style={{ fontSize: "18px", height: "100px" }}></textarea>
        <div className="b2">
          <button className="b3">Send</button>
        </div>
      </div>
    </>
  );
};

export default Contact;