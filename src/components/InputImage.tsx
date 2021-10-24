// NPM packages
import { FormEvent, useRef } from "react";

// Project files
import Placeholder from "assets/images/placeholder.png";
import { uploadImage } from "../scripts/uploadImage";

// Interface
interface iProps {
  onChange: Function;
  state: any;
  path: string;
}

export default function InputImage({ onChange, state, path }: iProps) {
  const [form, setForm] = state;

  // Properties
  const inputReference = useRef<HTMLInputElement>(null);

  const Image = state === "" ? Placeholder : state;

  // Methods
  async function onFileChange(event: FormEvent) {
    const image_url = await uploadImage(event, path);
    setForm(image_url);
    onChange(image_url);
  }

  return (
    <fieldset className="input-image">
      <label className="custom-file-chooser">
        <input onChange={(event) => onFileChange} type="file" />
        <img src={Image} alt="User generated content" />
      </label>
      <small>Add a png picture above</small>
    </fieldset>
  );
}
