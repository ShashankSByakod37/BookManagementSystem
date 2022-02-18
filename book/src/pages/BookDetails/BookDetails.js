import React, { useContext,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card";
import BookStoreContext from "../../context/BookStoreContext";
import { FaRupeeSign } from "react-icons/fa";
import { Review } from "./Review";
import Icon from "react-crud-icons";

export const BookDetails = () => {
  const[quan,setQuan]=useState(1);
  const navigate = useNavigate();
  
  const { id } = useParams();
  const handleDelete = (id) =>{

  }
  console.log("id in param is",typeof(id));
  const { book,user,addItem,buyItem,deleteBook,editBook } = useContext(BookStoreContext);
  

  const bk = book.find((b) => b.id == id);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Inside form submit");
    console.log("user id is",user.id);
    console.log("book id is",bk.id);
    console.log("user name is ",user.username);
    console.log("quantity",quan);

    const userid = parseInt(localStorage.getItem("id"));
    const bookid = bk.id;
    const bookprice = bk.price;
    const bookname = bk.name;
    const bookauthor = bk.author;
    const quantity = parseInt(quan);
    const grandtotal = quantity*bookprice;

    const userItems = {
      userid,
      bookid,
      quantity,
      grandtotal,
      // gra



    }

    console.log("userItems",userItems);
    addItem(userItems);
    
    // navigate("/");
    console.log("Buy Item",buyItem);

    setQuan(1);

    

  }

  return (
    <div
      style={{
        borderRadius: "25%",
        margin: "auto ",
        marginTop: "5%",
        marginBottom: "5%",
        height: "auto",
        maxHeight : "70%",
        width: "auto",
        maxWidth : "70%",
        boxSizing: "border-box",
      }}
    >
      <Card reverse={false}>
        <div className="row" style={{ padding: "2%" }}>
          <div className="col-md-5">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "5%",
                width: "100%",
              }}
            >
              <img
                // src="https://learning.oreilly.com/library/cover/9781449344573/250w/"
                src={bk.url}
                alt={bk.name}
                style={{ width: "70%", height: "70%",padding: "auto"}}
              />
            </div>
          </div>
          {/* <hr/> */}
          <div className="col-md-7">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "5%",
                width: "100%",
              }}
            >
              <div
                className="display-2"
                style={{
                  // fontSize: "2.5rem",
                  // fontWeight: "bold",
                  fontFamily: "Times serif",
                  color: "#2e2e2e",
                }}
              >
                {bk.name}
              </div>
              <h2
                className="display-6"
                style={{
                  // fontSize: "1.5rem",

                  fontFamily: "Times serif",

                  color: "#2e2e2e",
                }}
              >
                <p style={{ fontFamily: "cursive", display: "inline" }}>
                  {" "}
                  by
                </p>{" "}
                {bk.author}
              </h2>
              <div
                className="display-6"
                style={{
                  // fontSize: "2.5rem",
                  // fontWeight: "bold",
                  fontFamily: "Times serif",
                  color: "#2e2e2e",
                }}
              ><p style = {{display:"inline"}}>Published @</p>
                {bk.publishedyear}
              </div>
              <h2
                style={{
                  fontFamily: "serif",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#2e2e2e",
                  display: "inline",
                }}
              >
                <FaRupeeSign />
                <div className="display-6" style={{ display: "inline" }}>
                  {bk.price}
                </div>
              </h2>
              <h2
                style={{
                  fontFamily: "Times serif",
                  fontSize: "2.5rem",
                  color: "#2e2e2e",
                }}
              >
                <p className=" display-6" style={{ display: "inline" }}>
                  Genre :{" "}
                </p>
                {bk.genre}
              </h2>
              <br/>
            <form className="row" onSubmit={handleSubmit} style={{marginLeft:"0%"}}>
            <div className="form-outline col-5">
              <input type="number" min={1} id="form12"  value = {quan} onChange = {(e)=>setQuan(e.target.value) } className="form-control" 
              style = {{background:"blue",color:"yellow"}} placeholder = "Quantity"/>
              
            </div>
            <div className="form-outline col-5">
              <button className="btn btn-primary" style = {{color:"Black"}}>Add to Cart</button>
            </div>
            {parseInt(localStorage.getItem("isAdmin")) ? <div className="row">
            
            <div className=" deleteIcons " style={{ border: "none",cursor:"pointer",width:"100px" }} >
            <Icon
              tooltip=""
              name="delete"
              // tooltip="delete"

              theme="dark"
              size="big"
              onClick={() => {
                deleteBook(bk.id)
                  console.log(bk);
                
                navigate("/books")
              }}
            />
          </div>
          <div className=" deleteIcons " style={{ border: "none",cursor:"pointer",width:"100px" }} >
            <Icon
              tooltip=""
              name="edit"
              // tooltip="delete"

              theme="dark"
              size="big"
              onClick={() => {
                editBook(bk)
                navigate("/addbook")
              }}
            />
          </div>
            </div> : null}
            </form>
            </div>
          </div>
        </div>
      </Card>

      <button
        onClick={() => {
        }}
      >
        Go Back
      </button>
      <Review id  = {id}/>
    </div>
  );
};

{
  /* 
        <div className="controls">
        
          <div className="buy-button-group">
            <a href="https://www.amazon.com/_/dp/1449343910?tag=oreilly20-20" id="buyAmazon" className="button-primary" onmousedown="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Outbound Links', 'eventAct':'Non-Oreilly', 'eventLbl': 'amazon.com/_/dp/1449343910?tag=oreilly20-20', 'eventVal': 0, 'nonInteraction': 0});">Buy on Amazon</a>
          </div>

          <a href="https://learning.oreilly.com/p/register/" id="startTrial" className="button-secondary" onmousedown="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Outbound Links', 'eventAct':'Oreilly', 'eventLbl': 'learning.oreilly.com/p/register/', 'eventVal': 0, 'nonInteraction': 0});">Start <span className="mobile-hide">your</span> free trial</a>

        
        </div> */
}
