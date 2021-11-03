// Project files
import dataURLToFile from "./dataURLToFile";
import readImage from "./readImage";
import resizeImage from "./resizeImage";
import { uploadFile } from "../../firebaseServices/storage";

export async function uploadImage(event, folder) {
  const file = event.target.files[0];
  const originalImage = await readImage(file);
  const resizedImage = await resizeImage(originalImage, 300, 180);
  const imageForFirebase = await dataURLToFile(resizedImage, folder);
  const newImageURL = await uploadFile(imageForFirebase, folder);

  return newImageURL;
}
