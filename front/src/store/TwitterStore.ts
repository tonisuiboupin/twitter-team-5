import {action, computed, observable, runInAction} from "mobx";
import TwitterApi from "../service/TwitterApi";
import IProfile from "../modal/IProfile";

class TwitterStore {
    @observable tweetMessage: string;
    @observable profile: IProfile;

    constructor() {
        this.tweetMessage = '';
    }

    @computed
    get getTweetMessage(): string {
        return this.tweetMessage;
    }

    public getProfile = async () => {
        try {
            const response = await TwitterApi.getUserFromApi(1);
            runInAction(() => {
                console.log(response);
                this.profile = response.data;
            });
        } catch (e) {
            console.log(e);
        }
    };

    @action
    handleTweetMessageChange = (event: any) => {
        this.tweetMessage = event.target.value;
        return;
    };

    handleTweetMessageSubmit = (event: any) => {
        alert('A tweet was submitted: ' + this.tweetMessage);
        event.preventDefault();
        this.tweet(this.tweetMessage);
        return;
    };

    private tweet = async (tweetMessage: string) => {
        try {
            await TwitterApi.saveTweet(tweetMessage);
        }
        catch (e) {
            console.log(e);
        }
    }



}

export default TwitterStore;
