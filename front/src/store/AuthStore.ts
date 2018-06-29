import {action, observable} from "mobx";
import TwitterApi from "../service/TwitterApi";

class AuthStore {
    @observable isModalOpen: boolean;
    @observable isAuthenticated: boolean;
    @observable username: string;
    @observable password: string;
    @observable firstName: string;
    @observable lastName: string;
    @observable firstNameHidden: boolean;
    @observable lastNameHidden: boolean;
    @observable loginHidden: boolean;
    @observable registerHidden: boolean;

    @observable authToken: string;

    constructor() {
        this.isModalOpen = false;
        this.isAuthenticated = false;
        this.username = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.firstNameHidden = true;
        this.lastNameHidden = true;
        this.loginHidden = false;
        this.registerHidden = true;
    }

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
            this.isAuthenticated = true
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };

    @action
    handleFirstNameChange = (event: any) => {
        this.firstName = event.target.value;
    };

    handleLastNameChange = (event: any) => {
        this.lastName = event.target.value;
    };
}

export default AuthStore;
