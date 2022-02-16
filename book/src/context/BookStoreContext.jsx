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


  const addUser = (u) =>{
      setUser([...user,u])
    //   console.log(user)
  }

  return (
    <BookStoreContext.Provider value={{  user,addUser, }}>
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreContext;
