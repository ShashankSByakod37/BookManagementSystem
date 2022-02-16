import { createContext, useEffect, useState } from "react";

const BookStoreContext = createContext();

export const BookStoreProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
        firstName: "firstName",
        lastName: "lastName",
        username: "username",
        email: "usr@email.com",
        password: "password",
        address: " sds vvvvdvd "

    },
  ]);

  const[isAdmin,setIsAdmin] = useState(false);

  const [isLogged,setIsLogged] = useState(false);



  

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      // setUser(JSON.parse(user));
      setIsLogged(true);
      
    }
  },[])

  const changeIsLogged = (value) => {
    setIsLogged(value);
  }
  const addUser = (u) =>{
      setUser([...user,u])
    //   console.log(user)
  }

  const logout = () => {
    localStorage.removeItem("user");
    // setUser([]);
    setIsLogged(false);
  }

  const changeStatus = () => {
    setIsAdmin(!isAdmin);
  }

  
  
  return (
    <BookStoreContext.Provider value={{ changeStatus,logout, user,addUser,isAdmin,setIsAdmin, isLogged,changeIsLogged}}>
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreContext;
