import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {fetchData} from '../reducers/counter'

const mapStateToProps = (state) => ({
    postInfo: state,
    state: state,
});

class Status extends Component {
    handlePress() {
        console.log('this.props; ', this.props);
        console.log('postinfo from post: ', this.props.postInfo.counter.data);
    }
    componentWillMount() {
        return this.props.fetchData();
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.handlePress()}>
                    <Text>Status Goes Here</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(mapStateToProps, {fetchData})(Status);