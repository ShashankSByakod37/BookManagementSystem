import React, { useState } from "react";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";

export const UserAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleClick = () => {
      setIsLogin(!isLogin)
  }

  return (
    <div className="text-center">
        {isLogin ? 
            <Login handleClick={handleClick}/> : <Register handleClick={handleClick}/>}
        </div>
  );
};
