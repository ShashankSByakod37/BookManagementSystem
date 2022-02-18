import React, { useState,useContext, useEffect } from "react";
import Card from "../../components/shared/Card";
import BookStoreContext from "../../context/BookStoreContext";
import "./Review.css";

export const Review = ({id}) => {
  const [texts, setText] = useState("");
  const [rate, setRating] = useState(0);
  const {addReview,review,entireUsers,getReviewById} = useContext(BookStoreContext);
  // const rew = review.filter((r) => r.bookid == parseInt(id));\
  useEffect(() => {
    
    getReviewById(id);
    
  },[]);  

  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (texts === ""  ) {
      setError("Please enter text field");
    }
    else if (texts.trim().length<10){
        setError("Please enter atleast 10 characters");
    }
    else{
        setError("");
        // console.log("Review submitted");

        const userid = parseInt(localStorage.getItem("id"));
        const bookid = parseInt(id);
        const rating= parseInt(rate);
        const text = texts;

        const data = {
            userid,
            bookid,
            rating,
            text,

        }
        addReview(data);


        setError("");
        setText("");
        setRating(0);

    }
  };
  return (
    <div >
      <div className="row" style={{ padding: "2%" }}>
        <div className="display-4 " style={{ textAlign: "center" }}>
          <b>Reviews</b>
        </div>

       
        {review.map((r) => (
            <div className="col-md-12" key={r.id} style = {{width :"60%"}} >
                <div className="card" style = {{margin:"2% 20% auto 20%",width :"60%"}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <img
                                    src="https://www.w3schools.com/howto/img_avatar.png"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: "100px" }}
                                />
                            </div>
                            <div className="col-md-10">
                                <div className="row">

                                    <div className="col-md-10" style = {{color:"black"}}>
                                        <h4>{r.text}</h4>
                                    </div>
                                    <div className="col-md-2">
                                    <div className="position-relative display-6">
                                        <h6 >
                                        <div class="position-absolute top-0 end-0">
                                        
                                      <div style = {{color:"black" ,backgroundColor:"sandybrown" ,border : "9px solid sandybrown",borderRadius:"100%", padding:"5%" ,
                                       fontFamily: "sans-serif",fontSize : "200%"}}>{r.rating}</div>
                                        </div>



                                        </h6>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}

        <div className="text-white-50 mb-5" style={{ textAlign: "center" }}>
        <b> 
        <h2>{error}</h2></b>
      </div>

        <form onSubmit={handleSubmit}>
          <div
            className="form-group"
            style={{ width: "60%", margin: "auto 20% auto 20%" }}
          >
            <label htmlFor="customRange2" className="form-label">
              Slide to rate
            </label>
            <input
              type="range"
              className="form-range"
              min="1"
              max="5"
              step="1"
              value={rate}
              style={{ height: "40px" }}
              onChange={(e) => setRating(e.target.value)}
              id="customRange2"
            />
          </div>
          <div
            className="form-group"
            style={{ width: "60%", margin: "auto 20% auto 20%" }}
          >
            <label htmlFor="exampleFormControlTextarea1">
              Provide ur Review for the above book
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={texts}
              onChange={(e) => setText(e.target.value)}
            > </textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              style={{ marginTop: "5%" }}
              className = "btn btn-secondary btn-lg btn-block"
            >
              Submit
            </button>
          </div>
          <p>{}</p>
        </form>

      </div>
    </div>
  );
};
