import { ItemBox } from "components/atoms/FormItemBox";
import { SubmitButton } from "components/atoms/SubmitButton";
import { MouseEventHandler } from "react";

interface Props {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function FormButton({ text, onClick }: Props) {
    return (
        <ItemBox>
            <SubmitButton onClick={onClick}>
                {text}
            </SubmitButton>
        </ItemBox>
    )
};
