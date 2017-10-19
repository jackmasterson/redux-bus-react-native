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
        this.props.dispatch(filterSelected(this.props.state.updatedFilter));
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
            console.log('this.state: ', this.props);
            let pulled = [];
            let k = 0;
            for (let datum of this.props.state.state.data) {
                let format = datum.location.split(' ');
                format = format.join('-');
                format = format.toLowerCase();
                console.log('format: ', format);
                if (this.state.location === format) {
                    datum.k = k;
                    pulled.push(datum);
                }
                k++;
            }
            // if (this.state.location === )
            return (
                <View>
                {pulled.map(info => 
                    <View key={info.k}>
                        <Text>{info.date}</Text>
                        <Text>{info.time}</Text>
                        <Text>{info.destination}</Text>
                    </View>
                )}
                </View>
            );
        }

    }
}

export default connect(mapStateToProps)(Filter);