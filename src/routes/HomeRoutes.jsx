import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PokemonInfo from "../components/PokemonInfo.jsx/PokemonInfo.jsx";
import HomePage from "../pages/HomePage.jsx";
import StatsPage from "../pages/StatsPage.jsx";
import SpeciesPage from "../pages/SpeciesPage.jsx";
import MovesPage from "../pages/MovesPages.jsx";
import FormsPage from "../pages/FormsPage.jsx"
import AbilitiesPage from "../pages/AbilitesPage.jsx";
import TypesPage from "../pages/TypesPage.jsx";

export default function HomeRoutes()
{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon/:id" element={<PokemonInfo />}></Route>
                <Route path="/ability/:id" element={<AbilitiesPage />}></Route>
                <Route path="/type/:id" element={<TypesPage />}></Route>
                <Route path="/stats/:id" element={<StatsPage />}></Route>
                <Route path="/species/:id" element={<SpeciesPage />}></Route>
                <Route path="/moves/:id" element={<MovesPage />}></Route>
                <Route path="/forms/:id" element={<FormsPage />}></Route>
            </Routes>
        </Router>
    )
}