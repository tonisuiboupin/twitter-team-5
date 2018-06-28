import * as React from 'react';
import './App.css';
import {Grid, Paper} from "@material-ui/core";
import Header from "./component/Header";
import Menu from "./component/Menu";
import { observer } from 'mobx-react';

export interface IProfile {
    firstName: string;
    lastName: string;
}

// interface IAppProps {}

@observer
class App extends React.Component /*<IAppProps> */ {
    
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
                        <div className="tweet">
                            <h3>Katy Perry</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut cumque debitis dicta ducimus, exercitationem fuga magnam modi nostrum possimus quas quasi quisquam sed sint soluta tempora vel! Ad, voluptas.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
