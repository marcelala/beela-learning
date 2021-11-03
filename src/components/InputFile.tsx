// NPM packages
import { FormEvent, useState } from "react";

// Project files
import Placeholder from "assets/images/placeholder.png";
import { fileUpload } from "../scripts/upload/fileUpload";
import iTopic from "../interfaces/iTopic";

// Interfaces
interface iFields {
  key: string;
  label: string;
  instructions: string;
}
interface iProps {
  onChange: Function;
  options: iFields;
  state: any;
  item: iTopic;
}

export default function InputFile({ onChange, options, state, item }: iProps) {
  const { label, key, instructions } = options;
  const { id, title } = item;
  // Properties
  const File = state === "" ? Placeholder : state;

  // Methods
  async function onFileChange(event: FormEvent) {
    const folder = `${title}_${id}`;
    const file_url = await fileUpload(event, folder);
    alert("File uploaded");
    onChange(key, file_url);
  }

  return (
    <fieldset className="input-file">
      <label className="custom-file-chooser">
        {label}
        <input onChange={(event) => onFileChange(event)} type="file" />
        <a href={File} target="_blank" rel="noreferrer">
          Download file
        </a>
      </label>
    </fieldset>
  );
}
