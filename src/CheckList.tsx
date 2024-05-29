import styles from "./checklist.module.css";

export const CheckList = () => {
  return (
    <>
      <KeyBoard />
      <Scale />
      <Structure />
      <Form />
      <AutomatedTesting />
      <ScreenReader />
      <UserTesting />
    </>
  );
};

export const CheckListItem = ({ title, children }) => {
  return (
    <details style={{ padding: "5px 10px" }}>
      <summary
        style={{ padding: " 10px", backgroundColor: "lightblue" }}
        className={styles.summary}
      >
        <label>
          <input type="checkbox" />
          {title}
        </label>
      </summary>
      {children}
    </details>
  );
};

//TODO
// Turn website greyscale to see if it makes sence without color
// Turn website blury to simulate bad vision
// Show areia and alt labes
// show tags on text for h1-6 and p to help show if the structure is alright
// how to test keyboard?
// How to test form?
// Look trough wcag to find ways of testing each relevant requirement and add it to the list

export const KeyBoard = ({}) => {
  return (
    <CheckListItem title="tastaturr">
      <CheckListItem title="Skip">derp</CheckListItem>
    </CheckListItem>
  );
};

export const Scale = ({}) => {
  return (
    <CheckListItem title="forstørring">
      <CheckListItem title=" font forstørring">
        Skaller opp fonten til 200% - du kan bruke shift + scroll (feature added
        by da11y)
      </CheckListItem>
      <CheckListItem title="nettside forstørring">
        Skaller opp nettsiden - du kan bruke ctrl + scroll
      </CheckListItem>
    </CheckListItem>
  );
};

export const Structure = ({}) => {
  return <CheckListItem title="struktur"></CheckListItem>;
};

export const Form = ({}) => {
  return <CheckListItem title="skjema"></CheckListItem>;
};

export const AutomatedTesting = ({}) => {
  return (
    <CheckListItem title="automatiserte verktøy">
      <CheckListItem title="lint">eslint ++</CheckListItem>
      <CheckListItem title="component">react testing library</CheckListItem>
      <CheckListItem title="integration">playwright</CheckListItem>
      <CheckListItem title="extention">wave</CheckListItem>
    </CheckListItem>
  );
};

export const ScreenReader = ({}) => {
  return (
    <CheckListItem title="skjermlesing">
      <CheckListItem title="accessability tree"></CheckListItem>
      <CheckListItem title="skjermleser">- mac - linux - windows</CheckListItem>
    </CheckListItem>
  );
};

export const UserTesting = ({}) => {
  return (
    <CheckListItem title="brukertesting">
      <CheckListItem title="gjevnlig review"></CheckListItem>
      <CheckListItem title="brukertesting med faktiske brukere"></CheckListItem>
    </CheckListItem>
  );
};
