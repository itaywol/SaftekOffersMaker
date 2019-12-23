import React, {
  ChangeEvent,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction
} from "react";
import "./App.scss";
interface FieldProps {
  label: string;
  type: string;
  value: Dispatch<SetStateAction<string>>;
  children?: ReactNode;
}

interface useFieldProps {
  label: string;
  type: string;
}
const Field: React.FC<FieldProps> = (props: FieldProps) => {
  const { label, type, value } = props;
  return (
    <div className="field">
      <span>{label}:</span>
      <input
        type={type}
        title={label}
        alt={label}
        onChange={e => value(e.target.value)}
      />
    </div>
  );
};

const useField: any = (Props: useFieldProps) => {
  const { label, type } = Props;
  const [value, changeValue] = useState("");
  return [<Field label={label} type={type} value={changeValue} />, value];
};

const App: React.FC = () => {
  const [emailField, emailValue] = useField({ label: "Email", type: "email" });
  const [descriptionField, descriptionValue] = useField({
    label: "Description",
    type: "text"
  });
  return (
    <div className="wrapper">
      <div className="formWrapper">
        {emailField}
        {descriptionField}
      </div>
    </div>
  );
};

export default App;
