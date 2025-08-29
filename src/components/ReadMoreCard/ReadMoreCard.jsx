import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <div className="content p-10">
            <div className="card p-8 border-2 border-gray-50 rounded-3xl flex flex-wrap flex-row gap-10 h-full">
                <div className="image">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
                    <img src={pokemon.sprites.other.showdown.front_default} alt="" className="h-20" />
                    
                </div>
                <div className="info text-2xl">
                    <h1 className=""> {pokemon.name.toUpperCase()} </h1>
                    <h1> Height : {pokemon.height} </h1>
                    <h1> Weight : {pokemon.weight} </h1>

                    <ul className="types flex flex-row gap-3 "> Type : {
                        pokemon.types.map( (type ) => {
                            const url = type.type.url;
                            const typesId = url.split( '/' ).filter( Boolean ).pop();
                            return(
                                <Link to={`/type/${typesId}`} key={type.slot} className="border-r-black border-r-1 pr-2"> {type.type.name} </Link>
                            )    
                        }
                        )
                    }</ul>
                    <ul className="abilites flex flex-row"> Ability :  | 
                        {
                            pokemon.abilities.map( (ability, index ) => {
                                const url = ability.ability.url;
                                const abilityId = url.split( '/' ).filter( Boolean ).pop();
                                console.log( abilityId );
                                return( 
                                    <Link to={`/ability/${abilityId}`} key={index} > {ability.ability.name} </Link>
                                )
                            }
                            )
                        }
                    </ul>
                    <ul className="stats"> Stats:
                        {
                            pokemon.stats.map( (stats, index ) => {
                                const url = stats.stat.url;
                                const statsId = url.split( "/" ).filter(Boolean).pop();
                                return(
                                    <Link to={`/stats/${statsId}`} key={index}> {stats.stat.name} : {stats.base_stat} </Link>
                                )
                            }
                                
                            )
                        }
                    </ul>
                    <h1> Species : <Link to={`/species/${id}`}> {pokemon.species.name} </Link> </h1>
                    <h1> Forms :  <Link to={`/forms/${id}`}> {pokemon.forms.name} </Link> </h1>
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

