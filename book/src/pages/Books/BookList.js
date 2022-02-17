import React,{useContext} from "react";
import Card from "../../components/shared/Card";
import BookStoreContext from "../../context/BookStoreContext";
import {Link} from "react-router-dom";


export const BookList = () => {
  const{book} = useContext(BookStoreContext);
  return (
    <div className="container md-2" style = {{margin:"5% auto 5% auto"}}>
      <div  style={{ width: "100%",backgroundColor:"transparent" }}>
      {" "}
      <div className="row">
        {book.map((book) => {
          return(
          <div className="col-md-4" style = {{padding:"2%"}} key={book.id}>
            <Card>
            <Link
          className="list-group-item list-group-item-action"
          style={{ border: "none" }}
          to={`/books/${book.id}`}
          value="here"
        >

          {/* <td>{emp.email}</td> */}
        
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.price}</p>
                <p className="card-text">{book.genre}</p>
                <p className="card-text">{book.publishedyear}</p>
            </div>
            </Link>
            </Card>
          </div>)
})}
      </div>
      </div>
    </div>
  );
};
