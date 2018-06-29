import * as React from 'react';
import { observer } from 'mobx-react';

export interface ITweetProps {
    userName: string;
    txt: string;
    createdAt: Date;
}

@observer
class Tweet extends React.Component<ITweetProps> {
    
    render() {
        return (
            <div className="tweet">
                <div className='tweet-header'> {this.props.userName} <span>{this.props.createdAt}</span></div>
                <p>{this.props.txt}</p>
            </div>
        );
    }
}

export default Tweet;
