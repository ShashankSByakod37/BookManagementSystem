import { BookStoreProvider } from "./context/BookStoreContext";
import {Header} from "./components/Header";
import { UserAuth } from "./pages/Auth/UserAuth";
import { Register } from "./pages/Auth/Register/Register";
import { useContext } from "react";
import BookStoreContext from "./context/BookStoreContext";
import { About } from "./pages/About/About";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import { BookList } from "./pages/Books/BookList";
import {Order} from "./pages/Order/Order";
import { BookDetails } from "./pages/BookDetails/BookDetails";
import {Customer} from "./pages/Customer/Customer";
import { AddBook } from "./pages/AddBook/AddBook";

function App() {
  const { isLogged } = useContext(BookStoreContext);
  console.log(isLogged);
  
  return (




      <div>
        <Router>
          <Routes>

             { localStorage.getItem("user") ? <Route path="/*" element={<Header />} /> : <Route path="/" element={<UserAuth />} />}
          </Routes>
          <Routes>
            {/* <UserAuth/> */}
            {/* <Route /> */}
             
            {/* <Route path="/" element={<Header />} /> */}
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/orders" element={<Order />} />
            <Route path = "/customers" element={<Customer />} />
            <Route path = "/addbook" element={<AddBook />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;
