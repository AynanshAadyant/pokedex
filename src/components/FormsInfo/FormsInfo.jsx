import React from "react";
import { useParams } from "react-router-dom";
import FormsCard from "../FormsCard/FormsCard.jsx";

export default function FormsInfo() {
    const {id} = useParams();
    return(
        <FormsCard id = {id} />
    )
}