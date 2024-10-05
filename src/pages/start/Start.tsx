import styles from "./Start.module.less";

export const ROLE = {
    DEVELOPER: "developer",
    DESIGNER: "designer",
    TESTER: "tester",
    DEVELOPER: "developer",
    DEVELOPER: "developer",
}

export const Start = () => {
  const reviews = [
    {
      title: "Side 1",
      lastChanged: "2024-10-05T09:51:07.104Z",
      numberOfTests: 100,
      numberOfCompletedTests: 42,
      role: 
    },
  ];

  return (
    <>
      <h2>Create new review</h2>
      <button type="button">Start ny</button>
      <h2>Continue existing review</h2>
      {reviews.map(review => <button style={styles.continueButton} type="button">
        <span>
            {review.title}
            </span>
            <span>
Last changed: 
        {review.lastChanged}
            </span>
            <span>
                Completion: {review.numberOfCompletedTests/review.numberOfTests}
            </span>
      </button>)}
    </>
  );
};
