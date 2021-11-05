//dependencies
import { useRef, useState } from "react";

interface iProps {
  onChange: Function;
  settings: {
    key: string;
    instructions: string;
    label: string;
    placeholder: string;
    maxLength: number;
    isRequired: boolean;
    minLength: number;
    rows: number;
    cols: number;
  };
  state: any;
}

export default function TextArea({ onChange, settings, state }: iProps) {
  const {
    key,
    label,
    placeholder,
    instructions,
    isRequired,
    maxLength,
    rows,
    cols,
  } = settings;
  const [touched, setTouched] = useState(false);
  // Properties
  const inputReference = useRef<HTMLTextAreaElement>(null);

  return (
    <fieldset className={`fieldset fieldset-${key}`}>
      <label
        onClick={() => setTouched(!touched)}
        className={`label label-${key}`}
      >
        {label}
        <textarea
          onChange={() => onChange(key, inputReference.current?.value)}
          placeholder={placeholder}
          ref={inputReference}
          value={state}
          className={`input-field input-field-${key}`}
          maxLength={maxLength}
          required={isRequired}
          cols={cols}
          rows={rows}
        />
        {touched && <small>{instructions}</small>}
      </label>
    </fieldset>
  );
}
