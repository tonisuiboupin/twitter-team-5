import * as React from 'react';
import { observer } from 'mobx-react';

export interface ITweetProps {
    username: string;
    txt: string;
}

@observer
class Tweet extends React.Component<ITweetProps> {
    
    render() {
        return (
                <div className="tweet">
                    <h3>{this.props.username}</h3>
                    <p>{this.props.txt}</p>
                </div>
        );
    }
}

export default Tweet;
