import iTopic from "../../interfaces/iTopic";
import InputFile from "../../components/InputFile";
import InputField from "../../components/InputField";
import { newResource } from "../../types/newResource";
import iResource from "../../interfaces/iResource";
import TextArea from "../../components/TextArea";

// Interface
interface iProps {
  topic: iTopic;
  type: string;
  onChange: Function;
  resource: iResource;
}
export default function ResourceForm({
  topic,
  type,
  onChange,
  resource,
}: iProps) {
  const fields = require("./fields-resource.json");

  const urlField =
    type === "file" ? (
      <InputFile
        onChange={onChange}
        options={fields.url}
        state={resource.url}
        item={topic}
      />
    ) : (
      <InputField
        onChange={onChange}
        settings={fields.url}
        state={resource.url}
      />
    );
  return (
    <section className="form">
      <InputField
        onChange={onChange}
        settings={fields.title}
        state={resource.title}
      />
      <TextArea
        onChange={onChange}
        settings={fields.description}
        state={resource.description}
      />
      {urlField}
    </section>
  );
}
