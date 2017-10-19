import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { submitPost, inputChange } from '../reducers/counter';
import { connect } from 'react-redux';
import {PostInfo} from '../containers/PostInfo';

const mapStateToProps = (state) => ({
    postInfo: this.state,
});

class Post extends Component {
    componentWillMount() {
        this.setState({
            destination: '',
            location: '',
        });
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
        this.setState({
            [field]: text
        })
        this.props.dispatch(inputChange(this.postInfo));
    }
    handleSubmit() {
        this.props.dispatch(submitPost(this.postInfo));
        // Actions.busStatus();
    }
    render() {
        const {dispatch} = this.props;
        return (
            <ScrollView>
                <TextInput 
                    onChangeText={(text) => this.handleChange(text, 'date')}
                    style={{ marginBottom: 15 }} 
                    placeholder="Date"></TextInput>
                <TextInput
                    onChangeText={(text) => this.handleChange(text, 'time')}
                    style={{ marginBottom: 3 }}
                    placeholder="Time"
                    keyboardType="numbers-and-punctuation"></TextInput>
                <Picker
                    style={{ marginBottom: 3 }}
                    selectedValue={this.state.location}
                    onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue, 'location')}>
                    <Picker.Item label="Please select an origin location" value="location" />
                    <Picker.Item label="Port Authority" value="port-authority" />
                    <Picker.Item label="Red Bank" value="red-bank" />
                    <Picker.Item label="Monmouth" value="monmouth" />
                    <Picker.Item label="PNC Arts Center" value="pnc" />
                    <Picker.Item label="Forked River" value="forked-river" />
                </Picker>
                <Picker
                    style={{ marginBottom: 3 }}
                    selectedValue={this.state.destination}
                    onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue, 'destination')}>
                    <Picker.Item label="Please select a destination" value="destination" />
                    <Picker.Item label="Port Authority" value="port-authority" />
                    <Picker.Item label="Red Bank" value="red-bank" />
                    <Picker.Item label="Monmouth" value="monmouth" />
                    <Picker.Item label="PNC Arts Center" value="pnc" />
                    <Picker.Item label="Forked River" value="forked-river" />
                </Picker>
                <TextInput
                    onChangeText={(text) => this.handleChange(text, 'issue')}
                    style={{ marginBottom: 3 }}
                    placeholder="Issue or Message"></TextInput>
                <Button
                    title="submit"
                    onPress={() => this.handleSubmit()}>
                    Submit Report
                </Button>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Post);