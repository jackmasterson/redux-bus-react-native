import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {fetchData} from '../reducers/counter'

const mapStateToProps = (state) => ({
    postInfo: state,
    state: state,
});

const Data = (data) => {
    return (
        <View style={{marginBottom: 15}}>
            <Text>Date: {data.date}</Text>
            <Text>Time: {data.time}</Text>
            <Text>Destination: {data.destination}</Text>
            <Text>Location: {data.location}</Text>
            <Text>Issue: {data.issue}</Text>
        </View>
    )
}
class Status extends Component {

    componentDidMount() {
        this.rendered = true;
        return this.props.fetchData();
    }
    render(res) {
        if (!this.rendered) {
            return (
                <View>
                    <TouchableOpacity onPress={() => this.handlePress()}>
                        <Text>Refresh Statuses</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <ScrollView>
                    {this.props.postInfo.counter.data.map(datum =>
                        <Data key={datum.id} {...datum}/>
                    )}
                </ScrollView>
            )
        }

    }
}

export default connect(mapStateToProps, {fetchData})(Status);