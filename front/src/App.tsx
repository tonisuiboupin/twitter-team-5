import * as React from 'react';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./component/Header";
import Menu from "./component/Menu";

class App extends React.Component {

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
                    <div className="App-intro"/>
                </div>
            </div>
        );
    }
}

export default App;
