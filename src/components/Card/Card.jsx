import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Card( {pokemon, index } ) {

    const [image, setImage] = useState("default.jpeg");

    const getImg = () => {
        axios.get( pokemon.url )
        .then( (response) => {
            setImage( response.data.sprites.other.dream_world.front_default );
        })
        .catch( (err) => {
            setImage( "default.img" );
        })
    }
    console.log( )
    useEffect( () => {
        getImg();
    }, [] );


    return(
        <Link className="cursor-pointer" to={`/pokemon/${index+1}`}>
        <div className="bg-gray-300/50 backdrop:blur-2xl border-2 border-gray-500/20 w-auto h-auto flex flex-col p-8 rounded-2xl shadow-md shadow-gary-600 transition-transform duration-200 hover:scale-105
        gap-4">
            <img src={image} alt="pokemon img" className="h-52 w-auto  " />
            <div className="text">
                <h1 className="cursor-default"> {pokemon.name.toUpperCase()} </h1> 
            </div>        
        </div>
        </Link> 
    )
}