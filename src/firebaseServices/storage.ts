// dependencies
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

//project files
import { storageInstance } from "./firebase";

export async function uploadFile(file: any, filename: string = "new-file") {
  const storageReference = ref(storageInstance, filename);
  await uploadBytes(storageReference, file);

  return await getDownloadURL(storageReference);
}
