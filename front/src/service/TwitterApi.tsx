import axios, { AxiosResponse } from 'axios';
import { IProfile } from "../App";

const BASE_URL = 'http://localhost:8080/';

class TwitterApi {
    static getHelloWorld = () => {
        axios.get(`${BASE_URL}`)
            .then(response => console.log(response));
    };
    
    static getProfileFromApi = async (profileId: number): Promise<AxiosResponse<IProfile>> => {
        return axios.get(`${BASE_URL}api/profile/${profileId}`);
    };
}

export default TwitterApi;