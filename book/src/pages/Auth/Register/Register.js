import {useState} from "react";
import {Link,BrowserRouter as Router} from "react-router-dom";

export const Register = ({handleClick}) => {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirmpassword,setConfirmpassword] = useState("");
  const[address,setAddress] = useState("");
  const[error,setError] = useState("");
  const[success,setSuccess] = useState("");
  const[isAdmin,setIsAdmin] = useState(false);

  
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(firstName === "" || lastName === "" || username === "" || email === "" || password === "" || address === ""){
      setError("Please fill all the fields");

    }
    else{
      if(password !== confirmpassword){
        setError("Password and Confirm Password must be same");
      }
      else{
        setError("");
        const obj = {
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          password: password,
          address: address,
          isAdmin: isAdmin
        }

        console.log(obj); 

        setFirstName("");
        setLastName("");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmpassword("");
        setAddress("");
      

        // fetch('http://localhost
        const resp = await fetch("http://localhost:5000/users",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)

        }).then(()=>setSuccess("Login Successful"));
        

        // const data = await resp.json();

        // console.log(data);
        

        setTimeout(()=>{

          handleClick()},5000);
        // ≈;

    }
  
  }
}

  const styling = {
    width: "50%",
    margin: "0%  25% 0% 25%",
    backgroundColor: "transparent",
    padding: "5%",
    border: "15px solid transparent",
    borderRadius: "5%",
  };

  return (
    <div className="container" style={styling}>
      
      
      <h2 className="fw-bold mb-2 text-uppercase">Register your Account</h2>
      <div className="text-center">Already have an account? 
      <button onClick = { handleClick } style={{
            backgroundColor: "transparent",

            backgroundRepeat: "no-repeat",
            border: "none",
            cursor: "pointer",
            overflow: "hidden",
            outline: "none",
            color:"yellow"
          }}> <b>Sign in</b></button>
      </div>
      <div className="text-white-50 mb-5">
        <b>Please fill up the Registration form below </b>
        <p>{error}</p>
      </div>
      <form method="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            {/* first name */}
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              // aria-describedby="emailHelp"
              placeholder="First Name"
              name="firstName"
              autoComplete="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              
            />
            {/* {console.log(firstName)} */}
          </div>
          <div className="form-group col-md-6">
            {/* last name */}
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputPassword1"
              placeholder="Last Name"
              autoComplete="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              
            />
            {/* {console.log(lastName)} */}
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="form-group col-md-6">
            {/* username */}
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange = {(e) => setUsername(e.target.value)}
              
            />
            {/* {console.log(username)} */}
          </div>
          <div className="form-group col-md-6">
            {/* email */}
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputPassword1"
              placeholder="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              
            />
            {/* {console.log(email)} */}
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="form-group col-md-6">
            {/* add password */}
            <input
              type="password"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add Password"
              name="password"
              value={password}
              onChange = {(e) => setPassword(e.target.value)}
              
            />
            {/* {console.log(password)} */}
          </div>
          <div className="form-outline form-white mb-4 col-md-6">
            {/* email */}
            <input
              type="password"
              className="form-control form-control-lg"
              id="exampleInputPassword1"
              placeholder=" Confirm Password"
              name="confirmpassword"
              value = {confirmpassword}

              onChange = {(e) => setConfirmpassword(e.target.value)}
            />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="form-group col-md-12">
            {/* username */}
            <div className="form-group">
              <textarea
                className="form-control form-control-lg"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your Address"
                name = "address"
                value={address} 
                onChange = {(e) => setAddress(e.target.value)}
                
              ></textarea>
              {/* {console.log(address)} */}
            </div>
          </div>
        </div>
        <br/>
        <button className="btn btn-outline-light btn-block btn-lg px-5" type="submit">Register</button>
      </form>
        <div className="display-2" style = {{margin:"10%"}}>{success}</div>
    </div>
  );
};
