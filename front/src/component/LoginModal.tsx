// import * as React from 'react';
// import {inject, observer} from "mobx-react";
// import AuthStore from "../store/AuthStore";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Modal from "@material-ui/core/Modal";
//
// interface ILoginModalProps {
//     authStore?: AuthStore
// }
//
// @inject('authStore')
// @observer
// class LoginModal extends React.Component<ILoginModalProps> {
//
//     rand() {
//         return Math.round(Math.random() * 20) - 10;
//     }
//
//     getModalStyle() {
//         const top = 50 + this.rand();
//         const left = 50 + this.rand();
//
//         return {
//             top: `${top}%`,
//             left: `${left}%`,
//             transform: `translate(-${top}%, -${left}%)`,
//         };
//     }
//
//     render() {
//         const {authStore} = this.props;
//
//         return (
//             <div>
//                 <Typography gutterBottom>Click to get the full Modal experience!</Typography>
//                 <Button onClick={authStore.handleOpen}>Open Modal</Button>
//                 <Modal
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                     open={authStore.isModalOpen}
//                     onClose={authStore.handleClose}
//                 >
//                     <div style={this.getModalStyle()} className={"login-modal"}>
//                         <Typography variant="title" id="modal-title">
//                             Text in a modal
//                         </Typography>
//                         <Typography variant="subheading" id="simple-modal-description">
//                             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                         </Typography>
//                     </div>
//                 </Modal>
//             </div>
//         );
//     }
// }
//
// export default LoginModal;
