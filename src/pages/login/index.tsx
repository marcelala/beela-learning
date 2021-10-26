// dependencies
import { FormEvent, useState } from "react";
import { useHistory, Link } from "react-router-dom";

// project files
import FormFields from "../../components/FormFields";
import { login } from "../../firebaseServices/authentication";
import { useAuthentication } from "../../context/AuthenticationContext";
import { useUserData } from "../../context/UserDataContext";
import { getDocument } from "../../firebaseServices/firestore";

export default function Login() {
  // Global state
  const history = useHistory();
  const { setUserData } = useUserData();
  const { setIsAuthenticated } = useAuthentication();
  // Local state
  const loginFields = require("../../data/fields-login.json");
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    const account = await login({ email, password });
    account.setIsAuthenticated
      ? await onSuccess(account.payload)
      : onFailure(account.payload);
  }

  async function onSuccess(uid: string) {
    const document = await getDocument("userData", uid);
    setUserData(document);
    setIsAuthenticated(true);
    history.push("/home");
  }

  function onFailure(message: string) {
    setErrorMessage(message);
    history.push("/");
  }

  return (
    <section id="login">
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <FormFields fields={loginFields} state={[form, setForm]} />
        <Link to={"/recovery"}>
          <small>Forgot your password?</small>
        </Link>
        <small>
          Not a member yet? <Link to="/register">Sign up here</Link>
        </small>

        <p>{errorMessage}</p>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
