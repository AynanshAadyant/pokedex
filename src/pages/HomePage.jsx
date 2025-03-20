import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/NavBar";
import Card from "../components/Card/Card";
import axios from "axios";

export default function HomePage()  {
  const [pokedata, setPokeData] = useState([]);

  const fetchData =  async () => {
      try{
        const pokemon = await axios.get( "https://pokeapi.co/api/v2/pokemon" ) //https://pokeapi.co/api/v2/pokemon <= API
        setPokeData( pokemon.data.results );
      }
      catch( e ) {
        window.alert( "Something went wrong" );
        console.log( e );
      }
  } 
  useEffect( () => {
      fetchData();
  }, []);

    return( 
        <div className="relative w-full h-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-green-300 via-blue-300 to-green-500">
            <Navbar />
            <div className="pokemons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-20 py-5 h-full">
                {
                  
                      pokedata.map( ( pokemon, index) =>{
                      return <Card pokemon={pokemon} key={index} index={index} />}
                  )
                  
                }
                
            </div>
          </div>
        </div>
    )
}