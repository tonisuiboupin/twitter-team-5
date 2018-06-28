import axios from 'axios';

const BASE_URL = 'http://192.168.3.188:8080/';

class TwitterApi {
    static getHelloWorld = () => {
        axios.get(`${BASE_URL}`)
            .then(response => console.log(response));
    };

    static sendTweet = (tweet: string) => {
        axios.post(`${BASE_URL}/tweet`, tweet)
            .then(response => console.log(response));
    };
}

export default TwitterApi;