//dependencies
import { useRef } from "react";

interface iProps {
    settings: {
        key: string;
        instructions: string;
        label: string;
        placeholder: string;
        type: string;
    };
    state: any;
    onChange: any;
}

export default function InputField({ onChange, settings, state }: iProps) {
    const { key, label, placeholder, type, instructions } = settings;

    // Properties
    const inputReference = useRef<HTMLInputElement>(null);

    return (
        <fieldset>
            <label>
                {label}
                <input
                    onChange={() => onChange(key, inputReference.current?.value)}
                    placeholder={placeholder}
                    ref={inputReference}
                    type={type}
                    value={state}
                />
            </label>
            <small>{instructions}</small>
        </fieldset>
    );
}