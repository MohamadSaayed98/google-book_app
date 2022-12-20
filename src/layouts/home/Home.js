import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

import "./Home.css";

function Home() {
  const [keyword, setKeyword] = useState("a");
  const [data, setData] = useState({});

  useEffect(() => {
    if (keyword) {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          keyword +
          "inauthor&download=epub&filter=free-ebooks"
      )
        .then((res) => res.json())
        .then((data) => setData(data.items))
        .catch((err) => console.log(err));
    }
  }, [keyword]);

  console.log(data);

  return (
    <section className="overview-section">
      <div className="overview__container">
        <nav>
          <input
            placeholder="Search for an author…"
            type="search"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </nav>
        <div className="overview-books">
          {data?.length > 0 &&
            data.map((book) => (
              <BookCard
                clickHandler={(e) => console.log(e.target)}
                id={book.id}
                key={book.id}
                title={book.volumeInfo.title}
                publishedDate={book.volumeInfo.publishedDate}
                author={book.volumeInfo.authors?.join("") || "anonymos"}
                image={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  "../../../images/login-back-img.jpg"
                }
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
