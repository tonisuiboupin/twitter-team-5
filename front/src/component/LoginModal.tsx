import * as React from 'react';
import {inject, observer} from "mobx-react";
import AuthStore from "../store/AuthStore";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

interface ILoginModalProps {
    authStore?: AuthStore
}

@inject('authStore')
@observer
class LoginModal extends React.Component<ILoginModalProps> {

    render() {
        const {authStore} = this.props;

        return (
            <div>
                <Button className="login-button" variant="contained" color="primary" onClick={authStore.handleOpen}>
                    Login
                </Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={authStore.isModalOpen}
                    onClose={authStore.handleClose}
                >
                    <div className="login-modal-wrapper">
                        <div className="login-modal-title"> Log in to Twitter </div>
                        <div className="login-modal-body">
                            <input type="text" onChange={authStore.handleUsernameChange} placeholder="Enter Username" required />
                            <input type="password" onChange={authStore.handlePasswordChange} placeholder="Enter Password" required />

                            <button type="submit" onClick={authStore.authenticate}>Log in</button>
                        </div>
                        <div className="login-modal-footer"/> Don't have an account? Sign up >>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;
