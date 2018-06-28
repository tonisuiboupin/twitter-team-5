import {computed, observable} from "mobx";

class TwitterStore {
    @observable tweetMessage: string;

    constructor() {
        this.tweetMessage = '';
    }

    @computed
    get getTweetMessage(): string {
        return this.tweetMessage;
    }

}

export default TwitterStore;