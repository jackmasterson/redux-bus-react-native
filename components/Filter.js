import React, {Component} from 'react';
import {Picker, Button, View, Text} from 'react-native';
import {filterChanged, filterSelected} from '../reducers/counter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    state: state.counter.state
});

class Filter extends Component {
    componentWillMount() {
        this.filter = {};
        this.setState({
            location: ''
        });
    }

    handlePress() {
        // console.log('this dot props: ', this.props);
        console.log('DATA YO: ', this.props);
        this.props.dispatch(filterSelected(this.props.updatedFilter));
    }
    handleChange(text, field) {
        if (!this.filter[field]) {
            this.filter[field] = '';
        }
        this.filter[field] = text;
        this.setState({
            [field]: text
        })
        this.props.dispatch(filterChanged(this.filter));
    }
    render() {
        console.log('made it here');
        console.log(this.props);
        if (!this.props.state.updatedFilter) {
            return (
                <View>
                    <Picker
                        style={{ marginBottom: 3 }}
                        selectedValue={this.state.location}
                        onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue, 'location')}>
                        <Picker.Item label="Please select a destination to filter by" value="location" />
                        <Picker.Item label="Port Authority" value="port-authority" />
                        <Picker.Item label="Red Bank" value="red-bank" />
                        <Picker.Item label="Monmouth" value="monmouth" />
                        <Picker.Item label="PNC Arts Center" value="pnc" />
                        <Picker.Item label="Forked River" value="forked-river" />
                    </Picker>
                    <Button
                        title="Submit Filter"
                        onPress={() => this.handlePress()} />
                </View>
            )
        } else {
            return (
                <Text>Selected filter: {this.props.state.updatedFilter}</Text>
            );
        }

    }
}

export default connect(mapStateToProps)(Filter);