import React, { useState } from "react";

import "./Quotes.css";
const QuoteItems = ({ content, author, upvotesCount, downvotesCount }) => {
  const percent = (100 / (upvotesCount + downvotesCount)) * upvotesCount;
  const ceilPercent = Math.ceil(percent);

  return (
    <div id="quote-box">
      <div id="text">
        <p>{content}</p>

        <div id="author">
          <p>{author}</p>
        </div>

        <div id="grades">
          <p
            id="percentage"
            className={
              ceilPercent >= 90
                ? "green"
                : ceilPercent <= 50
                ? "red"
                : ceilPercent <= 89
                ? "yellow"
                : ceilPercent <= 70
                ? "orange"
                : null
            }
            style={{ position: "relative", bottom: "50px" }}
          >
            {ceilPercent}%
          </p>
          <p id="mark" style={{ position: "absolute" }}>
            {upvotesCount}/{downvotesCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteItems;
