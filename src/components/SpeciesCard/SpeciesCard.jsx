import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SpeciesCard( {id} )
{
    const [SpeciesData, getSpeciesData ] =useState( {} );

    useEffect( () => {
        axios.get( `https://pokeapi.co/api/v2/pokemon-species/${id}` )
        .then( (response) => {
            getSpeciesData( response.data );
        })
        .catch( (error) => {
            window.alert( "Something went wrong" );
            console.log( error );
        })
    })

    return( 
        <h1> Species: {id}  </h1>
    )
}