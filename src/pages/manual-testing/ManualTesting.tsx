import { useState } from "react";
import { type Test, testCategories } from "../../data";
import { Review } from "../../types";

import styles from "./ManualTesting.module.less";

type Props = {
  review: Review;
};

export const ManualTesting = ({ review }: Props) => {
  const currentTestCategory = testCategories[review.currentTestCategory];

  return (
    <>
      <h2>{review.title}</h2>
      <h3>{currentTestCategory.title}</h3>
      <p>{currentTestCategory.description}</p>
      <div className={styles.tests}>
        {currentTestCategory.tests.map((test) => (
          <Test test={test} />
        ))}
      </div>
    </>
  );
};

type TestProps = {
  test: Test;
};
const Test = ({ test }: TestProps) => {
    const [showMore, setShowMore] = useState(false)
  return (
    
    <div className={styles.test}>
      <h4>{test.title}</h4>
      <p>{test.description}</p>
      <div className={styles.testStatus}>
        
      <label>
        Not tested
        <input type="radio" name={test.successCriteria} />
      </label>
      <label>
        Success
        <input type="radio" name={test.successCriteria} />
      </label>
      <label>
        Failure
        <input type="radio" name={test.successCriteria} />
      </label>
      <label>
        Not Relevant
        <input type="radio" name={test.successCriteria} />
      </label>
      </div>
      <div>

      <label>
        Comment:
        <input type="text"/>
      </label>
      <button type="button" onClick={() => setShowMore(!showMore)}>More</button>
      </div>
     
     {showMore && <div>

        <p>More about the success criteria</p>
        <p>More about how to test</p>
      </div>}
    </div>
  );
};
