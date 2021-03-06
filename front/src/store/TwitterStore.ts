import {computed, observable, action, runInAction} from "mobx";
import IProfile from "../modal/IProfile";
import TwitterApi from "../service/TwitterApi";
import AuthStore from "./AuthStore";

export interface ITweet {
    userName: string;
    txt: string;
    id: number;
    createdAt: Date;
}

class TwitterStore {
    @observable tweetMessage: string;
    @observable profile: IProfile;

    @observable tweets: ITweet[];

    private authStore: AuthStore;

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        this.tweetMessage = '';
        this.tweets = [];/* [{username:"Katy Perry", txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas", id: 1},
                       {username:"Toomas Lyys", txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas", id: 2}]; */
        this.fetchTweets();
    }

    @action
    public fetchTweets = async () => {
        try {
            const response = await TwitterApi.getUserTweets(this.getUserId);
            runInAction(() => {
                if (response.data) {
                    this.tweets = response.data;
                }
            });
        } catch (e) {
            console.log(e);
        }
    };
    
    @computed
    get getUserId(): string {
        const userId = window.location.pathname.substring(1).length === 0 ? this.authStore.userId : window.location.pathname.substring(1);
        this.authStore.setProfile(userId);
        return userId;
    }

    @computed
    get getTweetMessage(): string {
        return this.tweetMessage;
    }

    public setProfile = async () => {
        try {
            const response = await TwitterApi.getUserFromApi(this.authStore.userId);
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
    handleTweetMessageChange = (event: any) => {
        this.tweetMessage = event.target.value;
        return;
    };

    @action
    handleTweetMessageSubmit = (event: any) => {
        event.preventDefault();
        this.tweet(this.tweetMessage);
        this.tweetMessage = '';
        
        return;
    };

    @action
    private tweet = async (tweetMessage: string) => {
        try {
            const response = await TwitterApi.saveTweet(tweetMessage, this.authStore.authToken);
            runInAction(() => {
                if (response.data) {
                    this.tweets = response.data;
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }

}

export default TwitterStore;
