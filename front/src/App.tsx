import * as React from 'react';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./component/Header";
import Tweet from "./component/Tweet";
import TweetWriter from "./component/TweetWriter";
import Menu from "./component/Menu";
import TwitterStore from "./store/TwitterStore";
import {inject, observer} from 'mobx-react';
import Button from "@material-ui/core/Button/Button";

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
            <Tweet username={tweet.username} txt={tweet.txt} key={tweet.id}/>
        )
    }

    public render() {
        return (
            <div className="App">
                <Header/>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className="cover-paper">
                            <img
                                src="http://www.cannabisworldtraders.com/wp-content/uploads/2017/11/spencer-watson-330677-2500x500.jpg"/>
                        </Paper>
                    </Grid>
                </Grid>
                <div className="content-wrapper">
                    <Menu/>
                    <div className="left-side-page">
                        <div className="profile">
                            <p>Name: kATY pERRY</p>
                            <p>Age: 76</p>
                            <p>Phone: 112</p>
                        </div>
                    </div>
                    <div className="main-page">
                        <div className="writer">
                            <TweetWriter/>
                        </div>
                        <div className="tweets">
                            {this.getTweets()}
                            <div className="tweet">
                                <div className='tweet-header'>Katy Perry <span>June 2</span></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos eligendi natus! Ab architecto, deleniti distinctio doloribus illum ipsam quaerat unde voluptas. Aperiam assumenda consectetur explicabo modi perspiciatis repellendus voluptatibus?</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-page">
                        <div>
                            <h2>New to shitter?</h2>
                            <p>Sign up now to get your own personalized timeline!</p>
                            <Button type="submit" variant="contained" color="primary">
                                Log in
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
