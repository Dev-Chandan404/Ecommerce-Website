const Login = () => {
  return (
    <>
      <div className="container-fluid">
        Login
      </div>
      <div className="cp">
        <label>Emain</label><br></br>
        <input type="text" placeholder="Enter your name" className="ip" />
        <label>Password</label>
        <input type="text" placeholder="Enter your email" className="ip" />
        <lable>New Here?<a href="">Register</a></lable>
        <div className="b2">
          <button className="b3">Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;