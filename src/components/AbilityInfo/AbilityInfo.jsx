import React from "react";
import { useParams } from "react-router-dom";
import AbilitiesCard from "../AbilitiesCard/AbilitiesCard";

export default function PokemonInfo() {
    const {id} = useParams();
    return(
        <AbilitiesCard id = {id} />
    )
}