import * as React from 'react';
import {inject, observer} from 'mobx-react';
import TwitterStore from "../store/TwitterStore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AuthStore from "../store/AuthStore";

export interface ITweetWriterProps {
    twitterStore?: TwitterStore;
    authStore?: AuthStore;
}

@inject('twitterStore', 'authStore')
@observer
class TweetWriter extends React.Component<ITweetWriterProps> {

    render() {
        const {twitterStore, authStore} = this.props;
        return (
            <>
                {authStore.isAuthenticated && <div>
                    <TextField
                        id="full-width"
                        value={twitterStore.tweetMessage}
                        onChange={twitterStore.handleTweetMessageChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="What's happening?"
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" onClick={twitterStore.handleTweetMessageSubmit}>
                        Tweet
                    </Button>
                </div>}

            </>
        );
    }
}

export default TweetWriter;
