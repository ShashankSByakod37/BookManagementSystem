import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = ({handleClick}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const styling = {
    width: "45%",
    margin: "0%  27.5% 0% 27.5%",
    backgroundColor: "transparent",
    padding: "10%",
    border: "15px solid transparent",
    borderRadius: "5%",
  };

  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      setError("");
      const response = await fetch("http://localhost:5000/users?_sort=id&_order=desc");

      const data = await response.json();

      console.log(data)
        let flag = false;
      data.map((ele) => {


          if(ele.username == username && ele.password == password ){
            console.log("Login Successful");

            setUsername("");
            setPassword("");
            flag = true;
            // return;
            navigate("/home");
            
          }
          else if(ele.username === username && ele.password !== password){
              setError("password incorrect");
              console.log("pass incorrect");
              console.log(flag);
          }
          else{
              setError("username not found");
              console.log("username not found");
              console.log(flag);
          }
      })
    }
  };

  return (
    <div className="container" style={styling}>
      <h2 className="fw-bold mb-2 text-uppercase">Login </h2>
      <div className="text-center">Never had an account? 
      <button onClick = { handleClick }> Sign up</button>
      </div>
      <p className="text-white-50 mb-5">
        <b>Please provide your username and password below </b>
        <br />
        <b>{error}</b>
      </p>

      {/* <label htmlFor="username" style = {{textAlign : "left"}}>Username</label> */}
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form-outline form-white mb-4">
          <input
            type="text"
            id="typeEmailX"
            class="form-control form-control-lg"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        {/* <label for="password" style = {{textAlign : "left"}}>Password</label> */}
        <br />
        <div className="form-outline form-white mb-4">
          <input
            type="password"
            id="typePasswordX"
            class="form-control form-control-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />

        <button
          className="btn btn-outline-light btn-block btn-lg px-5"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
