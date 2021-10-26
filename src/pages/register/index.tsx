// dependencies
import { FormEvent, useState } from "react";
import { useHistory, Link } from "react-router-dom";

//project files
import FormFields from "../../components/FormFields";
import { register } from "../../firebaseServices/authentication";
import { createDocumentWithId } from "../../firebaseServices/firestore";
import { useUserData } from "../../context/UserDataContext";
import { useAuthentication } from "../../context/AuthenticationContext";
import { newUser } from "../../types/newUser";

export default function Register() {
  // global state
  const { setUserData } = useUserData();
  const { setIsAuthenticated } = useAuthentication();
  const history = useHistory();
  const signUpFields = require("../../data/fields-sign-up.json");

  // Local state
  const [form, setForm] = useState(newUser);
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const { email, password } = form;
    setErrorMessage("");
    const account = await register({ email, password });
    account.isCreated
      ? await onSuccess(account.payload)
      : onFailure(account.payload);
  }

  async function onSuccess(uid: string) {
    const { fullName, email, phone, city, imageURL, password } = form;
    const newParticipant = {
      fullName: fullName,
      city: city,
      email: email,
      phone: phone,
      imageURL: imageURL,
      userRole: "participant",
    };
    await createDocumentWithId("userData", uid, newParticipant);
    setUserData(newParticipant);
    setIsAuthenticated(true);
    history.push("/");
  }

  function onFailure(message: any) {
    setErrorMessage(message);
  }

  return (
    <div>
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <FormFields fields={signUpFields} state={[form, setForm]} />
        <small>
          Already a member? <Link to="/login">Log in here</Link>
        </small>
        <p>{errorMessage}</p>
        <button>Create account</button>
      </form>
    </div>
  );
}