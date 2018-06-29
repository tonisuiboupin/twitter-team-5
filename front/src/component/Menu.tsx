import * as React from 'react';
import {Paper} from "@material-ui/core";
import AuthStore from "../store/AuthStore";
import {inject, observer} from "mobx-react";

export interface IMenuProps {
    authStore?: AuthStore;
}

@inject('authStore')
@observer
class Menu extends React.Component<IMenuProps> {
    render() {
        const {authStore} = this.props;
        return (
            <div className="menu">
                <div className="profile-wrapper">
                    {!authStore.isAuthenticated && <img src="https://i0.wp.com/blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg?fit=200%2C200" />}
                    {authStore.isAuthenticated && !!authStore.profile && <img src={authStore.profile.imageUrl} /> }
                    </div>
                <Paper className="menu-paper">
                    <div className="tweet-count">Tweets: 69</div>
                    <div className="following-count">Following: 13</div>
                    <div className="followers-count">Followers: 10</div>
                    <div className="like-count">Likes: 125</div>
                    {authStore.isAuthenticated && <div className="follow-button">Follow</div>}
                </Paper>
            </div>
        );
    }
}

export default Menu;
