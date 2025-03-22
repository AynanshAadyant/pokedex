import React from "react";
import { useParams } from "react-router-dom";
import StatsCard from "../StatsCard/StatsCard.jsx";

export default function StatsInfo() {
    const {id} = useParams();
    return(
        <StatsCard id = {id} />
    )
}