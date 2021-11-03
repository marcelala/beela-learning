// NPM packages
import { FormEvent } from "react";

// Project files
import Placeholder from "assets/images/placeholder.png";
import { uploadImage } from "../scripts/upload/imageUpload";

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
  folder: string;
}

export default function InputImage({
  onChange,
  options,
  state,
  folder,
}: iProps) {
  const { label, key, instructions } = options;

  // Properties
  const Image = state === "" ? Placeholder : state;

  // Methods
  async function onFileChange(event: FormEvent) {
    const image_url = await uploadImage(event, folder);

    onChange(key, image_url);
  }

  return (
    <fieldset className="input-image">
      <label className="custom-file-chooser">
        {label}
        <input
          accept="image/gif, image/jpeg, image/png"
          onChange={(event) => onFileChange(event)}
          type="file"
        />
        <img src={Image} alt="User generated content" />
      </label>
      <small>{instructions}</small>
    </fieldset>
  );
}
