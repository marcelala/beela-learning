// dependencies
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  User,
} from "firebase/auth";
//project files
import { authInstance } from "./firebase";
import { createDocument, createDocumentWithId } from "./firestore";

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
    await createDocumentWithId("participants", account.payload, {
      email,
      account,
    });
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

export async function sendRecoveryMail(email: string) {
  const account = { isReset: false, payload: "" };

  try {
    await sendPasswordResetEmail(authInstance, email);
    account.payload = "Password reset email sent! Check your inbox";
    account.isReset = true;
  } catch (error) {
    // @ts-ignore
    account.payload = error.code;
  }
  return account;
}

export async function updateCredentials(newPassword: string) {
  const user = authInstance.currentUser;
  // @ts-ignore
  updatePassword(user, newPassword)
    .then(() => {})
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
