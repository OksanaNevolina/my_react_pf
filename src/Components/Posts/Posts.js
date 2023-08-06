import React, {Component} from 'react';
import {postsApiService} from "../../services/postsApiService";
import Post from "../Post/Post";


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }
    }


    componentDidMount() {
        postsApiService.getAll().then(({data})=>this.setState({posts:data}))
    }


    render() {
        return (
            <div>
                <h1>list</h1>

                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export default Posts;