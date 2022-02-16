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
            <Route path = "/about" element={<About />} />
            <Route path = "/orders" element={<Order />} />

          </Routes>
        </Router>
      </div>

  );
}

export default App;
