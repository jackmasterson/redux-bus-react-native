import React, {Component} from 'react';
import {Picker, Button, View, Text} from 'react-native';
import {filterChanged, filterSelected} from '../reducers/counter';
import {connect} from 'react-redux';
import Data from './Data';

const mapStateToProps = (state) => ({
    state: state.counter.state,
    filter: state.counter
});

class Filter extends Component {
    componentWillMount() {
        this.filter = {};
        this.setState({
            destination: ''
        });
    }

    handleSubmit() {
        this.props.dispatch(filterSelected(this.props.filter.updatedFilter));
    }
    handleChange(text, field) {
        if (!this.filter[field]) {
            this.filter[field] = '';
        }
        this.filter[field] = text;
        this.setState({
            [field]: text
        })
        this.props.dispatch(filterChanged(this.filter.destination));
    }
    render() {
        if (!this.props.state.updatedFilter) {
            return (
                <View>
                    <Picker
                        style={{ marginBottom: 3 }}
                        selectedValue={this.state.destination}
                        onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue, 'destination')}>
                        <Picker.Item label="Please select a destination to filter by" value="destination" />
                        <Picker.Item label="Port Authority" value="port-authority" />
                        <Picker.Item label="Red Bank" value="red-bank" />
                        <Picker.Item label="Monmouth" value="monmouth" />
                        <Picker.Item label="PNC Arts Center" value="pnc" />
                        <Picker.Item label="Forked River" value="forked-river" />
                    </Picker>
                    <Button
                        title="Submit Filter"
                        onPress={() => this.handleSubmit()} />
                </View>
            )
        } else {
            let pulled = [];
            let k = 0;
            for (let datum of this.props.state.state.data) {
                let format = datum.destination.split(' ');
                format = format.join('-');
                format = format.toLowerCase();
                if (this.state.destination === format) {
                    datum.k = k;
                    pulled.push(datum);
                }
                k++;
            }
            console.log(pulled);
            return (
                <View>
                {pulled.map(info => 
                    <Data key={info.k} {...info} />
                )}
                </View>
            );
        }

    }
}

export default connect(mapStateToProps)(Filter);