import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./BookCard.css";

function BookCard({ image, title, author, publishedDate, clickHandler, id }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="book" onClick={clickHandler}>
        <img src={image} alt={title} width="150px" height="200px" />
        <div className="book-info">
          <p>{author}</p>
          <p>Published in {publishedDate}</p>
          <button
            onClick={(e) => navigate(`/books/${id}`)}
            className="book-preview-btn"
          >
            Preview
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default BookCard;
