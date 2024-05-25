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
    <details>
      <summary>
        <label>
          <input type="checkbox" />
          {title}
        </label>
      </summary>
      {children}
    </details>
  );
};

export const KeyBoard = ({}) => {
  return <CheckListItem title="tastatur">
    <CheckListItem title="Skip">derp</CheckListItem>
  </CheckListItem>;
};

export const Scale = ({}) => {
  return <CheckListItem title="forstørring"></CheckListItem>;
};

export const Structure = ({}) => {
  return <CheckListItem title="struktur"></CheckListItem>;
};

export const Form = ({}) => {
  return <CheckListItem title="skjema"></CheckListItem>;
};

export const AutomatedTesting = ({}) => {
  return <CheckListItem title="automatiserte verktøy"></CheckListItem>;
};

export const ScreenReader = ({}) => {
  return <CheckListItem title="skjermlesing"></CheckListItem>;
};

export const UserTesting = ({}) => {
  return <CheckListItem title="brukertesting"></CheckListItem>;
};
