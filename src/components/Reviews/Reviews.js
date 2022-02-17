import React, { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/api";
import s from "./Reviews.module.css";

function Reviews({ movieID }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    fetchMovieReviews(movieID).then((res) => {
      if (res.results.length < 1) {
        setStatus("error");
      } else {
        setReviews(res.results);
        setStatus("resolved");
      }
    });
  }, [movieID]);

  return (
    <>
      {status === "error" && <p>We dont have any reviews for this movies.</p>}
      {status === "resolved" && (
        <ul>
          {reviews.map((review) => {
            const { id, content, author } = review;
            return (
              <li key={id}>
                <p className={s.author}>{`Author: ${author}`}</p>
                <p className={s.content}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;
