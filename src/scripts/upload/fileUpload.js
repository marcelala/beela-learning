// Project files
import dataURLToFile from "./dataURLToFile";
import { uploadFile } from "../../firebaseServices/storage";

export async function fileUpload(event, filename) {
  const file = event.target.files[0];
  const fileForFirebase = await dataURLToFile(file, `${filename}`);
  const newURL = await uploadFile(fileForFirebase, filename);

  return newURL;
}
