import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {postId,id,title,body}= this.props.post
        return (
            <div>
                <div>postId {postId }</div>
                <div>id {id }</div>
                <div>title {title }</div>
                <div>body {body }</div>
                <hr/>
            </div>
        );
    }
}

export default Post;