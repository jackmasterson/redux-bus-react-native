import React, { Component } from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    TextInput, 
    Button, 
    Picker, 
    DatePickerIOS,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { submitPost, inputChange } from '../reducers/counter';
import { connect } from 'react-redux';
import {PostInfo} from '../containers/PostInfo';
import moment from 'moment';

const mapStateToProps = (state) => ({
    postInfo: state.data.postInfo,
});

class Post extends Component {
    handleChange(text, field) {
        this.props.dispatch(inputChange(text, field));
    }
    handleSubmit() {
        this.props.dispatch(submitPost(this.props.postInfo));
    }
    render() {

        return (
            <ScrollView>
                <TextInput
                    onChangeText={(text) => this.handleChange(text, 'time')}
                    style={{ marginBottom: 3 }}
                    placeholder="Time"
                    keyboardType="numbers-and-punctuation"></TextInput>
                <Picker
                    style={{ marginBottom: 3 }}
                    selectedValue={this.props.postInfo.location}
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
                    selectedValue={this.props.postInfo.destination}
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