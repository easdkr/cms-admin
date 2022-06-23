
import styled from "styled-components";

interface Props {
    imageSource: string;
    width: any;
    title: string;
}

export default function CardForm({ imageSource, width, title }: Props) {
    return (
        <CardContainer width={width} className="card text-white" color="warning">
            <img src={imageSource}
                className="card-img-top"
                alt="..." />
            <CardBody className="card-body">
                <div className="card-title">{title}</div>
            </CardBody>
        </CardContainer >
    )
};

const CardContainer = styled.div<{ width: any }>`
    width: ${props => props.width};
    background-color: white;
`


const CardBody = styled.div`
    background-color: #464646;
`    
