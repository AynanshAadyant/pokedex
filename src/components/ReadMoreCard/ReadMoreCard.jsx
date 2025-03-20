import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../NavBar/NavBar";

export default function ReadMoreCard( {id} )
{
    const [pokemon, setPokemon ] = useState();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(
            ( response ) =>{
                setPokemon( response.data );
            }
        )   
        .catch( (err ) => {
            window.alert("Error" );
            console.log(err );
        }
        )
        }, [id]
    );

    if (!pokemon) return <div className="text-white text-center p-10">Loading...</div>;

    return (
          <div className="content h-full p-10">
            <div className="card p-8 border-2 border-gray-50 rounded-3xl flex flex-wrap flex-row gap-10">
                <div className="image">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
                    <img src={pokemon.sprites.other.showdown.front_default} alt="" className="h-20" />
                    
                </div>
                <div className="info text-2xl">
                    <h1 className=""> {pokemon.name.toUpperCase()} </h1>
                    <h1> Height : {pokemon.height} </h1>
                    <h1> Weight : {pokemon.weight} </h1>
                    <ul className="flex flex-row gap-3 "> Type : {
                        pokemon.types.map( (type ) => 
                            <li key={type.slot} className="border-r-black border-r-1 pr-2"> {type.type.name} </li>
                        )
                    }</ul>
                    <ul className="abilites flex flex-row"> Ability :  | 
                        {
                            pokemon.abilities.map( (ability, index ) => 
                                <li key={index}> {ability.ability.name} | </li>
                            )
                        }
                    </ul>
                    <ul className="stats"> Stats:
                        {
                            pokemon.stats.map( (stats, index ) => 
                                <li key={index}> {stats.stat.name} : {stats.base_stat} </li>
                            )
                        }
                    </ul>
                    <h1> Species : {pokemon.species.name} </h1>
                    <h1> Forms : {pokemon.forms.name} </h1>
                    <h1> Location Encountered: {pokemon.location_area_encounters} </h1>
                    
                    <div className="cries">
                        <h1><audio src={pokemon.cries.latest}> Latest  </audio> </h1>
                        <audio src={pokemon.cries.legacy}> Legacy </audio>
                    </div>
                </div>
            </div>
          </div>
      );
    };

