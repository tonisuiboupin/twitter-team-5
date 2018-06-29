import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "mobx-react";
import TwitterStore from "./store/TwitterStore";
import AuthStore from "./store/AuthStore";
import {runInAction} from "mobx";

const authStore = new AuthStore();
const twitterStore = new TwitterStore(authStore);

// Check for token and update application state if required
const token = localStorage.getItem('token');
if (token) {
    runInAction(() => {
        authStore.isAuthenticated = true;
    });
}

const Root = () => (
    <Provider twitterStore={twitterStore} authStore={authStore}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
);

ReactDOM.render(
    <Root />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
