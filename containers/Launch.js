import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    counter: state.counter,
});

class Launch extends Component {
    componentDidMount() {
        // Actions.busStatus();
    }
    handleSubmit(callback) {
        callback();
    }
    render() {
        const { dispatch } = this.props;
        return (
            <View>
                <TouchableOpacity 
                    style={{margin: 35}} 
                    onPress={() => 
                        this.handleSubmit(Actions.postInfo)
                    }
                >
                    <Text>Post Some Info</Text>
                </TouchableOpacity>                
                <TouchableOpacity 
                    style={{margin: 35}} 
                    onPress={() => 
                        this.handleSubmit(Actions.busStatus)
                    }
                >
                    <Text>Go to statuses</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Launch);