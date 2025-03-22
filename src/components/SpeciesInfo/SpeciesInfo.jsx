import React from "react";
import { useParams } from "react-router-dom";
import SpeciesCard from "../SpeciesCard/SpeciesCard.jsx";

export default function SpeciesInfo() {
    const {id} = useParams();
    return(
        <SpeciesCard id = {id} />
    )
}