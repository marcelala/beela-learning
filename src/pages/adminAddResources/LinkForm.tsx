import iTopic from "../../interfaces/iTopic";
import InputField from "../../components/InputField";
import { useTopicsData } from "../../context/TopicsContext";
import { newLink } from "../../types/newLink";
import { FormEvent, useState } from "react";
import { createDocument } from "../../firebaseServices/firestore";
import Type from "../../types/reducerTypes";
import iLink from "../../interfaces/iLink";
import { useHistory } from "react-router-dom";
// Interface
interface iProps {
  topic: iTopic;
}
export default function LinkForm({ topic }: iProps) {
  const { dispatch } = useTopicsData();
  const history = useHistory();
  const linkFields = require("fields/fields-link.json");
  const [link, setLink] = useState(newLink);
  const [updatedTopic, setUpdatedTopic] = useState(topic);
  const { linkTitle, linkDescription, linkURL } = link;

  function handleChange(key: string, value: string) {
    const field = { [key]: value };
    setLink({ ...link, ...field });
    setUpdatedTopic({
      ...updatedTopic,
      /*
      links: { ...updatedTopic.links, link },
*/
    });
  }
  async function onSave(topic: iTopic, link: iLink, e: FormEvent) {
    e.preventDefault();
    const documentID = await createDocument(`topics/${topic.id}/links`, link);
    await dispatch({ type: Type.UPDATE_TOPIC, payload: updatedTopic });
    (await documentID)
      ? alert("Link added successfully")
      : alert(" Yikes, there was a problem adding this link");
    history.push("/topics");
  }

  return (
    <form className="link-form" onSubmit={(e) => onSave(topic, link, e)}>
      <InputField
        onChange={handleChange}
        settings={linkFields.linkTitle}
        state={linkTitle}
      />
      <InputField
        onChange={handleChange}
        settings={linkFields.linkDescription}
        state={linkDescription}
      />
      <InputField
        onChange={handleChange}
        settings={linkFields.linkURL}
        state={linkURL}
      />
      <button type={"submit"}>Save resource</button>
    </form>
  );
}
