import InputFile from "../../components/InputFile";
import iTopic from "../../interfaces/iTopic";
import InputField from "../../components/InputField";
import { newFile } from "../../types/newFile";
import { useState } from "react";
import {
  createDocument,
  updateDocument,
} from "../../firebaseServices/firestore";
import Type from "../../types/reducerTypes";
import iFile from "../../interfaces/iFile";
import { useTopicsData } from "../../context/TopicsContext";
// Interface
interface iProps {
  topic: iTopic;
}
export default function FileForm({ topic }: iProps) {
  const { dispatch } = useTopicsData();

  const fileFields = require("fields/fields-file-upload.json");
  const [file, setFile] = useState(newFile);
  const { fileTitle, fileDescription, fileType, fileURL } = file;

  function handleChange(key: string, value: string) {
    const field = { [key]: value };
    setFile({ ...topic, ...file, ...field });
  }
  async function onSave(topic: iTopic, file: iFile) {
    const documentID = await createDocument(`topics/${topic.id}/files`, file);
    await updateDocument("topics", topic);
    dispatch({ type: Type.UPDATE_TOPIC, payload: topic });
  }
  return (
    <form className="file-form" onSubmit={() => onSave(topic, file)}>
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
