//project files

import InputField from "./InputField";

export default function FormFields(fields:any, state: [any, any] ) {
    const [form, setForm] = state;
    // Methods
    function onChange(key:string, value: any) {
        const field = { [key]: value };

        setForm({ ...form, ...field });
    }

    // Components
    const FormFields = fields.map((item:any) => (
        <InputField
            key={item.key}
            settings={item}
            state={form[item.key]}
            onChange={onChange}
        />
    ));

    return <>{FormFields}</>;
}