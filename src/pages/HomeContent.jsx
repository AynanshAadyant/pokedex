import React from "react";
import Card from "../components/Card/Card.jsx";
import Navbar from "../components/NavBar/NavBar";

export default function HomeContent()
{
    const [pokedata, setPokeData] = useState([]);
    const fetchData =  async () => {
        await axios.get( "https://pokeapi.co/api/v2/pokemon" ) //https://pokeapi.co/api/v2/pokemon <= API
        .then( (response) => {
            setPokeData(response.data.results );
        })
        .catch( (err) => {
            window.alert( "Something went wrong", err);
        } )
    } 
    useEffect( () => {
        fetchData();
    }, [])
    console.log( pokedata );
    return(
        <>
            <Navbar />
     import React from "react";
       <div className="pokemons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-20 py-5">
                {

                }
            </div>
        </>
    )
}