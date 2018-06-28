import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "mobx-react";
import TwitterStore from "./store/TwitterStore";

const twitterStore = new TwitterStore();

ReactDOM.render(
    <Provider twitterStore={twitterStore}>
        <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


