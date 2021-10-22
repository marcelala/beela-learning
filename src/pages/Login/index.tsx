// NPM packages
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import FormFields from "../../components/FormFields";
import { login } from "../../firebaseServices/authentication";

export default function Login() {
  // Global state
  const history = useHistory();
  // Local state
  const loginFields = require("../../data/fields-login.json");
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;
  const [errorMessage, setErrorMessage] = useState("");
  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login({ email, password });
    history.push("/admin-home");
  }

  return (
    <section id="login">
      <h1>Log in</h1>
      <form onSubmit={(e) => handleLogin}>
        <FormFields fields={loginFields} state={[form, setForm]} />
        <p>{errorMessage}</p>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
