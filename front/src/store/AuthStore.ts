import {action, observable} from "mobx";
import TwitterApi from "../service/TwitterApi";

class AuthStore {
    @observable isModalOpen: boolean;
    @observable username: string;
    @observable password: string;

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

    @action
    handleUsernameChange = (event: any) => {
        this.username = event.target.value;
    };

    @action
    handlePasswordChange = (event: any) => {
        this.password = event.target.value;
    };

    @action
    authenticate = async () => {
        await TwitterApi.authenticate(this.username, this.password);
    };

}

export default AuthStore;