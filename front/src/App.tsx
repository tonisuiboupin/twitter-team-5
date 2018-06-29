import * as React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import Header from "./component/Header";
import Tweet from "./component/Tweet";
import TweetWriter from "./component/TweetWriter";
import Menu from "./component/Menu";
import TwitterStore from "./store/TwitterStore";
import {inject, observer} from 'mobx-react';
import Button from "@material-ui/core/Button/Button";
import AuthStore from "./store/AuthStore";

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
    authStore?: AuthStore;
}

@inject('twitterStore', 'authStore')
@observer
class App extends React.Component<IAppProps> {

    public getTweets() {
        const {twitterStore} = this.props;
        return twitterStore.tweets && twitterStore.tweets.map(tweet =>
            <Tweet username={tweet.username} txt={tweet.txt} key={tweet.id}/>
        )
    }

    public render() {
        const {authStore} = this.props;
        return (
            <div className="App">
                <Header/>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div className="cover-paper">
                            <img
                                src="http://www.cannabisworldtraders.com/wp-content/uploads/2017/11/spencer-watson-330677-2500x500.jpg"/>
                        </div>
                    </Grid>
                </Grid>
                <div className="content-wrapper">
                    <Menu/>
                    <div className="left-side-page">
                        <div className="profile">
                            <p>Name: Katy Perry</p>
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
                        </div>
                    </div>
                    <div className="right-side-page">
                        <div>
                            <h2>New to shitter?</h2>
                            <p>Sign up now to get your own personalized timeline!</p>
                            <Button type="submit" variant="contained" color="primary" onClick={authStore.handleRegisterModalOpen}>
                                Register
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
