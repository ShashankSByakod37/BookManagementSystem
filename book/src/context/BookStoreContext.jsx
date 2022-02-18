import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookStoreContext = createContext();

export const BookStoreProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 0,
    username: "",
  });

  const [bookEdit,setBookEdit] = useState({
    data : {},
    flag : false  
  });

  const [review, setReview] = useState([]);


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

    setBook([ ...data]);
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

  const addBook = async (bk) => {
    const response = await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bk),
    });

    const data = await response.json();

    console.log(data);
    setBook([ ...book, data]);
  }

  const getReviews = async () => {
    const res = await fetch("http://localhost:5000/reviews", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setReview([...data]);




  }

  useEffect(()=>{


    
    getBuyItems();
    
  },[isLogged])



  useEffect(() => {


    getReviews();




  },[]);

  
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

  const deleteBook = async (id) => {
    console.log("tyep is",typeof(id))
    const res = await fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = res.status;
    setBook(book.filter((book) => book.id !== id));
    

    console.log(data);
    // getBooks();
  }

  const editBook = (book) => {
    setBookEdit({
      data: book,
      flag: true,
    });
  }


  const addReview = async (data) => {

    const resp = await fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {

                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const data1 = await resp.json();

    setReview([...review, data1]);
  }


  const updateBook = async (data,bkid) => {
    const resp = await fetch(`http://localhost:5000/books/${bkid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const data1 = await resp.json();
    console.log(data1)

    setBook(
      book.map((bk) =>
        bk.id === bkid
          ? {
              ...bk,
              ...data,
            }
          : bk
      )
    );
    console.log("hey here");
    console.log(book);

  }
  return (
    <BookStoreContext.Provider
      value={{
        bookEdit,
        updateBook,
        editBook,
        addItem,
        buyItem,
        addReview,
        book,
        logout,
        user,
        addUser,
        setBook,
        addBook,
        deleteBook,
        isAdmin,
        setIsAdmin,
        isLogged,
        changeIsLogged,
        review
      }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreContext;
