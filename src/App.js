import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./layouts/login/Login";
import Home from "./layouts/home/Home";
import Book from "./layouts/books/Book";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/overview" element={<Home />} />
          <Route path="/books/:id" element={<Book />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
