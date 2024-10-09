import { useState } from "react";
import styles from "./Start.module.less";


// type Props = {
//   reviews: Review[];
//   createNewReview: (title: string, role: Role) => void;
//   selectReview: (review: Review) => void;
// };
export const Start = ({ reviews, createNewReview, selectReview }) => {
  const [title, setTitle] = useState("");

  const create = () => {
    createNewReview(title, "DEVELOPER");
  };

  const sendMessage = (message) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: message });
    });
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("toggleGreyScale")
      .addEventListener("click", () => sendMessage("toggleGreyScale"));
  });

  return (
    <>
      <h2>Create new review</h2>
      <button type="button" onClick={() => sendMessage("toggleGreyScale")}>greyscale</button>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
        />
      </label>
      <button type="button" onClick={create}>
        Start ny
      </button>
      <h2>Continue existing review</h2>
      {reviews.map((review) => (
        <button
          key={review.created}
          onClick={() => selectReview(review)}
          className={styles.continueButton}
          type="button"
        >
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
