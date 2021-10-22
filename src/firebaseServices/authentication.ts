// dependencies
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
    const authCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = authCredential.user.uid;
  } catch (error) {
    console.error("authentication.js error", error);
    // @ts-ignore
    account.payload = error.code;
  }
  return account;
}

export async function login({ email, password }: iProps) {
  const account = {
    isAuthenticated: false,
    payload: "",
    setIsAuthenticated: false,
  };
  try {
    const authCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isAuthenticated = true;
    account.payload = authCredential.user.uid;
  } catch (error) {
    console.error("authentication.js error", error);
    alert("Login failed");
    // @ts-ignore
    account.payload = error.code;
  }
  return account;
}

export async function logOut() {
  const account = { isSignedOut: false, payload: "" };

  try {
    await signOut(authInstance);
    account.isSignedOut = true;
    account.payload = "Signed out successfully";
  } catch (error) {
    console.error("authentication.js error", error);
    // @ts-ignore
    account.payload = error.code;
  }

  return account;
}
