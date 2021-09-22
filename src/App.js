import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import Search from "./components/Pages/Search";
import Contact from "./components/Pages/Contact";
import NavBar from "./components/NavBar/NavBar";
import AdminPage from "./components/Pages/AdminPage";
import {AuthProvider} from "./components/Auth";
import SearchAndUploadPage from "./components/Pages/SearchAndUploadPage";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/Pages/SignUp";
import LoginTwo from "./components/Pages/LoginTwo";

function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact>
                        <Homepage/>
                    </Route>

                    <Route path="/search">
                        <Search/>
                    </Route>

                    <PrivateRoute exact path="/searchAdmin" component={SearchAndUploadPage}/>

                    <Route path="/contact">
                        <Contact/>
                    </Route>

                    <Route path="/adminLogin">
                        <AdminPage/>
                    </Route>

                    <Route path="/SignUp">
                        <SignUp/>
                    </Route>

                    <Route path="/LoginTwo" >
                        <LoginTwo/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
