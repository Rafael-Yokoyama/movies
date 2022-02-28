import Home from "./pages/Home";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import Erro from "./pages/Error";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/films/:id" component={Movie} />
                <Route exact path="/favorites" component={Favorites} />
                <Route path="*" component={Erro} />               
            </Switch>
        </BrowserRouter>

    )
}

export default Routes