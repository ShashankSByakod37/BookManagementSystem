import { useContext, useEffect } from "react";
import BookStoreContext from "../context/BookStoreContext";

const Header = () => {
  const { text, user,addUser,addText } = useContext(BookStoreContext);

  

//   const add = () =>{
//     const obj = {
//         id: 2,
//         username: "user2",
//         password: "pass2",
//       }

//       addUser(obj);
//     addText();
//     //   console.log(user);

//   };

//   useEffect(
//       ()=>{
//         console.log(text)
//         console.log(user)
//       }
//   )

  return (
    <div>
        
        <button > Login Successful</button>
    </div>
  );
};

export default Header;
