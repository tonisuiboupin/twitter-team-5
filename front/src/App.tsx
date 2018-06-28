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
                    {value}
                    <div className="App-intro">
                        <p>{value}</p>
                        <input type="text"
                               onChange={twitterStore.testFn} />
                        <button value="test" onClick={twitterStore.testFn}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
