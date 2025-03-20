import React from "react";
import { useParams } from "react-router-dom";
import ReadMorePage from "../../pages/ReadMorePage.jsx";

export default function PokemonInfo() {
    const {id} = useParams();
    console.log( id );
    return(
        <ReadMorePage id = {id} />
    )
}