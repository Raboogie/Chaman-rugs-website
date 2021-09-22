import React, {useCallback} from "react";
import {withRouter} from "react-router";
import fire from "../../Firebase/config";

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <section className="login">
            <h1>Sign up</h1>
            <div className="loginContainer">
                <form onSubmit={handleSignUp}>
                    <label>Email</label>
                    <input name="email" type="email" />

                    <label>Password</label>
                    <input name="password" type="password" />

                    <button className="btnContainer" type="submit">Sign Up</button>
                </form>
            </div>
        </section>
    );
};

export default withRouter(SignUp);