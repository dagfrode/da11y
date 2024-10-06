import { useState } from "react";
import { Start } from "./pages/start/Start";
import { Review, reviews, Role } from "./types";
import { Overview } from "./pages/overview/Overview";
import { ManualTesting } from "./pages/manual-testing/ManualTesting";

const PAGES = {
  START: "start",
  OVERVIEW: "overview",
  MANUAL_TESTING: "manual testing"
};

const App = () => {
  const createNewReview = () => {};
  const [globalState, setGlobalState] = useState({
    page: PAGES.START,
    selectedReview: undefined as Review | undefined,
  });

  return (
    <div>
      <h1>Sally</h1>
      {globalState.page === PAGES.START && (
        <Start
          selectReview={(review: Review) =>{

            setGlobalState({ ...globalState, page: PAGES.MANUAL_TESTING ,selectedReview: review })
          }
          }
          reviews={reviews}
          createNewReview={createNewReview}
        />
      )}
      {globalState.page === PAGES.OVERVIEW && globalState.selectedReview && <Overview review={globalState.selectedReview} />}
      {globalState.page === PAGES.MANUAL_TESTING && globalState.selectedReview && <ManualTesting review={globalState.selectedReview} />}
    </div>
  );
};

export default App;
