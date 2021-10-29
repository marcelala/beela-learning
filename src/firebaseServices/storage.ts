// dependencies
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

//project files
import { storageInstance } from "./firebase";

export async function uploadFile(file: any, folder: string) {
  const filePath = `${folder}/${file.name}_${Date.now()}`;
  const storageReference = ref(storageInstance, filePath);
  await uploadBytes(storageReference, file);

  return await getDownloadURL(storageReference);
}
