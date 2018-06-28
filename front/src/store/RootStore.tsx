import * as mobx from 'mobx';

import TwitterStore from "./TwitterStore";

export class RootStore {
    twitterStore: TwitterStore;

    constructor() {
        mobx.configure({ enforceActions: true });
        this.twitterStore = new TwitterStore();
    }
}

export default new RootStore();