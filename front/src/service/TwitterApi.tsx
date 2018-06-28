import axios, { AxiosResponse } from 'axios';
import { IProfile } from "../App";

const BASE_URL = 'http://localhost:8080/';

class TwitterApi {
    static getHelloWorld = () => {
        axios.get(`${BASE_URL}`)
            .then(response => console.log(response));
    };

    static sendTweet = (tweet: string) => {
        axios.post(`${BASE_URL}/tweet`, tweet)
            .then(response => console.log(response));
    };
    
    static getUserFromApi = async (userId: number): Promise<AxiosResponse<IProfile>> => {
        return axios.get(`${BASE_URL}api/user/${userId}`);
    };
}

export default TwitterApi;