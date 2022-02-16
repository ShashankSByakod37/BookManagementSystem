import { BookStoreProvider } from "./context/BookStoreContext";
import Header from "./components/Header";
import { UserAuth } from "./pages/Auth/UserAuth";
import { Register } from "./pages/Auth/Register/Register";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BookStoreProvider>
      <div >
      <Router>

      <Routes>
      {/* <UserAuth/> */}
      <Route path="/" element={<UserAuth/>} />
        <Route path="/home" element={<Header/>} />
      </Routes>
      </Router>
      </div>


    </BookStoreProvider>
  );
}

export default App;
