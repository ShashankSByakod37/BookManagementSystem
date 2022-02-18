import React, { useContext } from "react";
import Card from "../../components/shared/Card";
import BookStoreContext from "../../context/BookStoreContext";
import { Link,useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

export const BookList = () => {
  const navigate = useNavigate();
  const { book } = useContext(BookStoreContext);
  // book = null;


  const handleBack = () =>{
    navigate("/addBook");
  }

  if (!book || book.length === 0) {
    return (
      <div
        className="col-md-6"
        style={{
          width: "60%",
          margin: "auto",
          padding: "10px",
        }}
      >
        <div className="">
          {parseInt(localStorage.getItem("isAdmin")) ? (
            <div className=" display-4" style={{ textAlign: "center" }}>
              Fill up the form to view Employee Details...!
              <div>
                <button type="button"  onClick = { 
                    handleBack
                } className="btn btn-primary btn-lg">
                  Please add some books 
                </button>
              </div>
            </div>
          ) : (
            <div className=" display-4" style={{ textAlign: "center" }}>
              {" "}
              No Books were Added by Admin
            </div>
          )}
        </div>
      </div>
    );
  }

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
                        <div className="col-md-12">
                          <h3>
                            {" "}
                            <FaRupeeSign />
                            {book.price}
                          </h3>
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
