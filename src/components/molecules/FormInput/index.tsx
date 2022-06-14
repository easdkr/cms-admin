import { ItemBox } from "components/atoms/FormItemBox";
import Input from "components/atoms/Input";
import { ChangeEventHandler, KeyboardEventHandler } from "react";
interface Props {
    name: string;
    type: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}
export default function FormInput({
    name,
    type,
    placeholder,
    onChange,
    onKeyDown }: Props) {

    return (
        <ItemBox>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </ItemBox>
    )
};
