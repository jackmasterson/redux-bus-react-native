import React, { Component } from 'react';
import Post from '../components/Post';

export default class PostInfo extends Component {
    render() {
        const { counter, dispatch } = this.props;
        return (
            <Post />
        );
    }
}

