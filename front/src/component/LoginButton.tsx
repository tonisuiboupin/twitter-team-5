import * as React from 'react';
import {inject, observer} from "mobx-react";
import AuthStore from "../store/AuthStore";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

interface ILoginModalProps {
    authStore?: AuthStore
}

@inject('authStore')
@observer
class LoginButton extends React.Component<ILoginModalProps> {
    private firstNameField: any;
    private lastNameField: any;
    private registerButton: any;
    private loginButton: any;
    private signUpButton: any;
    private backButton: any;

    render() {
        const {authStore} = this.props;

        if (authStore.registerHidden) {
            this.loginButton =
                <Button type="submit" variant="contained" color="primary" onClick={authStore.authenticate}>
                    Log in
                </Button>
            this.signUpButton = <Button type="submit" variant="contained" color="primary" onClick={authStore.signUp}>
                Sign Up
            </Button>
            this.firstNameField = null;
            this.lastNameField = null;
            this.registerButton = null;
            this.backButton = null;
        }
        else {
            this.loginButton = null;
            this.signUpButton = null;
            this.firstNameField = <TextField
                id="first-name-input"
                label="First name"
                className={"auth-first-name"}
                value={authStore.firstName}
                onChange={authStore.handleFirstNameChange}
                margin="normal"
            />
            this.lastNameField = <TextField
                id="last-name-input"
                label="Last name"
                className={"auth-last-name"}
                value={authStore.lastName}
                onChange={authStore.handleLastNameChange}
                margin="normal"
            />
            this.registerButton = <Button type="submit" variant="contained" color="primary" onClick={authStore.register}>
                Register
            </Button>
            this.backButton = <Button type="submit" variant="contained" color="secondary" style={{margin: '5px'}} onClick={authStore.back}>
                Back
            </Button>
        }

        return (
            <div className="login-button-wrapper">
                <Button className="login-button" variant="contained" color="primary"
                        onClick={authStore.handleModalOpen}>
                    Login
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={authStore.isModalOpen}
                    onClose={authStore.handleModalClose}
                >
                    <div className="login-modal-wrapper">
                        <div className="login-modal-title"> Log in to Twitter</div>
                        <div className="login-modal-body">
                            {/*<input type="text" onChange={authStore.handleUsernameChange} placeholder="Enter Username" required/>*/}
                            <TextField
                                id="username-input"
                                label="Username"
                                className="auth-username"
                                value={authStore.username}
                                onChange={authStore.handleUsernameChange}
                                margin="normal"
                            />
                            <br/>
                            <TextField
                                id="password-input"
                                label="Password"
                                className={"auth-password"}
                                type="password"
                                onChange={authStore.handlePasswordChange}
                                autoComplete="current-password"
                                margin="normal"
                            />
                            <br/>
                            {this.firstNameField}
                            <br/>
                            {this.lastNameField}
                            <br/>
                            {this.loginButton}
                            {this.registerButton}
                            {this.backButton}
                        </div>
                        {authStore.registerHidden ? (<div className="login-modal-footer">
                            Don't have an account? {this.signUpButton}
                        </div>) : (<div/>)}</div>
                </Modal>
            </div>
        );
    }
}

export default LoginButton;
