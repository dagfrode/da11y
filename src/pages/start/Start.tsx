import { useState } from "react";
import styles from "./Start.module.less";
import { Review, ROLE, Role } from "../../types";

type Props = {
  reviews: Review[]
  createNewReview: (title: string, role: Role) => void,
  selectReview: (review: Review) => void
}
export const Start = ({reviews, createNewReview, selectReview}: Props) => {


  const [title, setTitle] = useState("");

  const create = () => {
    createNewReview(title, "DEVELOPER")
  }

  return (
    <>
      <h2>Create new review</h2>
      <label>
        Title:
        <input type="text" value={title} onInput={(e) => setTitle(e.target.value)} />
      </label>
      <button type="button" onClick={create}>Start ny</button>
      <h2>Continue existing review</h2>
      {reviews.map((review: Review) => (
        <button key={review.created} onClick={() => selectReview(review)} className={styles.continueButton} type="button">
          <span>{review.title}</span>
          <span>
            Last changed:
            {review.lastChanged}
          </span>
          <span>
            Completion: {review.numberOfCompletedTests / review.numberOfTests}
          </span>
        </button>
      ))}
    </>
  );
};
