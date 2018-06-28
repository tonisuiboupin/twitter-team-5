import axios, { AxiosResponse } from 'axios';
import { ITweet } from "../store/TwitterStore";
import IProfile from "../modal/IProfile";

const BASE_URL = 'http://localhost:8080/';

class TwitterApi {
    static getHelloWorld = () => {
        axios.get(`${BASE_URL}`)
            .then(response => console.log(response));
    };
    
    static getUserFromApi = async (userId: string): Promise<AxiosResponse<IProfile>> => {
        return axios.get(`${BASE_URL}api/user/${userId}`);
    };

    static getUserTweets = async (userId: string): Promise<AxiosResponse<ITweet[]>> => {
        return axios.get(`${BASE_URL}api/user/${userId}/tweets`);
    };

    static saveTweet = async (tweetMessage: string) => {
        fetch( `${BASE_URL}api/tweet/post`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: 28227219408117389584822379739,
                txt: tweetMessage,
            })
        })
    }
}

export default TwitterApi;
