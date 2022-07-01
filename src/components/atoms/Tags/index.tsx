import { Chip } from "@mui/material";


export interface TagProps {
    datas: string[];
    color?: "default" | "error" | "primary" | "secondary" | "info" | "success" | "warning",
    size?: "small" | "medium",
    onDelete: (event: any) => void
}

export default function Tags({ ...props }: TagProps) {
    return (
        <>
            {
                props.datas.map((data, index) => {
                    // <Chip 
                    //     sx={}
                    // color={props.color}

                    // />
                })
            }
        </>
    )
};
