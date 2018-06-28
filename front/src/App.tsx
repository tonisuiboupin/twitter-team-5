import * as React from 'react';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./component/Header";
import Tweet from "./component/Tweet";
import Menu from "./component/Menu";
import { observer } from 'mobx-react';

export interface IProfile {
    firstName: string;
    lastName: string;
}

export interface ITweet {
    username: string;
    txt: string;
    id: number;
}

// interface IAppProps {}

@observer
class App extends React.Component /*<IAppProps> */ {
    
    private tweets : ITweet[];

    constructor() {
        super({});
        this.tweets = [{username:"Katy Perry", txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas", id: 1},
                       {username:"Toomas Lyys", txt:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas", id: 2}];
    }
    
    public getTweets() {
        return this.tweets && this.tweets.map(tweet => 
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
                    <div className="tweets">
                        {this.getTweets()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
