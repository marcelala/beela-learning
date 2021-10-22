// dependencies
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
//project files
import { authInstance } from "./firebase";
type iProps = {
  email: string;
  password: string;
};

export async function register({ email, password }: iProps) {
  const account = { isCreated: false, payload: "" };

  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = userCredential.user.uid;
    console.log(userCredential);
  } catch (error) {
    console.error("authentication.js error", error);
    // @ts-ignore
    account.payload = error.code;
  }
  return account;
}

export async function login({ email, password }: iProps) {
  const account = { isLogged: false, payload: "" };
  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isLogged = true;
    account.payload = userCredential.user.uid;
    console.log(userCredential);
  } catch (error) {
    console.error("authentification.js error", error);
    alert("Login failed");
    // @ts-ignore
    account.payload = error.code;
  }
  return account;
}
