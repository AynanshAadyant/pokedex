import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeContent from "../pages/HomeContent.jsx";
import PokemonInfo from "../components/PokemonInfo.jsx/PokemonInfo.jsx";
import HomePage from "../pages/HomePage.jsx";

export default function HomeRoutes()
{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon/:id" element={<PokemonInfo />}></Route>
                <Route></Route>
            </Routes>
        </Router>
    )
}