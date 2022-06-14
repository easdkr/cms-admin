import "bootstrap/dist/css/bootstrap.min.css";
import { ChangeEventHandler, KeyboardEventHandler } from "react";

interface Props {
    name: string;
    type: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>
}

export default function Input({ name, type, placeholder, onChange, onKeyDown }: Props) {
    return <input
        name={name}
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
    />
};
