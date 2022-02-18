import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import { useContext,useState } from 'react';
import BookStoreContext from '../../context/BookStoreContext';
import Card from '../../components/shared/Card';


export const Purchase = () => {

  const {book,buyItem,getBookById} = useContext(BookStoreContext);



  // [1,b1,q1,grand1,
  
  // 2,b2,q2,grand2,]

  //   cons


  const arr = [{

    id:1,
    name : "book1",
    price : 100,
    author : "author1",
    quantity : 1,
    grandtotal : 100,
    url : "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"




  },


]
  
  
  
  const getBooksMapping = buyItem.map((item)=>{
    // console.log("items",buyItem);

    const { url,name,author} = getBookById(item.bookid);

    const obj = {"url" : url,
                  "id" : item.bookid,
                  "name" : name,
                  "author":author,
                  "quantity": item.quantity,
                  "grandtotal":item.grandtotal};


    return obj;

    





  })

  




    return (
      <div className="" style={{ margin: "2% 7% 2% 7%",padding:"0" }}>
        <div style={{ width: "100%", backgroundColor: "transparent" }}>
          {" "}
          <div className="row">
            {getBooksMapping.map((book) => {
              return (
                <div className="col-md-4" style={{ padding: "3%" }} key={book.id}>
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
                            <h3>
                              {" "}
                              <FaRupeeSign />
                              {book.price}
                            </h3>
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
    );

}
