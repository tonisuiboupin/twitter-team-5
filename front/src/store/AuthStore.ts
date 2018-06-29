import {action, observable} from "mobx";
import TwitterApi from "../service/TwitterApi";

class AuthStore {
    @observable isModalOpen: boolean;
    @observable username: string;
    @observable password: string;

    @observable authToken: string;

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
        try {
            const response = await TwitterApi.authenticate(this.username, this.password);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };

}

export default AuthStore;