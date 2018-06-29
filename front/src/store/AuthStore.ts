import {action, observable} from "mobx";
import TwitterApi from "../service/TwitterApi";

class AuthStore {
    @observable isModalOpen: boolean;
    @observable isAuthenticated: boolean;
    @observable username: string;
    @observable password: string;

    @observable authToken: string;

    constructor() {
        this.isModalOpen = false;
        this.isAuthenticated = false;
        this.username = "";
        this.password = "";
    }

    @action
    authenticate = async () => {
        TwitterApi.authenticate(this.username, this.password)
            .then(() => this.isAuthenticated = true)
            .catch(err => console.error("Failed to authenticate user:" + this.username, err));
    };

    @action
    handleModalOpen = () => {
        this.isModalOpen = true;
    };

    @action
    handleModalClose = () => {
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