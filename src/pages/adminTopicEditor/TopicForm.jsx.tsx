import InputImage from "../../components/InputImage";
import iTopic from "../../interfaces/iTopic";
import InputField from "../../components/InputField";
// Interface
interface iProps {
  topic: iTopic;
  onChange: Function;
}
export default function TopicForm({ topic, onChange }: iProps) {
  const topicFields = require("./fields-topic.json");

  return (
    <section id={"topic-form"}>
      <InputField
        onChange={onChange}
        settings={topicFields.title}
        state={topic.title}
      />
      <InputField
        onChange={onChange}
        settings={topicFields.owner}
        state={topic.owner}
      />
      <InputField
        onChange={onChange}
        settings={topicFields.ownerEmail}
        state={topic.ownerEmail}
      />
      <InputField
        onChange={onChange}
        settings={topicFields.shortDescription}
        state={topic.shortDescription}
      />
      <InputField
        onChange={onChange}
        settings={topicFields.fullDescription}
        state={topic.fullDescription}
      />
      <InputImage
        onChange={onChange}
        options={topicFields.thumbnailURL}
        state={topic.thumbnailURL}
        folder={"topic/topic_thumbnail"}
      />
      <InputImage
        onChange={onChange}
        options={topicFields.topicImageURL}
        state={topic.topicImageURL}
        folder={"topic/topic_image"}
      />
    </section>
  );
}
