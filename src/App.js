import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import Search from "./components/pages/Search";
import Contact from "./components/pages/Contact";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
