import * as React from 'react';
import {inject, observer} from "mobx-react";
import AuthStore from "../store/AuthStore";
import Typography from "@material-ui/core/Typography";
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
                    <div className="login-modal">
                        <Typography variant="title" id="modal-title">
                            Text in a modal
                        </Typography>
                        <Typography variant="subheading" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default LoginModal;
