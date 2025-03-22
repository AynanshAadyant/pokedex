import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AbilitiesCard( {id} ) 
{
    const [abilties, setAbilities ] = useState([]);

    useEffect( () => {
        axios.get( `https://pokeapi.co/api/v2/ability/${id}` )
        .then( (response) => {
            setAbilities( response.data.effect_entries[0] );
        })
        .catch( (err) => {
            window.alert( "Something went wrong" );
            console.log( err );
        })
    });

    return (
        <div className="p-10 border-0 border-rounded bg-gray-500/50 blur-3xl">
            <h1> {abilties.effect} </h1>
            <h1> {abilties.short_effect} </h1>
        </div>
        
    )
}