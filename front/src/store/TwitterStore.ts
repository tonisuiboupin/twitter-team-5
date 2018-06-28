import {computed, observable, action, runInAction} from "mobx";
import IProfile from "../modal/IProfile";
import TwitterApi from "../service/TwitterApi";

export interface ITweet {
    username: string;
    txt: string;
    id: number;
}

class TwitterStore {
    @observable tweetMessage: string;
    @observable profile: IProfile;

    @observable tweets: ITweet[];

    constructor() {
        this.tweetMessage = '';
        this.tweets = [];/* [{username:"Katy Perry", txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas", id: 1},
                       {username:"Toomas Lyys", txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas", id: 2}]; */
        this.fetchTweets();
    }
    
    @action
    public fetchTweets = async () => {
        try {
            const response = await TwitterApi.getUserTweets(1);
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

}

export default TwitterStore;