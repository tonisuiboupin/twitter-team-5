import {action, observable, runInAction} from "mobx";
import TwitterApi from "../service/TwitterApi";
import IProfile from "../modal/IProfile";

export interface IAuthResponse {
    jwt: string;
    userId: string;
}

class AuthStore {
    @observable isModalOpen: boolean;
    @observable isAuthenticated: boolean;
    @observable username: string;
    @observable password: string;
    @observable firstName: string;
    @observable lastName: string;
    @observable firstNameHidden: boolean;
    @observable lastNameHidden: boolean;
    @observable registerHidden: boolean;

    @observable profile: IProfile;

    @observable authToken: string;
    @observable userId: string;

    constructor() {
        this.isModalOpen = false;
        this.isAuthenticated = false;
        this.username = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.firstNameHidden = true;
        this.lastNameHidden = true;
        this.registerHidden = true;
    }

    @action
    handleModalOpen = () => {
        this.isModalOpen = true;
        this.registerHidden = true;
    };

    @action
    handleRegisterModalOpen = () => {
        this.isModalOpen = true;
        this.registerHidden = false;
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
    handleLogout = (event: any) => {
        this.isAuthenticated = false;
        localStorage.clear();
    };

    @action
    authenticate = async () => {
        try {
            const response = await TwitterApi.authenticate(this.username, this.password);
            this.isAuthenticated = true;
            this.authToken = response.data.jwt;
            this.userId = response.data.userId;
            localStorage.setItem('token', this.authToken);

            this.setProfile(this.userId);
            this.handleModalClose();
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };


    public setProfile = async (userId: string) => {
        try {
            const response = await TwitterApi.getUserFromApi(userId);
            runInAction(() => {
                console.log(response);
                this.profile = response.data;
                console.log(this.profile)
            });
        } catch (e) {
            console.log(e);
        }
    };

    @action
    register = async () => {
        try {
            const response = await TwitterApi.authenticate(this.username, this.password);
            this.isAuthenticated = true;
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };

    @action
    handleFirstNameChange = (event: any) => {
        this.firstName = event.target.value;
    };

    @action
    handleLastNameChange = (event: any) => {
        this.lastName = event.target.value;
    };

    @action
    toRegister = () => {
        this.registerHidden = false;
    }

    @action
    toLogin = () => {
        this.registerHidden = true;
    }
}

export default AuthStore;
