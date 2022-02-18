import { createContext, useEffect, useState } from "react";
import { FaStepBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookStoreContext = createContext();

export const BookStoreProvider = ({ children }) => {

  const [entireUsers,setEntireUsers] = useState([]);    





  const [user, setUser] = useState({
    id: 0,
    username: "",
  });

  const [bookEdit,setBookEdit] = useState({
    data : {},
    flag : false  
  });

  useEffect(()=>{


    // if(parseInt(localStorage.getItem("isAdmin")) == 1){
      getEntireUser();
      console.log("entire users",isAdmin);
      console.log("islogged",isLogged);
    // }

  },[])

  const [review, setReview] = useState([]);
  


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

  const getEntireUser = async () => {
    const res = await fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    
    const data = await res.json();
    console.log(data);
    setEntireUsers([...data]);
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

  const getBookById = async (bookId) => {
    const res = await fetch(`http://localhost:5000/books/${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await res.json();
    
    return data;
    
    // setBook([ ...data]);
  };
  
  
    useEffect(()=>{
  
      
      
      // getBuyItems();
      
    },[])
    
    const [buyItem, setBuyItem] = useState([
      {
        "userid": 1,
        "bookid": 2,
        "quantity": "1",
        "id": 1,
        "grandtotal": 1500
      },
      {
        "userid": 1,
        "bookid": 2,
        "quantity": 5,
        "id": 2,
        "grandtotal": 7500
      }
    ]);
    const getBuyItems = async () => {
      
    const userid = parseInt(localStorage.getItem("id"));
    const res = await fetch(`http://localhost:5000/buyItems/${userid}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log
    const data = await res.json();


    console.log("data is here",data);
    // setBuyItem([ ...data,...buyItem]);



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

    setBuyItem([ ...buyItem,data]);
  
    
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



  useEffect(() => {


    getReviews();




  },[]);

  
  useEffect(() => {

    
    const uname = localStorage.getItem("username");
    const uid = parseInt(localStorage.getItem("id"));
    const adm = parseInt(localStorage.getItem("isAdmin"));
    setIsAdmin(adm);

    setUser({ id: uid, username: uname });





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


  const removeUser = async (id) => {

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    setEntireUsers(entireUsers.filter((user) => user.id !== id));



  }
  return (
    <BookStoreContext.Provider
      value={{
        entireUsers,
        removeUser,
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
        review,
        getBookById
      }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreContext;
