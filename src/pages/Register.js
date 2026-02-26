const Register = () => {
  return (
    <>
      <div className="container-fluid">
        Register
      </div>
      <div className="cp">
        <label>Full Name</label><br></br>
        <input type="text" placeholder="Enter your name" className="ip" />
        <label>Emain</label><br></br>
        <input type="text" placeholder="Enter your name" className="ip" />
        <label>Password</label>
        <input type="text" placeholder="Enter your email" className="ip" />
        <div className="b2">
          <button className="b3">Register</button>
        </div>
      </div>
    </>
  );
};

export default Register;