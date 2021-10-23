// Project files
import dataURLToFile from "./dataURLToFile";
import readImage from "./readImage";
import resizeImage from "./resizeImage";
import { uploadFile } from "../../firebaseServices/storage";

export async function uploadImage(event, filename) {
  const file = event.target.files[0];
  const originalImage = await readImage(file);
  const resizedImaged = await resizeImage(originalImage, 80, 80);
  const imageForFirebase = await dataURLToFile(
    resizedImaged,
    `${filename}.png`
  );
  const newImageURL = await uploadFile(imageForFirebase, filename);

  return newImageURL;
}
