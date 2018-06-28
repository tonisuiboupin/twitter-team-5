import {action, observable} from "mobx";
import TwitterApi from "../service/TwitterApi";

class TwitterStore {

    @observable tweetMessage: string;

    constructor() {
        this.tweetMessage = '123';
    }

    sendTweet = (inputValue: string): void => {
        TwitterApi.sendTweet(inputValue);
    };

    @action
    setTweetMessage(input: string) {
        this.tweetMessage = input
    }

    testFn() {
        const message = this.tweetMessage;
        TwitterApi.sendTweet(message);
    }

}

export default TwitterStore;
