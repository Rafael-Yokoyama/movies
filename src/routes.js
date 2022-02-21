import Home from "./pages/Home";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header";
import Movie from "./pages/Movie";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}>
                    <Home />
                </Route>
                <Route exact path="/films/:id" component={Movie}>
                    <Movie/>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Routes