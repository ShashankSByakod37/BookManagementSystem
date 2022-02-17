import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookStoreContext from "../../../context/BookStoreContext";

export const Login = ({ handleClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const styling = {
    width: "45%",
    margin: "-5%  27.5% 0% 27.5%",
    backgroundColor: "transparent",
    padding: "10%",
    border: "15px solid transparent",
    borderRadius: "5%",
  };
  const navigate = useNavigate();
  const { changeIsLogged, changeStatus, isAdmin } =
    useContext(BookStoreContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      setError("");
      const response = await fetch(
        "http://localhost:5000/users?_sort=id&_order=desc"
      );

      const data = await response.json();

      console.log(data);
      let flag = false;
      data.map((ele) => {
        if (ele.username == username && ele.password == password) {
          // if (ele.isAdmin !== isAdmin) {
          //   changeStatus();
          // }

          console.log("Login Successful");
          const data = {
            username: ele.username,
            id: ele.id,
            password: ele.password,
          };
          
          const uname = ele.username;
          const uid = ele.id;

          localStorage.setItem("username", uname);
          localStorage.setItem("id", uid);
          console.log("admin status",ele.isAdmin);
          localStorage.setItem("isAdmin", ele.isAdmin);
          setAdmin(ele.isAdmin);
          console.log("admin status",ele.isAdmin);

          localStorage.setItem("user", JSON.stringify(data));
          setUsername("");
          setPassword("");
          flag = true;
          // return;
          changeIsLogged(true);
          // navigate("/home");
        } else if (ele.username === username && ele.password !== password) {
          setError("password incorrect");
          console.log("pass incorrect");
          console.log(flag);
        } else {
          setError("username not found");
          console.log("username not found");
          console.log(flag);
        }
      });
    }
  };

  return (
    <div className="container" style={styling}>
      <h2 className="fw-bold mb-2 text-uppercase">Login </h2>
      <div className="text-center">
        Never had an account?
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "transparent",

            backgroundRepeat: "no-repeat",
            border: "none",
            cursor: "pointer",
            overflow: "hidden",
            outline: "none",
            color:"yellow"
          }}
        ><b>
          Sign up
          </b></button>
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
            className="form-control form-control-lg"
            placeholder="Username"
            value={username}
            autoComplete="username"
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
            className="form-control form-control-lg"
            placeholder="Password"
            autoComplete="current-password"
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
