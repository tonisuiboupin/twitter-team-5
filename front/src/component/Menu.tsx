import * as React from 'react';
import {Grid, Paper} from "@material-ui/core";

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Grid item xs={12}>
                    <Paper className="menu-paper">Siia tuleb menyy</Paper>
                </Grid>
            </div>
        );
    }
}

export default Menu;
