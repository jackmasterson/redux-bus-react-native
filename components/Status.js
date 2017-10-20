import React, { Component } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import {fetchData} from '../reducers/counter';
import {Actions} from 'react-native-router-flux';
import Data from './Data';

const mapStateToProps = (state) => ({
    postInfo: state.data.postInfo,
    state: {...state},
});


class Status extends Component {
    constructor(props) {
        super(props);
        // this.dataFetched = false;
    }
    componentDidMount() {
        this.handlePress();
    }
    handlePress() {
        this.props.fetchData();
        this.dataFetched = true;
    }
    render() {
        if (!this.dataFetched) {
            return (
                <View>
                    <TouchableOpacity onPress={() => this.handlePress()}>
                        <Text>Refresh Statuses</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            this.dataFetched = false;
            return (
                <ScrollView>
                    <Button
                        title="Filter by Destination"
                        onPress={() => Actions.filtered()}
                    />
                    {this.props.postInfo.map(datum =>
                        <Data key={datum.id} {...datum}/>
                    )}
                </ScrollView>
            )
        }

    }
}

export default connect(mapStateToProps, {fetchData})(Status);