import * as React from 'react';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./component/Header";
import Menu from "./component/Menu";
import TwitterApi from "./service/TwitterApi";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
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
                    <div className="App-intro">
                        <form onSubmit={TwitterApi.sendTweet}>
                            <label>
                                Name:
                                <input type="text" value={this.state.value} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
