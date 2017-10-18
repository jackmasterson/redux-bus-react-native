import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { submitPost } from '../reducers/counter';
import { connect } from 'react-redux';
import {PostInfo} from '../containers/PostInfo';

const mapStateToProps = (state) => ({
    postInfo: this.state,
});

class Post extends Component {
    componentWillMount() {
        this.postInfo = this.postInfo || {
            date: '',
            time: '',
            location: '',
            destination: '',
            issue: ''
        }
    }
    handleChange(text, field) {
        this.postInfo[field] = text;
    }
    handleSubmit() {
        this.props.dispatch(submitPost(this.postInfo));
        Actions.busStatus();
    }
    render() {
        const {dispatch} = this.props;
        return (
            <View>
                <TextInput 
                    onChangeText={(text) => this.handleChange(text, 'date')}
                    style={{ marginBottom: 15 }} 
                    placeholder="Date"></TextInput>
                <TextInput
                    onChangeText={(text) => this.handleChange(text, 'time')}
                    style={{ marginBottom: 15 }}
                    placeholder="Time"></TextInput>
                <TextInput
                    onChangeText={(text) => this.handleChange(text, 'location')}
                    style={{ marginBottom: 15 }}
                    placeholder="Location"></TextInput>
                <TextInput
                    onChangeText={(text) => this.handleChange(text, 'destination')}
                    style={{ marginBottom: 15 }}
                    placeholder="Destination"></TextInput>
                <TextInput
                    onChangeText={(text) => this.handleChange(text, 'issue')}
                    style={{ marginBottom: 15 }}
                    placeholder="Issue or Message"></TextInput>
                <Button 
                    title="submit"
                    onPress={() => this.handleSubmit()}>
                    Submit Report
                </Button>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Post);