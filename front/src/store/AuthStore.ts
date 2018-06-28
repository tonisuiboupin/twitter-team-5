import {action, observable} from "mobx";

class AuthStore {
    @observable isModalOpen: boolean;

    constructor() {
        this.isModalOpen = false;
    }

    @action
    handleOpen = () => {
        this.isModalOpen = true;
    };

    @action
    handleClose = () => {
        this.isModalOpen = false;
    };

}

export default AuthStore;