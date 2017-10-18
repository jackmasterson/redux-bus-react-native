import React, { Component } from 'react';
import Status from '../components/Status';



export default class BusStatus extends Component {
    componentDidMount() {
        console.log('NOPE: ', this.props);
    }
    render() {
        const { counter, dispatch } = this.props;
        return (
            <Status/>
        );
    }
}
