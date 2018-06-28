import * as React from 'react';
import {inject, observer} from 'mobx-react';
import TwitterStore from "../store/TwitterStore";

export interface ITweetWriterProps {
    twitterStore?: TwitterStore;
}

@inject('twitterStore')
@observer
class TweetWriter extends React.Component<ITweetWriterProps> {

    render(){
    const {twitterStore} = this.props;
        return (
            <form onSubmit={twitterStore.handleTweetMessageSubmit}>
                <label>
                    Tweet:
                    <input type="text" value={twitterStore.tweetMessage} onChange={twitterStore.handleTweetMessageChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default TweetWriter;
