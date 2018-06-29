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

    render() {
        const {authStore} = this.props;

        return (
            <div>
                <Button className="login-button" variant="contained" color="primary" onClick={authStore.handleModalOpen}>
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
                            <br />
                            <TextField
                                id="password-input"
                                label="Password"
                                className={"auth-password"}
                                type="password"
                                onChange={authStore.handlePasswordChange}
                                autoComplete="current-password"
                                margin="normal"
                            />

                            <br />
                            <Button type="submit" variant="contained" color="primary" onClick={authStore.authenticate}>
                                Log in
                            </Button>
                            <button type="submit" onClick={authStore.authenticate}>Log in</button>
                        </div>
                        <div className="login-modal-footer"/>
                        Don't have an account? Sign up >>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default LoginButton;
