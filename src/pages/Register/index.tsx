// dependencies
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

// Project files
import FormFields from "../../components/FormFields";
import fields from "../../data/fields-sign-up.json";
import { register } from "../../firebaseServices/authentication";
import { createDocumentWithId } from "../../firebaseServices/firestore";

export default function Register() {
  // Global state
  const history = useHistory();
  // Local state
  const [form, setForm] = useState({
    name: "",
    city: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Methods
  async function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setErrorMessage("");
    const account = await register({form.email, form.password});

    account.isCreated ? onSuccess() : onFailure();
  }

  async function onSuccess(uid) {
    const newUser = { name: form.name, city: form.city };

    await createDocumentWithId("users", uid, newUser);
    setUser(newUser);
    setIsLogged(true);
    history.push("/");
  }

  function onFailure(message: any) {
    setErrorMessage(message);
  }

  return (
    <div>
      <h1>Create an account</h1>
      <form onSubmit={onSubmit}>
        <FormFields fields={fields} state={[form, setForm]} />
        <p>{errorMessage}</p>
        <button>Create account</button>
      </form>
      <Link to="/login">Login instead</Link>
    </div>
  );
}
