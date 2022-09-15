import React, { useState } from "react";
import "./Quotes.css";
import QuoteItems from "../components/QuoteItems";
import { QUOTES } from "./QuoteLists";

import PopUp from "./PopUp";
const Quotes = ({ quotes }) => {
  return (
    <div className="quotes">
      {/* ovie quotes doagjaat od formata*/}
      {quotes.map((quote, index) => (
        <QuoteItems
          key={index}
          content={quote.content}
          author={quote.author}
          upvotesCount={quote.upvotesCount}
          downvotesCount={quote.downvotesCount}
        />
      ))}
      {QUOTES.map((quote, index) => (
        <QuoteItems
          key={index}
          content={quote.content}
          author={quote.author}
          upvotesCount={quote.upvotesCount}
          downvotesCount={quote.downvotesCount}
        />
      ))}
    </div>
  );
};

export default Quotes;
