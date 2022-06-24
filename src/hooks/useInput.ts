import { useState } from "react"


const useInput = (initial: any) => {
    const [value, setValue] = useState(initial);

    const onChange = (event: any) => {
        const { target: { value } } = event;
        setValue(value);
    }

    return { value, onChange };
}   