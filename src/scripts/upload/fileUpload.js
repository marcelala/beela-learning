// Project files
import dataURLToFile from "./dataURLToFile";
import { uploadFile } from "../../firebaseServices/storage";

export async function fileUpload(event, folder) {
  const file = event.target.files[0];
  const fileForFirebase = await dataURLToFile(file, folder);
  const newURL = await uploadFile(fileForFirebase, folder);
  return newURL;
}
