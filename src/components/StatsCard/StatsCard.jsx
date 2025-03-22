import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StatsCard( {id} )
{
    const [ StatsData, setStatsData ] =useState( {} );

    useEffect( () => {
        axios.get( `https://pokeapi.co/api/v2/stat/${id}` )
        .then( (response) => {
            setStatsData( response.data );
        })
        .catch( (error) => {
            window.alert( "Something went wrong" );
            console.log( error );
        })
    })

    return( 
        <h1> Stats : {id}  </h1>
    )
}