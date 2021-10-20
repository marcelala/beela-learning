// NPM packages
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import fields from "../../data/fields-login.json";
import { getDocument } from "../../firebaseServices/firestore";
import * as events from "events";
import FormFields from "../../components/FormFields";

export default function Login() {
  // Global state
  const history = useHistory();
  // Local state
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  async function login() {}

  return (
    <div>
      <h1>Log in</h1>
      <form>
        <FormFields fields={fields} state={[form, setForm]} />
        <p>{errorMessage}</p>
        <button>Login</button>
      </form>
    </div>
  );
}
