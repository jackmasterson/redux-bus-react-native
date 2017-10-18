import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import {fetchData} from '../reducers/counter'

const mapStateToProps = (state) => ({
    postInfo: state,
    state: state,
});

const Data = (data) => {
    console.log('data in Data: ', data);
    return (
        <Text>{data}</Text>
    )
}
class Status extends Component {
    handlePress() {
        console.log(this.state);
        console.log('postinfo from post: ', this.props.postInfo.counter.data);
    }
    componentWillMount() {
        return this.props.fetchData();
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.handlePress()}>
                    <Text>Refresh Statuses</Text>
                    <Text>{this.state.postInfo.destination}</Text>
                </TouchableOpacity>
                <View>
                    {/* {this.props.postInfo.counter.data.map((datum) => {
                        <Data key={datum.id} {...datum}/>
                    })} */}
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, {fetchData})(Status);