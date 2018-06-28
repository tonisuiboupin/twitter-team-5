import axios, { AxiosResponse } from 'axios';
import { ITweet } from "../store/TwitterStore";
import IProfile from "../modal/IProfile";

const BASE_URL = 'http://localhost:8080/';

class TwitterApi {
    static getHelloWorld = () => {
        axios.get(`${BASE_URL}`)
            .then(response => console.log(response));
    };
    
    static getUserFromApi = async (userId: number): Promise<AxiosResponse<IProfile>> => {
        return axios.get(`${BASE_URL}api/user/${userId}`);
    };
    
    static getUserTweets = async (userId: number): Promise<AxiosResponse<ITweet[]>> => {
        return axios.get(`${BASE_URL}api/user/${userId}/tweets`);
    };
}

export default TwitterApi;