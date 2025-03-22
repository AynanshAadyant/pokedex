import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormsCard( {id} )
{
    const [FormsData, setFormsData ] =useState( {} );

    useEffect( () => {
        axios.get( `https://pokeapi.co/api/v2/pokemon-form/${id}` )
        .then( (response) => {
            setFormsData( response.data );
        })
        .catch( (error) => {
            window.alert( "Something went wrong" );
            console.log( error );
        })
    })

    return( 
        <h1> Forms : {id} </h1>
    )
}