import CardForm from "components/molecules/CardForm";
import Header from "components/organisms/Header";
import useAuth from "hooks/useAuth";
import useContents from "hooks/useContents";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStorage } from "services/storages"

export default function Contents() {
    return (
        <div>
            <CardForm
                imageSource="https://d1lbsellgkzwc6.cloudfront.net/a36736b4320f40bb97c84a1f65ee97c0"
                title="backStage"
                width={"12rem"} />
        </div>
    )
};
