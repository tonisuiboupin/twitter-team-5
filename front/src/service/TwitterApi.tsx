import axios, { AxiosResponse } from 'axios';
import { ITweet } from "../store/TwitterStore";
import IProfile from "../modal/IProfile";
import { IAuthResponse } from "../store/AuthStore";

const BASE_URL = 'http://localhost:8080/';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


class TwitterApi {
    static getUserFromApi = async (userId: string): Promise<AxiosResponse<IProfile>> => {
        return axios.get(`${BASE_URL}api/user/${userId}`);
    };

    static getUserTweets = async (userId: string): Promise<AxiosResponse<ITweet[]>> => {
        return axios.get(`${BASE_URL}api/user/${userId}/tweets`);
    };

    static authenticate = async (username: string, password: string): Promise<AxiosResponse<IAuthResponse>> => {
        return axios.post(`${BASE_URL}api/auth/login`, {'userName': username, 'password': password});
    };
    
    static saveTweet = async (tweetMessage: string, jwt: string): Promise<AxiosResponse<ITweet[]>> => {
        return axios.post(`${BASE_URL}api/tweet/post`, {txt: tweetMessage}, {
            headers: { Authorization: jwt }
        });
        
        
        /* return fetch( `${BASE_URL}api/tweet/post`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': jwt
            },
            body: JSON.stringify({
                txt: tweetMessage,
            })
        }) */
    }
}

export default TwitterApi;
