import Home from "./pages/Home";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/Header";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Routes