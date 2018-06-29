import * as React from 'react';
import {inject, observer} from 'mobx-react';
import TwitterStore from "../store/TwitterStore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export interface ITweetWriterProps {
    twitterStore?: TwitterStore;
}

@inject('twitterStore')
@observer
class TweetWriter extends React.Component<ITweetWriterProps> {

    render(){
    const {twitterStore} = this.props;
        return (
            <>
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
            </>
        );
    }
}

export default TweetWriter;
