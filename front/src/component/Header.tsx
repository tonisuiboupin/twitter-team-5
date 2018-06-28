import * as React from 'react';
import {AppBar, Toolbar, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home'
import NotificationIcon from '@material-ui/icons/Notifications'
import MessageIcon from '@material-ui/icons/Message'
import TwitterApi from "../service/TwitterApi";


class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Button className="home-icon" color="inherit" onClick={TwitterApi.getHelloWorld}>
                            <HomeIcon /> Menu
                        </Button>
                        <Button className="notification-icon" color="inherit">
                            <NotificationIcon /> Notifications
                        </Button>
                        <Button className="message-icon" color="inherit">
                            <MessageIcon /> Messages
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default Header;
