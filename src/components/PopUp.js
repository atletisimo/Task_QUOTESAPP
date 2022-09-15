import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quotes.css";

const PopUp = ({ setQuote }) => {
  const navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    setQuote((prev) => [
      {
        content: e.target.quote.value,
        author: e.target.author.value,
        upvotesCount: 0,
        downvotesCount: 0,
      },
      ...prev,
    ]);

    navigate("/");
  }

  return (
    <div id="quote-box">
      <div id="text">
        Enter quote:<br></br>
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            id="content"
            name="quote"
            style={{ border: "3px solid black" }}
          ></input>
          <div id="you">
            Enter author:
            <input
              type="text"
              id="author"
              name="author"
              style={{ border: "3px solid black" }}
            ></input>
          </div>
          <button type="submit" className="buttons">
            Add quote in the list
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
