import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import fire from "../../Firebase/config";
import { AuthContext } from "../Auth";


const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await fire
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/searchAdmin");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/searchAdmin" />;
    }

    return (
        <section className="login">
            <h1>Log in</h1>
            <div className="loginContainer">
                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <input name="email" type="email" />

                    <label>Password</label>
                    <input name="password" type="password" />

                    <button className="btnContainer" type="submit">Login</button>
                </form>
            </div>
        </section>
    );
};
    export default withRouter(Login);