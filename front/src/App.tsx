import * as React from 'react';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./component/Header";
import Menu from "./component/Menu";
import {inject, observer} from "mobx-react";
import TwitterStore from "./store/TwitterStore";

export interface IAppProps {
    twitterStore?: TwitterStore;
}

@inject('twitterStore')
@observer
class App extends React.Component<IAppProps> {


    handleChange(event: any) {
        const {twitterStore} = this.props;
        twitterStore.sendTweet(event.target.value);
    }

    public render() {
        const {twitterStore} = this.props;

        const value = twitterStore.tweetMessage;

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
                        <p>Name: Katy Perry</p>
                        <p>Age: 76</p>
                        <p>Phone: 112</p>
                    </div>
                    <div className="tweets">
                        <div className="tweet">
                            <h3>Katy Perry</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi
                                nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas.</p>
                        </div>
                        {value}
                        <div className="App-intro">
                            <p>{value}</p>
                            <input type="text"
                                   onChange={twitterStore.testFn}/>
                            <button value="test" onClick={twitterStore.testFn}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
