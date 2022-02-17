import { createContext, useEffect, useState } from "react";

const BookStoreContext = createContext();

export const BookStoreProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 0,
    username: "",
  });

  const [buyItem, setBuyItem] = useState([]);

  const [book, setBook] = useState([]);


  const [isAdmin, setIsAdmin] = useState(0);

  const [isLogged, setIsLogged] = useState(false);

  const getAdmin = async () => {


    const res = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await res.json();
    console.log(data);


  }

  const getBooks = async () => {
    const res = await fetch("http://localhost:5000/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setBook([...book, ...data]);
  };

  const getBuyItems = async () => {
    const res = await fetch("http://localhost:5000/buyItems",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);
    console.log("Buy Items initially")
    setBuyItem([ ...data]);
    console.log(buyItem);
    console.log("above output")

  }



  const addItem = async (item) => {
    const response = await fetch("http://localhost:5000/buyItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();
  
    console.log("Buy Items after addition of add item");
    console.log(buyItem);
    
  };

  useEffect(()=>{


    
    getBuyItems();
    
  },[isLogged])
  
  useEffect(() => {
    console.log("user data");
    
    const uname = localStorage.getItem("username");
    const uid = parseInt(localStorage.getItem("id"));
    const adm = parseInt(localStorage.getItem("isAdmin"));
    setIsAdmin(adm);
    console.log("admin",isAdmin);
    setUser({ id: uid, username: uname });
    console.log(user);
    console.log("id val is", user.id,typeof(user.id));

    console.log("after setting setuser function");
    console.log(user);
  }, []);

  useEffect(() => {
    getBooks();
    const user = localStorage.getItem("user");
    if (user) {
      // setUser(JSON.parse(user));
      setIsLogged(true);
    }
  }, []);

  const changeIsLogged = (value) => {
    setIsLogged(value);
  };
  const addUser = (u) => {
    setUser([...user, u]);
    //   console.log(user)
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    // setUser([]);
    setIsLogged(false);
  };

  // const changeStatus = () => {
  //   setIsAdmin(!isAdmin);
  // };

  return (
    <BookStoreContext.Provider
      value={{
        addItem,
        buyItem,
        book,
        logout,
        user,
        addUser,
        isAdmin,
        setIsAdmin,
        isLogged,
        changeIsLogged,
      }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreContext;
