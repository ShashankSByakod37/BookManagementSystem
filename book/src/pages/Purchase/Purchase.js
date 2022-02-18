import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import { useContext, } from 'react';
import BookStoreContext from '../../context/BookStoreContext';
import Card from '../../components/shared/Card';


export const Purchase = () => {

  const {book,buyItem,getBookById} = useContext(BookStoreContext);



  // [1,b1,q1,grand1,
  
  // 2,b2,q2,grand2,]

  //   cons
  console.log("book",buyItem);
  // const [items,setItems]=useState([]);



  const getBooksMapping = buyItem.map((item)=>{

    const bk = book.filter((b)=>b.id===item.bookid)

    const bk1 = bk[0];

    

    const obj = {"url" : bk1.url,
                  "name" : bk1.name,
                  "author":bk1.author,
                  "quantity": item.quantity,
                  "grandtotal":item.grandtotal};



                  console.log(obj);


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
