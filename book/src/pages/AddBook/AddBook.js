import {useState,useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import BookStoreContext from "../../context/BookStoreContext";
export const AddBook = ({handleClick}) => {
  const navigate = useNavigate();
  const {setBook,book,addBook,bookEdit,updateBook} = useContext(BookStoreContext);

  const [name, setBookName] = useState("");
  const [author, setAuthorName] = useState("");
  const [price , setPrice] = useState();
  const[publishedyear, setPublishedYear] = useState();
  const [genre, setGenre] = useState("");
  const[error,setError] = useState("");
  const[success,setSuccess] = useState("");
  const[url,setUrl]=useState("");


  useEffect(()=>{

    console.log("Book data changing");
    if(bookEdit.flag === true){

      setBookName(bookEdit.data.name);
      setAuthorName(bookEdit.data.author);
      setPrice(bookEdit.data.price);
      setPublishedYear(bookEdit.data.publishedyear);
      setGenre(bookEdit.data.genre);
      setUrl(bookEdit.data.url);
    }
  },[bookEdit]);


  const handleReset = (e) =>{
    e.preventDefault();
    setBookName("");
    setAuthorName("");
    setPrice("");
    setPublishedYear("");
    setGenre("");
    setError("");
    setSuccess("");
  }
  
   const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || author === "" || price === "" || publishedyear === "" || genre === "" || url=="" ){
      setError("Please fill all the fields");

    }

    else{
        setError("");
        const obj = {
          name,
          author,
          price,
          publishedyear,
          genre,
          url
        }
        if(bookEdit.flag === true){
          updateBook(obj,bookEdit.data.id);
          // setBookEdit({data:{},flag:false});
          bookEdit.flag = false;
          setSuccess("Book Updated Successfully");
        }
        else{
          console.log("adding book")
          addBook(obj);
          console.log(obj); 
          setSuccess("Book Added Successfully");

        }
        navigate("/books");

        setBookName("");
        setAuthorName("");
        setPrice("");
        setPublishedYear("");
        setGenre("");
        setUrl("");
      


        // setTimeout(()=>{

        //   handleClick()},5000);
        // ???;
  }
}

  const styling = {
    width: "50%",
    margin: "0%  25% 0% 25%",
    backgroundColor: "transparent",
    padding: "5%",
    border: "15px solid transparent",
    borderRadius: "5%",
  };

  return (
    <div className="container" style={styling}>
      
      
      <h2 className="fw-bold mb-2 text-uppercase text-center">Add the Book </h2>
      <div className="text-center">Enter the details in the below form 
    
      </div>

      <div className="text-white-50 mb-5 text-center">
        <b>Please fill up the Add Book form below </b>
        <p>{error}</p>
      </div>
      <form method="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-6">
            {/* Book name */}
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputpublishedYear1"
              // aria-describedby="publishedYearHelp"
              placeholder="Enter Book Name"
              name="bookName"
              autoComplete="bookName"
              value={name}
              onChange={(e) => setBookName(e.target.value)}
              
            />

            {/* {console.log(bookName)} */}
          </div>

          <div className="form-group col-md-6">
            {/* Author name */}
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputgenre1"
              placeholder="Enter Author Name "
              autoComplete="authorName"
              name="authorName"
              value={author}
              onChange={(e) => setAuthorName(e.target.value)}
              
            />
            {/* {console.log(authorName)} */}
          </div>

        </div>

        <br/>

        <div className="row">
          <div className="form-group col-md-6">
            {/* price */}
            <input
              type="number"
              className="form-control form-control-lg"
              id="exampleInputpublishedYear1"
              aria-describedby="publishedYearHelp"
              placeholder="Enter Price"
              name="price"
              autoComplete="price"
              value={price}
              onChange = {(e) => setPrice(e.target.value)}
              
            />
            {/* {console.log(price)} */}
          </div>

          <div className="form-group col-md-6">
            {/* publishedYear */}
            <input
              type="number"
              className="form-control form-control-lg"
              id="exampleInputgenre1"
              placeholder="Enter the publishing year of the book"
              name="publishedYear"
              autoComplete="publishedYear"
              value={publishedyear}
              onChange = {(e) => setPublishedYear(e.target.value)}
              
            />
            {/* {console.log(publishedYear)} */}
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="form-group col-md-6">
            {/* add genre */}
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleInputpublishedYear1"
              aria-describedby="publishedYearHelp"
              placeholder="Add genre"
              name="genre"
              value={genre}
              onChange = {(e) => setGenre(e.target.value)}
              
            />
            {/* {console.log(genre)} */}
          </div>
          <div className="form-group col-md-6">
            {/* add genre */}
            <input
              type="url"
              className="form-control form-control-lg"
              id="exampleInputpublishedYear1"
              aria-describedby="publishedYearHelp"
              placeholder="Add url"
              name="Book URL "
              value={url}
              onChange = {(e) => setUrl(e.target.value)}

            />
            {/* {console.log(genre)} */}
          </div>
          <div className="form-outline form-white mb-4 col-md-6">
            {/* publishedYear */}
          </div>
        </div>
        <br/>
        
        <button className="btn btn-outline-light btn-block btn-lg px-5" type="submit"> Add The Book</button>
        <input class="btn btn-outline-light btn-block btn-lg px-5" onClick = {handleReset} type="reset" value="Reset"></input>
      </form>
        <div className="display-2" style = {{margin:"10%"}}>{success}</div>
    </div>
  );
};
