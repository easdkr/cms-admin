import CardForm from "components/molecules/MediaCard";
import Size from "utils/styles/size";

export default function Contents() {
    return (
        <div>
            <CardForm
                imageSource="https://d1lbsellgkzwc6.cloudfront.net/a36736b4320f40bb97c84a1f65ee97c0"
                title="backStage"
                width={Size.card.PC_WIDTH} />
        </div>
    )
};
