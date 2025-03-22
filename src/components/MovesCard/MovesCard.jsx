import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MovesCard( {id} )
{
    const [MovesData, setMovesData ] =useState( {} );

    useEffect( () => {
        axios.get( `https://pokeapi.co/api/v2/move/${id}` )
        .then( (response) => {
            setMovesData( response.data );
        })
        .catch( (error) => {
            window.alert( "Something went wrong" );
            console.log( error );
        })
    })

    return( 
        <h1> Moves : {id} </h1>
    )
}