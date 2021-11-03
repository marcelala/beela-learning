// Project files
import dataURLToFile from "./dataURLToFile";
import { uploadFile } from "../../firebaseServices/storage";
import readImage from "./readImage";

export async function fileUpload(event, folder) {
  const file = event.target.files[0];
  const originalFile = await readImage(file);
  const fileForFirebase = await dataURLToFile(originalFile, folder);
  const newURL = await uploadFile(fileForFirebase, folder);
  return newURL;
}
