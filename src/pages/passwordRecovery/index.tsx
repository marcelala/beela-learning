// dependencies
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

// Project files
import FormFields from "../../components/FormFields";
import { sendRecoveryMail } from "../../firebaseServices/authentication";

export default function PasswordRecovery() {
  const history = useHistory();
  const recoveryFields = require("./fields-password-recovery.json");
  const [form, setForm] = useState({ email: "", phone: "" });
  const { email, phone } = form;
  const [errorMessage, setErrorMessage] = useState("");

  async function handleRecoveryRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    try {
      const account = await sendRecoveryMail(email);
      account.isReset
        ? alert("Password recovery email sent!")
        : alert("Oops, something went wrong");
      history.push("/");
    } catch (e) {
      setErrorMessage(errorMessage);
    }
  }

  return (
    <section id={"password-recovery"}>
      <h1>Password Recovery</h1>
      <form onSubmit={handleRecoveryRequest}>
        <FormFields fields={recoveryFields} state={[form, setForm]} />
        <p>{errorMessage}</p>
        <button type="submit">Reset password</button>
      </form>
    </section>
  );
}
