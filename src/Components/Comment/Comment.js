import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, body} = this.props.comment
        return (
            <div >
                <div>id  {id }</div>
                <div>body  {body}</div>
                <hr/>
            </div>
        );
    }
}

export default Comment;