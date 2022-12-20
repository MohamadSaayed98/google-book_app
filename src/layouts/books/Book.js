import React, { useLayoutEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Book.css";

function Book() {
  const [data, setData] = useState({});
  const params = useParams();

  useLayoutEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [params.id]);

  console.log(data);

  let image, imagesArray;
  if (Object.keys(data).length !== 0) {
    imagesArray = Object.values(data.volumeInfo.imageLinks);
    image = imagesArray[imagesArray.length - 1];
  }

  return (
    <>
      {Object.keys(data).length !== 0 && (
        <section
          className="one-book-section"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="one-book-container">
            <div className="one-book-info">
              <h1>{data.volumeInfo.authors}</h1>
              <p>Published in {data.volumeInfo.publishedDate}</p>
              <p>{data.volumeInfo.title}</p>
              <p>{data.volumeInfo.pageCount} pages</p>
              <p className="language">
                Language: {data.volumeInfo.language.toUpperCase()}
              </p>
              <div>
                <a className="pdf" href={data.accessInfo.pdf?.downloadLink}>
                  DOWNLOAD AS PDF
                </a>

                <a className="epub" href={data.accessInfo.epub?.downloadLink}>
                  DOWNLOAD AS EPUB
                </a>
                <Link to="/overview">BACK</Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Book;
