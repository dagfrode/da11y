import { testCategories } from "./data";

export const TestOverview = () => {
  return (
    <div>
      <h1>Test categories</h1>
      {testCategories.map((cat) => (
        <TestCategoryOverview testCategory={cat} />
      ))}
    </div>
  );
};

const TestCategoryOverview = ({ testCategory }) => {
  return (
    <div>
      <h2>{testCategory.title}</h2>
      <ul>
        {testCategory.tests.map((test) => (
          <li>{test.title}</li>
        ))}
      </ul>
    </div>
  );
};

const TestCategory = () => {
  return (
    <div>
      <h1></h1>
    </div>
  );
};
