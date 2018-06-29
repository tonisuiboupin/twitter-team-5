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
                    <img src="data:image/jpeg;base64,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" alt=""/>
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
