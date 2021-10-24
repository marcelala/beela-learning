import InputImage from "../../components/InputImage";
import iTopic from "../../interfaces/iTopic";
import FormFields from "../../components/FormFields";
import { newTopic } from "../../types/newTopic";
import { FormEvent, useState } from "react";
// Interface
interface iProps {
  topic: iTopic;
  onSubmit: Function;
  onChange: Function;
}
export default function TopicForm({ onSubmit, topic, onChange }: iProps) {
  const topicFields = require("../../data/fields-topic.json");
  const [form, setForm] = useState(newTopic);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form onSubmit={(event: FormEvent) => onSubmit(event)}>
      <InputImage
        onChange={onChange}
        state={[form, setForm]}
        path={`thumbnailURL_${topic.id}`}
        key={"thumbnailURL"}
      />
      <InputImage
        onChange={onChange}
        state={[form, setForm]}
        path={`topicImageURL_${topic.id}`}
        key={"topicImageURL"}
      />
      <FormFields fields={topicFields} state={[form, setForm]} />
      <p>{errorMessage}</p>
    </form>
  );
}
