import { Review } from "../../types";

import styles from "./Overview.module.less";

type Props = {
  review: Review;
};
export const Overview = ({ review }: Props) => {
  return (
    <>
      <h2>{review.title}</h2>
      <p>Last changed: {review.lastChanged}</p>
      <div className={styles.options}>
        <button type="button">Status*</button>
        <button type="button">Automatic testing*</button>
        <button type="button">Manual testing</button>
        <button type="button">Report*</button>
      </div>
    </>
  );
};
