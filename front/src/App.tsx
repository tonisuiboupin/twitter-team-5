import * as React from 'react';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./component/Header";
import Tweet from "./component/Tweet";
import TweetWriter from "./component/TweetWriter";
import Menu from "./component/Menu";
import TwitterStore from "./store/TwitterStore";
import { inject, observer } from 'mobx-react';

export interface IProfile {
    firstName: string;
    lastName: string;
}

export interface ITweet {
    username: string;
    txt: string;
    id: number;
}

interface IAppProps {
    twitterStore?: TwitterStore;
}

@inject('twitterStore')
@observer
class App extends React.Component<IAppProps> {
    
    private twitterStore: TwitterStore;

    constructor(props: IAppProps) {
        super(props);
        this.twitterStore = props.twitterStore;
    }
    
    public getTweets() {
        return this.twitterStore.tweets && this.twitterStore.tweets.map(tweet => 
            <Tweet username={tweet.username} txt={tweet.txt} key={tweet.id} />
        )
    }
    
    public render() {
        return (
            <div className="App">
                <Header/>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className="cover-paper">
                            <img src="http://via.placeholder.com/1000x400"/>
                        </Paper>
                    </Grid>
                </Grid>
                <div className="content-wrapper">
                    <Menu/>
                    <div className="profile">
                        <p>Name: kATY pERRY</p>
                        <p>Age: 76</p>
                        <p>Phone: 112</p>
                    </div>
                    <TweetWriter/>
                    <div className="tweets">
                        {this.getTweets()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
