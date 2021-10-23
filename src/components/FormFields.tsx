//project files
import InputField from "./InputField";

// @ts-ignore
export default function FormFields({ fields, state }) {
  const [form, setForm] = state;
  // Methods
  function onChange(key: string, value: any) {
    const field = { [key]: value };

    setForm({ ...form, ...field });
  }

  // Components
  const FormFields = fields.map((item: any) => (
    <InputField
      key={item.key}
      settings={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

  return <>{FormFields}</>;
}
