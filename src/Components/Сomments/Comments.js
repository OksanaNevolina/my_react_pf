import React, {Component} from 'react';
import {commentsApiService} from "../../services/commentsApiService";
import Comment from "../Comment/Comment";


class Comments extends Component {
    constructor(props) {
    super(props);
    this.state={
        comments:[]
    }
}

    componentDidMount() {
        commentsApiService.getAll().then(({data})=>this.setState({comments:data}))
    }

    render() {

        return (
            <div>
                {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
                <hr/>

            </div>
        );
    }
}

export default Comments;