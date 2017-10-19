import React, { Component } from 'react';
import Status from '../components/Status';

export default class BusStatus extends Component {
    handlePress(callback) {
        callback();
    }
    render() {
        const { counter, dispatch } = this.props;
        return (
            <Status />
        )
    }
}
