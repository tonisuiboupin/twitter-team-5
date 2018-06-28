import * as React from 'react';
import {Grid, Paper} from "@material-ui/core";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="profile-wrapper">
                    <img src="http://via.placeholder.com/200x200" alt=""/>
                </div>
                <Paper className="menu-paper">Siia tuleb menyy</Paper>
            </div>
        );
    }
}

export default Menu;
