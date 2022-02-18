import React, { useContext } from "react";
import Card from "../../components/shared/Card";
import BookStoreContext from "../../context/BookStoreContext";
import { Link } from "react-router-dom";
import {  FaRupeeSign } from "react-icons/fa";

export const BookList = () => {
  const { book } = useContext(BookStoreContext);
  return (
    <div className="container md-2" style={{ margin: "5% auto 5% auto" }}>
      <div style={{ width: "100%", backgroundColor: "transparent" }}>
        {" "}
        <div className="row">
          {book.map((book) => {
            return (
              <div className="col-md-4" style={{ padding: "2%" }} key={book.id}>
                <Card>
                  <Link
                    className="list-group-item list-group-item-action"
                    style={{ border: "none" }}
                    to={`/books/${book.id}`}
                    value="here"
                  >
                    {/* <td>{emp.email}</td> */}

                    <div className="row">
                      <img
                        src="https://learning.oreilly.com/library/cover/9781449344573/250w/"
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
                        <div  className="col-md-12">
                       
                        <h3> <FaRupeeSign/>{book.price}</h3>
                          
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
