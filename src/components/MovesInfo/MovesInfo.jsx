import React from "react";
import { useParams } from "react-router-dom";
import MovesCard from "../MovesCard/MovesCard.jsx";

export default function MovesInfo() {
    const {id} = useParams();
    return(
        <MovesCard id = {id} />
    )
}