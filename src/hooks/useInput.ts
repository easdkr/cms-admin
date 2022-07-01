import { useState } from "react"


export const useInput = (initial: string) => {
    const [value, setValue] = useState(initial);

    const onChange = (event: any) => {
        const { target: { value } } = event;
        setValue(value);
    }

    const reset = () => {
        setValue(initial);
    }

    const isEmpty = () => {
        return value.length === 0;
    }

    return { value, onChange, reset, isEmpty };
}   