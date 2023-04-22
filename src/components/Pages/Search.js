import "./Search.css";
import Login from "../Login";
import {useEffect, useState} from "react";
import fire from "../../Firebase/config";
import Hero from "../Hero";
import {Link} from "react-router-dom";

const Search = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const [isAdmin, setIsAdmin] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }
/*
    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignUP = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };*/

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, [])

    const handleAdminToggle = () => {
       /* if (!isAdmin) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }*/
    };

    return(
            <div className="search-container">
                <h1>Welcome to the Search page</h1>
                <Link to="/LoginTwo"><button className="button-admin"> Admin Login </button></Link>
                {/*<button onClick={handleAdminToggle}>Admin</button>*/}

                {/*{ isAdmin ? (
                    <Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignUP}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passWordError={passwordError}
                    />
                    ) : (
                        <Hero/>
                    )}*/}

                { isAdmin && hasAccount ? <>
                    <p> Is an admin and has an account</p>
                </> : (
                    <>
                        <p>Is not an admin and does not have and account.</p>
                    </>
                )
                }
            </div>
    );
};

export default Search;