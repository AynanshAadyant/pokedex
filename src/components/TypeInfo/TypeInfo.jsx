import React from "react";
import { useParams } from "react-router-dom";
import TypeCard from "../TypeCard/TypeCard.jsx";

export default function TypeInfo() {
    const {id} = useParams();
    return(
        <TypeCard id = {id} />
    )
}