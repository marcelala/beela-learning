import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDocument } from "../../firebaseServices/firestore";
import { useTopicsData } from "../../context/TopicsContext";
import Type from "../../types/reducerTypes";
import iFile from "../../interfaces/iFile";
import iTopic from "../../interfaces/iTopic";
import InputFile from "../../components/InputFile";
import InputField from "../../components/InputField";
import { newFile } from "../../types/newFile";

// Interface
interface iProps {
  topic: iTopic;
}
export default function FileForm({ topic }: iProps) {
  const { dispatch } = useTopicsData();
  const history = useHistory();
  const fileFields = require("fields/fields-file-upload.json");
  const [updatedTopic, setUpdatedTopic] = useState(topic);
  const [file, setFile] = useState(newFile);
  const { fileTitle, fileDescription, fileType, fileURL } = file;
  const { id, files } = topic;

  function handleChange(key: string, value: string) {
    const field = { [key]: value };
    setFile({ ...file, ...field });
    setUpdatedTopic({
      ...updatedTopic,
      files: { ...updatedTopic.files, file },
    });
  }
  async function onSave(topic: iTopic, file: iFile, e: FormEvent) {
    const documentID = await createDocument(`topics/${topic.id}/files`, file);
    dispatch({ type: Type.UPDATE_TOPIC, payload: topic });
    (await documentID)
      ? alert("File added successfully")
      : alert(" Yikes, there was a problem adding this file");
    history.push("/topics");
  }
  return (
    <form className="file-form" onSubmit={(e) => onSave(topic, file, e)}>
      <InputField
        onChange={handleChange}
        settings={fileFields.fileTitle}
        state={fileTitle}
      />
      <InputField
        onChange={handleChange}
        settings={fileFields.fileDescription}
        state={fileDescription}
      />
      <InputField
        onChange={handleChange}
        settings={fileFields.fileType}
        state={fileType}
      />
      <InputFile
        onChange={handleChange}
        options={fileFields.fileURL}
        state={fileURL}
        item={topic}
      />
      <button type={"submit"}>Save resource</button>
    </form>
  );
}
