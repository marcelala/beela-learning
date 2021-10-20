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
  try {
    const user = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    console.log(user);
  } catch (error) {
    // @ts-ignore
    console.log(error.message);
  }
}

export async function login({ email, password }: iProps) {
  try {
    const user = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    console.log(user);
  } catch (error) {
    // @ts-ignore
    console.log(error.message);
  }
}

export async function logout() {}
