import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useContext } from "react";
import BookStoreContext from "../../context/BookStoreContext";
import Card from "../../components/shared/Card";

export const Purchase = () => {
  const { book, getBookById } = useContext(BookStoreContext);
  
  let [buyItem, setBuyItem] = useState(null);
  let [getBooksMapping, setGetBooksMapping] = useState(null);
  let [finalBooks,setFinalBooks] = useState(null);
  useEffect(() => {
    const userid = parseInt(localStorage.getItem("id"));
    async function fetcher() {
      const res = await fetch(
        `http://localhost:8080/api/library/customers/books/${userid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log("Here!!", data);
      setGetBooksMapping(data);
    }
    async function buyItemsFetcher(){
      const res = await fetch(`http://localhost:8080/api/library/customers/${userid}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setBuyItem([...data]);
    }
    fetcher();
    buyItemsFetcher();
  }, []);
  // [1,b1,q1,grand1,

  // 2,b2,q2,grand2,]

  //   cons
  // console.log("book", buyItem);
  // const [items,setItems]=useState([]);


  useEffect(() => {
    if (buyItem && getBooksMapping) {
      const newData = buyItem.map((item) => {
        const bk = getBooksMapping.filter((b) => b.id === item.bookid);

        const bk1 = bk[0];

        const obj = {
          url: bk1.url,
          name: bk1.name,
          author: bk1.author,
          price: bk1.price,
          quantity: item.quantity,
          grandtotal: item.grandtotal,
        };

        console.log(obj);

        return obj;
      });
      console.log("Final books assigned here,\n",newData);
      setFinalBooks(newData);
    }
  }, [buyItem,getBooksMapping]);

  return (
    finalBooks && (
      <div className="" style={{ margin: "2% 7% 2% 7%", padding: "0" }}>
        <div style={{ width: "100%", backgroundColor: "transparent" }}>
          {" "}
          <div className="row">
            {finalBooks.map((book) => {
              return (
                <div
                  className="col-md-4"
                  style={{ padding: "3%" }}
                  key={book.id}
                >
                  <Card>
                    {/* <td>{emp.email}</td> */}

                    <div className="row">
                      <img
                        // src="https://learning.oreilly.com/library/cover/9781449344573/250w/"
                        src={book.url}
                        alt={book.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          padding: "auto",
                        }}
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="col-md-12">
                          <h5>
                            <b>{book.name}</b>
                          </h5>
                        </div>
                        <div className="col-md-12">
                          <h6 style={{ float: "center" }}>
                            <i>{book.author}</i>
                          </h6>
                        </div>
                        <div className="col-md-12">
                          <h4>
                            {"Grand Total: "}
                            <FaRupeeSign />
                            {book.grandtotal}
                          </h4>
                        </div>
                        <div className="col-md-12">
                          <h4>
                            {`Quanity:${book.quantity}`}
                          </h4>
                        </div>
                        <div className="col-md-12">
                          <h5>
                          {`Individual price:`}
                          <FaRupeeSign></FaRupeeSign>
                          {book.price}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};
